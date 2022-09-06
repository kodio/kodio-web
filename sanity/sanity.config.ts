import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default createConfig({
  name: 'default',
  title: 'kodio-sanity-tmp',

  projectId: '8h68qv9e',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
