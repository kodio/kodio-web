import { defineCliConfig } from 'sanity/cli';
import { projectId } from './sanity.config';

export default defineCliConfig({
  api: {
    projectId,
    dataset: 'prod',
  },
});
