// simple-node-mvc-starter-project ~~ MIT License
// Book Controller

// Imports
import express from 'express';

// Modules
import { database, Document } from '../modules/db/database.js';
import { restError }          from '../modules/system/rest-error.js';

// Types
export type Book = {
   id:     number,
   title:  string,
   author: string,
   };
export type BooksQuery = {
   ids: number[],
   };
export type BookResource = Book & { retrieved: string };

// Model
const model = {
   book(data: Document) {
      return <BookResource>{
         id:        data.id,
         title:     data.title,
         author:    data.author,
         retrieved: new Date().toDateString(),
         };
      },
   };

// Controller
const bookController = {

   save(request: express.Request, response: express.Response): void {
      const resource = restError.notImplemented();
      response.json(resource);
      },

   read(request: express.Request, response: express.Response): void {
      const id =       request.params.id!;
      const db =       database.getDb();
      const data =     db.collection('books').findOne({ id: Number(id) });
      const resource = data ? model.book(data) : restError.notFound();
      response.json(resource);
      },

   search(request: express.Request, response: express.Response): void {
      const ids =      (<BooksQuery>request.body).ids;
      const db =       database.getDb();
      const data =     db.collection('books').find({ id: { $in: ids } });
      const resource = data.map(model.book);
      response.json(resource);
      },

   list(request: express.Request, response: express.Response): void {
      const db =       database.getDb();
      const data =     db.collection('books').find();
      const resource = data.map(model.book);
      response.json(resource);
      },

   delete(request: express.Request, response: express.Response): void {
      const id =       request.params.id!;
      const db =       database.getDb();
      const data =     db.collection('books').findOne({ id: Number(id) });
      const resource = data ? restError.notImplemented() : restError.notFound();
      response.json(resource);
      },

   };

export { bookController };
