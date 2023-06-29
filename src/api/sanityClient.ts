import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'f9plw9di',
  dataset: 'production',
  useCdn: true,
});
