import { chain } from '@angular-devkit/schematics';

import { Schema } from './schema';
import { addDependencies, addGrapesJsCssToTarget } from './utility';

export const ngAdd =
  (options: Schema) => async () => {
    const grapesJsAssetPaths = ['node_modules/grapesjs/dist/grapes.min.js'];

    if (options.editorType === 'webpageEditor') {
      grapesJsAssetPaths.push(
        'node_modules/grapesjs-preset-webpage/dist/index.js',
        'node_modules/grapesjs-blocks-basic/dist/index.js'
      );
    } else {
      grapesJsAssetPaths.push(
        'node_modules/grapesjs-preset-newsletter/dist/index.js'
      );
    }
    return chain([
      addGrapesJsCssToTarget(options.project, ['node_modules/grapesjs/dist/css/grapes.min.css'], 'styles'),
      addGrapesJsCssToTarget(options.project, grapesJsAssetPaths, 'scripts'),
      addDependencies()
    ]);
  };
