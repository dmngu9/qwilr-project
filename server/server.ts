import express, { Request, Response, Application } from 'express';
import mongoose, { MongooseDocument } from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import { User } from './db/models';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const port = process.env.PORT || 8080;

const app: Application = express();

if (!MONGODB_URI) {
    throw new Error('No Mongo Database is provided');
}

mongoose.connect(
    MONGODB_URI,
    { useMongoClient: true }
);

const db = mongoose.connection;
db.on('error', error => console.error(`Failed to connect to database: ${error}`));
db.once('open', () => console.log('Successfully connect to database'));

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});
