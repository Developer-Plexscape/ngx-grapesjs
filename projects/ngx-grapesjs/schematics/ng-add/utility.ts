import { JsonValue } from '@angular-devkit/core';
import { ProjectDefinition } from '@angular-devkit/core/src/workspace';
import { SchematicsException, Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateWorkspace } from '@schematics/angular/utility/workspace';

export function getProjectTargetOptions(
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
  targetName: 'test' | 'build',
  assetPaths: string[],
  targetAsset: 'styles' | 'scripts'
) {
  return updateWorkspace(workspace => {

    const project = workspace.projects.get(projectName);

    if (!projectName && typeof workspace.extensions['defaultProject'] === 'string') {
      projectName = workspace.extensions['defaultProject'];
    }

    if (!project) {
      return;
    }

    const targetOptions = getProjectTargetOptions(project, targetName);
    const formattedExistingAssets = targetOptions[targetAsset] as (string | {input: string})[];

    if (!formattedExistingAssets) {
      targetOptions[targetAsset] = assetPaths;
    } else {
      const existingStyles = formattedExistingAssets.map(s => (typeof s === 'string' ? s : s.input));

      assetPaths.forEach(assetPath => {
        if (!existingStyles.includes(assetPath)) {
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
