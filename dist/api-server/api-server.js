import { database } from './modules/db/database.js';
import { logEvent } from './modules/system/log-event.js';
import { serverApp } from './modules/server-app.js';
const api = {
    start() {
        logEvent.info('system', 'initialize');
        return database.connect()
            .then(() => serverApp.start())
            .then(() => logEvent.info('system', 'ready'));
    },
    shutdown() {
        return serverApp.shutdown()
            .then(() => database.close())
            .then(() => logEvent.info('system', 'shutdown'));
    },
};
export { api };
