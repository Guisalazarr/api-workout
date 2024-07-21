import { Database } from './main/database/database.connection';
import 'reflect-metadata';
import { Server } from './main/server/express.server';

Promise.all([Database.connect(), ]).then(() => {
    Server.listen();
});
