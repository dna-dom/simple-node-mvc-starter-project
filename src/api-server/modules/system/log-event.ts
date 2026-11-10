// simple-node-mvc-starter-project ~~ MIT License
// Log Event

// Imports
import chalk from 'chalk';

// Types
export type LogLevel = 'info' | 'warn' | 'error' | 'debug';
export type Loggable = string | boolean | number | null | undefined;

const timestamp = (): string => chalk.blue(new Date().toISOString());  //ex: "2026-11-10T12:12:53.080Z"
const logger = (level: string) => (...args: Loggable[]) => console.info(timestamp(), level, ...args);

const logEvent = {
   info:  logger(chalk.white('info')),
   warn:  logger(chalk.yellow('warn')),
   error: logger(chalk.red('error')),
   debug: logger(chalk.magenta('debug')),
   };

export { logEvent };
