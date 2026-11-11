// ============================================================================
// Everything about Droplet Labs that may change without touching the design:
// the founder's name, contact addresses, social links.
//
// Leave a value as `null` when it does not exist yet: the site then leaves it
// out instead of showing something invented.
// ============================================================================

export const site = {
  name: 'Droplet Labs',
  city: 'Yaoundé',
  country: 'Cameroon',
  // Yaoundé, rounded to the minute.
  coordinates: { lat: '3°52′ N', lon: '11°31′ E' },
};

export const founder: { name: string | null } = {
  // The founder's full name, exactly as it should appear on the site.
  // null → the pages say "the founder" and show no name.
  name: 'Effi Djimeli Miguel Batime',
};

export const contact: {
  general: string | null;
  collaboration: string | null;
  partnerships: string | null;
  projects: string | null;
} = {
  // The Droplet contact address already published on dropletmesh.app.
  general: 'contact@dropletmesh.app',
  // Dedicated addresses: null until they exist (the general one is used).
  collaboration: null,
  partnerships: null,
  projects: null,
};

export const social: { label: string; url: string }[] = [
  { label: 'GitHub', url: 'https://github.com/rito27959-arch' },
];
