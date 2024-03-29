import { visionTool } from '@sanity/vision';
import { defineConfig, definePlugin } from 'sanity';
import { structureTool } from 'sanity/structure';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import Logo from './components/Logo';
import { schemaTypes } from './schemas';
import { structure, defaultDocumentNode } from './structure';

export const projectId = 'bmm7n0e3';

const sharedConfig = definePlugin({
  name: 'sharedConfig',
  plugins: [
    structureTool({
      structure,
      defaultDocumentNode,
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

export default defineConfig([
  {
    name: 'prod',
    title: 'Prod',
    projectId,
    dataset: 'prod',
    basePath: '/prod',
    plugins: [sharedConfig()],
    icon: Logo,
  },
  {
    name: 'dev',
    title: 'Dev',
    projectId,
    dataset: 'dev',
    basePath: '/dev',
    plugins: [sharedConfig()],
    icon: Logo,
  },
]);
