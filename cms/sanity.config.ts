import { visionTool } from '@sanity/vision';
import { createConfig, createPlugin } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import Logo from './components/Logo';
import { schemaTypes } from './schemas';
import { structure } from './structure';

const sharedConfig = createPlugin({
  name: 'sharedConfig',
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
})

export default createConfig([
  {
    name: 'prod',
    title: 'Prod',
    logo: Logo,
    projectId: '7veh4wq9',
    dataset: 'production',
    basePath: '/prod',
    plugins: [sharedConfig()]
  },
  {
    name: 'dev',
    title: 'Dev',
    logo: Logo,
    projectId: '7veh4wq9',
    dataset: 'dev',
    basePath: '/dev',
    plugins: [sharedConfig()]
  }
])
