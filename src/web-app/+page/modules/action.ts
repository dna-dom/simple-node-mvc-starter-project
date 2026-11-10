// simple-node-mvc-starter-project ~~ MIT License
// Web Application - Actions

// Imports
import { fetchJson } from 'fetch-json';

// Modules
import { appLookup } from './lookup.js';
import { appUi }     from './ui.js';

const appAction = {
   getBooks(): void {
      const url = `${appLookup.apiServer}/books`;
      appUi.logApiCall('GET', url);
      fetchJson.get(url).then(appUi.handleBooks);
      },
   getBook(button: HTMLElement) {
      const id =  button.dataset.book!;
      const url = `${appLookup.apiServer}/books/${id}`;
      appUi.logApiCall('GET', url);
      return fetchJson.get(url).then(appUi.handleBooks);
      },

   queryBooks(button: HTMLElement): void {
      const ids =   button.dataset.books!.split(',').map(id => Number(id));  //ex: [3001, 3003]
      const query = { ids };
      const url =   `${appLookup.apiServer}/books`;
      appUi.logApiCall('QUERY', url);
      fetchJson.query(url, query).then(appUi.handleBooks);
      },

   deleteBook(button: HTMLElement): void {
      const id =  button.dataset.book!;
      const url = `${appLookup.apiServer}/books/${id}`;
      appUi.logApiCall('DELETE', url);
      fetchJson.delete(url).then(appUi.handleBooks);
      },
   bogus(): void {
      const url = `${appLookup.apiServer}/bogus`;
      appUi.logApiCall('GET', url);
      fetchJson.get(url).then(appUi.handleBooks);
      },
   };

export { appAction };
