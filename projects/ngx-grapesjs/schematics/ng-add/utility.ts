import { JsonValue } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { SchematicsException, Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateWorkspace } from '@schematics/angular/utility';

function getProjectTargetOptions(
  project: ProjectDefinition,
  buildTarget: string
): Record<string, JsonValue | undefined> {
  const options = project.targets?.get(buildTarget)?.options;

  if (!options) {
    throw new SchematicsException(
      `Cannot determine project target configuration for: ${buildTarget}.`
    );
  }

  return options;
}

export function addGrapesJsCssToTarget(
  projectName: string,
  assetPaths: string[],
  targetAsset: 'styles' | 'scripts'
) {
  return updateWorkspace(workspace => {
    const project = workspace.projects.get(projectName);

    if (!project) {
      throw new SchematicsException(
        'The specified Angular project is not defined in this workspace.'
      );
    }

    const targetOptions = getProjectTargetOptions(project, 'build');
    // This gets the current 'style' or 'scripts' options in loopable array
    const formattedExistingAssets = targetOptions[targetAsset] as (string | {input: string})[];

    // In case of 'styles' or 'scripts' option has not been set yet in our project we need to set it
    if (!formattedExistingAssets) {
      targetOptions[targetAsset] = assetPaths;
    } else {
      const existingAssets = formattedExistingAssets.map(s => (typeof s === 'string' ? s : s.input));
      // Check if asset already exists and add it if it does not
      assetPaths.forEach(assetPath => {
        if (!existingAssets.includes(assetPath)) {
          formattedExistingAssets.push(assetPath);
        }
      });
    }
  });
}

export function addDependencies(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
