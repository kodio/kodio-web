import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';

export default createConfig({
  name: 'default',
  title: 'kodio-sanity-tmp',
  logo: () => <>Kodio.</>,

  projectId: '7veh4wq9',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
