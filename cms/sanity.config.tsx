import { visionTool } from '@sanity/vision';
import { defineConfig, definePlugin } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import Logo from './components/Logo';
import { schemaTypes } from './schemas';
import { structure } from './structure';

const sharedConfig = definePlugin({
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
});

export default defineConfig([
  {
    name: 'prod',
    title: 'Prod',
    projectId: 'bmm7n0e3',
    dataset: 'prod',
    basePath: '/prod',
    plugins: [sharedConfig()],
    studio: {
      components: {
        logo: () => (
          <div>
            <Logo /> <span>prod</span>
          </div>
        ),
      },
    },
  },
  {
    name: 'dev',
    title: 'Dev',
    projectId: 'bmm7n0e3',
    dataset: 'dev',
    basePath: '/dev',
    plugins: [sharedConfig()],
    studio: {
      components: {
        logo: () => (
          <div>
            <Logo /> <span>dev</span>
          </div>
        ),
      },
    },
  },
]);
