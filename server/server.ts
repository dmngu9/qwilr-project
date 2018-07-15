import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/*', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listen on port ${port}`);
});
