import { chain } from '@angular-devkit/schematics';

import { Schema } from './schema';
import { addDependencies, addGrapesJsCssToTarget } from './utility';

export const ngAdd =
  (options: Schema) => async () => {

    const baseGrapesjsPath = 'node_modules/grapesjs/dist';
    const baseGrapesjsWebpagePath = 'node_modules/grapesjs-preset-webpage/dist';
    const baseGrapesjsNewsletterPath = 'node_modules/grapesjs-preset-newsletter/dist';

    const grapesCssAssetPaths = [`${baseGrapesjsPath}/grapes.min.css`];
    const grapesJsAssetPaths = [`${baseGrapesjsPath}/grapes.min.js`];

    if (options.editorType === 'webpageEditor') {

      grapesCssAssetPaths.push(
        `${baseGrapesjsWebpagePath}/grapesjs-preset-newsletter.css`
      );
      grapesJsAssetPaths.push(
        `${baseGrapesjsWebpagePath}/grapesjs-preset-newsletter.min.js`
      );
    } else {
      grapesCssAssetPaths.push(
        `${baseGrapesjsNewsletterPath}/grapesjs-preset-webpage.min.css`
      );
      grapesJsAssetPaths.push(
        `${baseGrapesjsNewsletterPath}/grapesjs-preset-webpage.min.js`
      );
    }
    return chain([
      addGrapesJsCssToTarget(options.project, grapesCssAssetPaths, 'styles'),
      addGrapesJsCssToTarget(options.project, grapesJsAssetPaths, 'scripts'),
      addDependencies()
    ]);
  };
