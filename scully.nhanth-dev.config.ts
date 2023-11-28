import { ScullyConfig } from '@scullyio/scully';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'nhanth-dev',
  distFolder: 'site/nhanth-dev', // output directory of your Angular build 
  outDir: './site/static', // directory for scully build artifacts
  defaultPostRenderers: [],
  routes: {
    '/blog/:slug':{
      type: 'blog',
      slug: {
        folder: "./blog"
      }
    }
  },
};
