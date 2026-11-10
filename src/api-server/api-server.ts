// simple-node-mvc-starter-project ~~ MIT License
// Startup REST Server and Database

// Modules
import { database }  from './modules/db/database.js';
import { logEvent }  from './modules/system/log-event.js';
import { serverApp } from './modules/server-app.js';

const api = {

   start(): Promise<void> {
      logEvent.info('system', 'initialize');
      return database.connect()
         .then(() => serverApp.start())
         .then(() => logEvent.info('system', 'ready'));
      },

   shutdown(): Promise<void> {
      return serverApp.shutdown()
         .then(() => database.close())
         .then(() => logEvent.info('system', 'shutdown'));
      },

   };

export { api };
