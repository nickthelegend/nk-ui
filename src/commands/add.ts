import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';
import { REGISTRY } from '../utils/registry';

export const addCommand = async (component: string, options: { path: string }) => {
  const spinner = ora(`Adding ${component}...`).start();

  if (!REGISTRY[component]) {
    spinner.fail(`Component "${component}" not found in registry.`);
    return;
  }

  try {
    const cwd = process.cwd();
    const destDir = path.join(cwd, options.path);
    fs.ensureDirSync(destDir);

    const cliRoot = path.join(__dirname, '..', '..');
    const sourceFile = path.join(cliRoot, 'src', 'components', `${REGISTRY[component]}.tsx`);
    const destFile = path.join(destDir, `${component}.tsx`);

    if (!fs.existsSync(sourceFile)) {
      spinner.fail(`Source file for ${component} not found at ${sourceFile}`);
      return;
    }

    fs.copySync(sourceFile, destFile);
    spinner.succeed(chalk.green(`Successfully added ${component} to ${options.path}`));
  } catch (error) {
    spinner.fail(`Failed to add ${component}.`);
    console.error(error);
  }
};
