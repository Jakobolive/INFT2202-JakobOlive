import express from 'express';
import mongoose from 'mongoose';

import AnimalCreateController from './controllers/animal/create.js';
import AnimalRetrieveController from './controllers/animal/retrieve.js';

const HTTP_PORT = 3000;
//const DB_NAME = 'mongodb://localhost:27017/inft2202';
// Had to remake DB.
const DB_NAME = "mongodb+srv://jakolive01:A5mQ80UX8aGg7RBf@cluster0.malsbqy.mongodb.net/TestDb?"
// const DB_NAME = 'mongodb://root:example@localhost:27017/?authMechanism=DEFAULT';
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const { method, url } = req;
    console.log(`[] ${method} ${url}`);
    next();
})

app.use(express.static(import.meta.dirname + '/../client'));
app.use('/node_modules', express.static(import.meta.dirname + '/../../node_modules'));

app.get('/api/animal', AnimalRetrieveController);
app.post('/api/animal', AnimalCreateController);

try {
    // connect to the database first
    await mongoose.connect(DB_NAME);
    console.log(`Connected to the database at ${DB_NAME}`); 
} catch (ex) {
    console.log(`Failed to connect to database at ${DB_NAME}, shutting down.`);
    process.exit(1); // peace out, 0 means a "good exit", anything else constitutes an error
} finally {
    // start listening for requests
    app.listen(HTTP_PORT, () => {
        console.log(`Server is listening on http://localhost:${HTTP_PORT}`);
    });
}
