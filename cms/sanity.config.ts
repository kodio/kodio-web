import { createConfig } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import Logo from './components/Logo';
import { schemaTypes } from './schemas';
import { structure } from './structure';

export default createConfig({
  name: 'default',
  title: 'kodio-sanity-tmp',
  logo: Logo,

  projectId: '7veh4wq9',
  dataset: 'production',

  plugins: [
    deskTool({
      structure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
