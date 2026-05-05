import { Command } from 'commander';
import { initCommand } from './commands/init';
import { addCommand } from './commands/add';

const program = new Command();

program
  .name('nk-ui')
  .description('NickTheLegend UI — Premium dark fintech React Native components')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize nk-ui in your Expo project')
  .action(initCommand);

program
  .command('add <component>')
  .description('Add a component to your project')
  .option('-p, --path <path>', 'Custom component output path', 'components/ui')
  .action(addCommand);

program.parse();
