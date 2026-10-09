// ── LE MAILLAGE ────────────────────────────────────────────────────────
  //
  // Des nœuds qui dérivent lentement ; un lien se dessine entre deux nœuds
  // assez proches, d'autant plus net qu'ils sont près. Toutes les quelques
  // secondes, une goutte part d'un nœud à gauche et cherche, de lien en
  // lien, un nœud à droite — en suivant VRAIMENT les liens existants
  // (parcours en largeur), comme un message Droplet. À chaque arrivée sur
  // un nœud, une onde.
  //
  // ⚠️ SOBRE PAR CONSTRUCTION. Le canvas se met en pause hors de l'écran
  // et quand l'onglet est caché ; avec « réduire les animations », il est
  // dessiné une seule fois, immobile.

  type Noeud = { x: number; y: number; vx: number; vy: number; r: number };
  type Onde = { x: number; y: number; t: number };

  const canvas = document.querySelector<HTMLCanvasElement>('[data-maillage]');
  const ctx = canvas?.getContext('2d');

  if (canvas && ctx) {
    const reduit = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let l = 0;
    let h = 0;
    let dpr = 1;
    let noeuds: Noeud[] = [];
    let ondes: Onde[] = [];
    let chemin: number[] = [];
    let debutChemin = 0;
    let prochain = 0;
    let visible = true;
    let image = 0;

    const PORTEE = () => Math.max(120, Math.min(170, l / 9));
    const DUREE_SAUT = 520;

    function semer() {
      const r = canvas!.getBoundingClientRect();
      l = r.width;
      h = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = Math.round(l * dpr);
      canvas!.height = Math.round(h * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(110, Math.max(36, (l * h) / 15000)));
      noeuds = Array.from({ length: n }, () => ({
        x: Math.random() * l,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: 1.4 + Math.random() * 1.6,
      }));
      chemin = [];
    }

    function voisins(i: number): number[] {
      const p = PORTEE();
      const a = noeuds[i];
      const v: number[] = [];
      for (let j = 0; j < noeuds.length; j++) {
        if (j === i) continue;
        const b = noeuds[j];
        if (Math.hypot(a.x - b.x, a.y - b.y) < p) v.push(j);
      }
      return v;
    }

    // Un vrai chemin, de lien en lien, d'un nœud à gauche vers un nœud à
    // droite : un parcours en largeur, comme le routage du maillage.
    function trouverChemin(): number[] {
      const gauche = noeuds
        .map((n, i) => ({ n, i }))
        .filter(({ n }) => n.x < l * 0.3)
        .map(({ i }) => i);
      if (!gauche.length) return [];
      const depart = gauche[Math.floor(Math.random() * gauche.length)];
      const precedent = new Map<number, number>([[depart, -1]]);
      const file = [depart];
      let arrivee = -1;
      while (file.length) {
        const i = file.shift()!;
        if (noeuds[i].x > l * 0.72) {
          arrivee = i;
          break;
        }
        for (const j of voisins(i)) {
          if (!precedent.has(j)) {
            precedent.set(j, i);
            file.push(j);
          }
        }
      }
      if (arrivee < 0) return [];
      const c: number[] = [];
      for (let i = arrivee; i !== -1; i = precedent.get(i)!) c.unshift(i);
      return c.length > 2 ? c : [];
    }

    function dessiner(maintenant: number) {
      ctx!.clearRect(0, 0, l, h);
      const p = PORTEE();
      // La couleur du thème, relue à chaque image : pendant qu'elle glisse
      // d'une teinte à l'autre, le maillage suit le reste du site.
      const rvb = rvbGoutte();

      // Les liens.
      ctx!.lineWidth = 1;
      for (let i = 0; i < noeuds.length; i++) {
        const a = noeuds[i];
        for (let j = i + 1; j < noeuds.length; j++) {
          const b = noeuds[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < p) {
            ctx!.strokeStyle = `rgba(76,195,255,${(1 - d / p) * 0.16})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // Le chemin emprunté par la goutte, éclairé derrière elle.
      let posGoutte: { x: number; y: number } | null = null;
      if (chemin.length > 1) {
        const ecoule = maintenant - debutChemin;
        const etape = Math.min(chemin.length - 1, ecoule / DUREE_SAUT);
        const k = Math.floor(etape);
        ctx!.strokeStyle = `rgba(${rvb},0.55)`;
        ctx!.lineWidth = 1.6;
        ctx!.beginPath();
        ctx!.moveTo(noeuds[chemin[0]].x, noeuds[chemin[0]].y);
        for (let s = 1; s <= k; s++) ctx!.lineTo(noeuds[chemin[s]].x, noeuds[chemin[s]].y);
        if (k < chemin.length - 1) {
          const a = noeuds[chemin[k]];
          const b = noeuds[chemin[k + 1]];
          const f = etape - k;
          // Une courbe d'élan : la goutte part vite, ralentit en arrivant.
          const e = 1 - Math.pow(1 - f, 3);
          posGoutte = { x: a.x + (b.x - a.x) * e, y: a.y + (b.y - a.y) * e };
          ctx!.lineTo(posGoutte.x, posGoutte.y);
        }
        ctx!.stroke();

        // Une onde à chaque nœud atteint.
        const atteints = Math.floor(etape) + 1;
        while (ondes.length < atteints && ondes.length < chemin.length) {
          const n = noeuds[chemin[ondes.length]];
          ondes.push({ x: n.x, y: n.y, t: maintenant });
        }
        if (ecoule > (chemin.length - 1) * DUREE_SAUT + 1600) {
          chemin = [];
        }
      }

      // Les nœuds : des téléphones, vus de très haut.
      for (const n of noeuds) {
        ctx!.fillStyle = 'rgba(245,245,247,0.45)';
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (const o of ondes) {
        const age = (maintenant - o.t) / 1100;
        if (age > 1) continue;
        ctx!.strokeStyle = `rgba(${rvb},${0.55 * (1 - age)})`;
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.arc(o.x, o.y, 4 + age * 26, 0, Math.PI * 2);
        ctx!.stroke();
      }
      if (!chemin.length) ondes = [];

      if (posGoutte) {
        const g = ctx!.createRadialGradient(posGoutte.x, posGoutte.y, 0, posGoutte.x, posGoutte.y, 16);
        g.addColorStop(0, `rgba(${rvb},0.9)`);
        g.addColorStop(1, `rgba(${rvb},0)`);
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(posGoutte.x, posGoutte.y, 16, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.fillStyle = '#fff';
        ctx!.beginPath();
        ctx!.arc(posGoutte.x, posGoutte.y, 2.6, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function avancer() {
      for (const n of noeuds) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -10 || n.x > l + 10) n.vx *= -1;
        if (n.y < -10 || n.y > h + 10) n.vy *= -1;
      }
    }

    function boucle(maintenant: number) {
      image = 0;
      if (!visible || document.hidden) return;
      avancer();
      if (!chemin.length && maintenant > prochain) {
        chemin = trouverChemin();
        debutChemin = maintenant;
        ondes = [];
        prochain = maintenant + 3200;
      }
      dessiner(maintenant);
      image = requestAnimationFrame(boucle);
    }

    function relancer() {
      if (!image && visible && !document.hidden && !reduit) image = requestAnimationFrame(boucle);
    }

    semer();
    if (reduit) {
      chemin = trouverChemin();
      debutChemin = performance.now() - 1e6;
      dessiner(performance.now());
    } else {
      prochain = performance.now() + 900;
      relancer();
    }

    let minuteur = 0;
    window.addEventListener('resize', () => {
      clearTimeout(minuteur);
      minuteur = window.setTimeout(() => {
        semer();
        if (reduit) dessiner(performance.now());
      }, 150);
    });
    new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      relancer();
    }).observe(canvas);
    document.addEventListener('visibilitychange', relancer);
  }

export {};

/** La goutte, en « r,g,b », lue sur la page (`--goutte`, voir global.css). */
function rvbGoutte(): string {
  const brut = getComputedStyle(document.documentElement).getPropertyValue('--goutte').trim();
  const m = brut.match(/rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/);
  if (m) return `${Math.round(+m[1])},${Math.round(+m[2])},${Math.round(+m[3])}`;
  const h = brut.match(/^#([\da-f]{6})$/i);
  if (h) {
    const n = parseInt(h[1], 16);
    return `${n >> 16},${(n >> 8) & 255},${n & 255}`;
  }
  return '255,45,85';
}
