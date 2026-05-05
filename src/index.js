"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const init_1 = require("./commands/init");
const add_1 = require("./commands/add");
const program = new commander_1.Command();
program
    .name('nk-ui')
    .description('NickTheLegend UI — Premium dark fintech React Native components')
    .version('1.0.0');
program
    .command('init')
    .description('Initialize nk-ui in your Expo project')
    .action(init_1.initCommand);
program
    .command('add <component>')
    .description('Add a component to your project')
    .option('-p, --path <path>', 'Custom component output path', 'components/ui')
    .action(add_1.addCommand);
program.parse();
//# sourceMappingURL=index.js.map