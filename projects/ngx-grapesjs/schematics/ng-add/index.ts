import { chain } from '@angular-devkit/schematics';

import { Schema } from './schema';
import { addDependencies, addGrapesJsCssToTarget } from './utility';

export const ngAdd =
  (options: Schema) => async () => {

    const grapesCssAssetPaths = ['node_modules/grapesjs/dist/css/grapes.min.css'];
    const grapesJsAssetPaths = ['node_modules/grapesjs/dist/grapes.min.js'];

    if (options.editorType === 'webpageEditor') {

      grapesCssAssetPaths.push(
        'node_modules/grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.css'
      );
      grapesJsAssetPaths.push(
        'node_modules/grapesjs-preset-newsletter/dist/grapesjs-preset-newsletter.min.js'
      );
    } else {
      grapesCssAssetPaths.push(
        'node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
      );
      grapesJsAssetPaths.push(
        'node_modules/grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
      );
    }
    return chain([
      addGrapesJsCssToTarget(options.project, 'build', grapesCssAssetPaths, 'styles'),
      addGrapesJsCssToTarget(options.project, 'build', grapesJsAssetPaths, 'scripts'),
      addDependencies()
    ]);
  };
