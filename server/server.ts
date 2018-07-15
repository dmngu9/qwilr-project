import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hey' });
});

app.listen(8080, () => {
    console.log('hey started');
});