import chalk from 'chalk';
import ora from 'ora';
import fs from 'fs-extra';
import path from 'path';

export const initCommand = async () => {
  console.log(chalk.bold.hex('#C47A2B')('\n🚀 NickTheLegend UI Initialization\n'));
  const spinner = ora('Initializing project structure...').start();

  try {
    const cwd = process.cwd();
    
    // Check if we're in an expo project
    if (!fs.existsSync(path.join(cwd, 'package.json'))) {
      spinner.fail('No package.json found. Please run this command in an Expo project root.');
      return;
    }

    // Ensure directories exist
    fs.ensureDirSync(path.join(cwd, 'components', 'ui'));
    fs.ensureDirSync(path.join(cwd, 'hooks'));
    fs.ensureDirSync(path.join(cwd, 'theme'));

    // Try to locate templates in the CLI package
    const cliRoot = path.join(__dirname, '..', '..');
    const templatesDir = path.join(cliRoot, 'templates', 'expo-app');

    if (fs.existsSync(templatesDir)) {
      // Copy hooks and theme from templates
      fs.copySync(path.join(templatesDir, 'hooks'), path.join(cwd, 'hooks'), { overwrite: false });
      fs.copySync(path.join(templatesDir, 'theme'), path.join(cwd, 'theme'), { overwrite: false });
      spinner.succeed('Hooks and theme files copied.');
    } else {
      spinner.warn('Templates directory not found in CLI package. Skipping copy.');
    }

    console.log(chalk.green('\n✅ Initialization complete!'));
    console.log(chalk.white('You can now add components:'));
    console.log(chalk.cyan('  npx nk-ui add button\n'));
  } catch (error) {
    spinner.fail('Initialization failed.');
    console.error(error);
  }
};
