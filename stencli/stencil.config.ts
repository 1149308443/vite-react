import { Config } from '@stencil/core';
import { less } from '@stencil/less';
// import { sass } from '@stencil/sass';


export const config: Config = {
  namespace: 'webcmps',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: 'new',
  },
  plugins: [less()],
};
