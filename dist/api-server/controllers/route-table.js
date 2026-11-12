import express from 'express';
import { bookController } from './book-controller.js';
import { logEvent } from '../modules/system/log-event.js';
const logRestRequest = (request, response, next) => {
    logEvent.info('api-server', 'request', request.ip, request.hostname, request.method, request.path);
    next();
};
const routeTable = {
    createRoutes() {
        const routes = express();
        routes.use(logRestRequest);
        routes.use(express.json());
        routes.get('/books', bookController.list);
        routes.query('/books', bookController.search);
        routes.post('/books', bookController.save);
        routes.get('/books/:id', bookController.read);
        routes.delete('/books/:id', bookController.delete);
        return routes;
    },
};
export { routeTable };
