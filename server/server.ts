import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import mongo from 'connect-mongo';
import session from 'express-session';
import expressValidator from 'express-validator';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

import { authRoutes, transactionRoutes } from './routes';
import { authApi, userApi } from './api';
import { passport } from './config';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 8080;
const SESSION_SECRET = process.env.SESSION_SECRET;

const app: Application = express();
const SessionStore = mongo(session);

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

app.get('/', (req: Request, res: Response) => {
    res.redirect('/my/dashboard');
});

app.use(express.static('dist', { redirect: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
    session({
        cookie: {
            maxAge: 1000 * 60 * 60 * 60
        },
        store: new SessionStore({
            url: MONGODB_URI,
            autoReconnect: true
        }),
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET as string,
        unset: 'destroy'
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator());

app.use('/auth', authRoutes);
app.use('/my', transactionRoutes);
app.use('/api/auth', authApi);
app.use('/api/user', userApi);

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
