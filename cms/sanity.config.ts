import { visionTool } from '@sanity/vision';
import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media, mediaAssetSource } from 'sanity-plugin-media';
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
    media(),
  ],
  schema: {
    types: schemaTypes,
  },
  form: {
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter((assetSource) => assetSource === mediaAssetSource);
      },
    },
  },
});
