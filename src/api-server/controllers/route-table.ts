// simple-node-mvc-starter-project ~~ MIT License
// Routes

// Imports
import express, { RequestHandler } from 'express';

// Modules
import { bookController } from './book-controller.js';
import { logEvent }       from '../modules/system/log-event.js';

// Utilities
const logRestRequest: RequestHandler = (request, response, next) => {
   logEvent.info('api-server', 'request', request.ip, request.hostname, request.method, request.path);
   next();
   };

const routeTable = {
   createRoutes(): express.Express {
      const routes = express();
      routes.use(logRestRequest);
      routes.use(express.json());
      routes.get(   '/books',     bookController.list);
      routes.query!('/books',     bookController.search);  //TODO: https://expressjs.com/en/5x/api/router/#routermethod
      routes.post(  '/books',     bookController.save);
      routes.get(   '/books/:id', bookController.read);
      routes.delete('/books/:id', bookController.delete);
      return routes;
      },
   };

export { routeTable };
