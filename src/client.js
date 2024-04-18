import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '61wi5gqj',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-03-25',
});
