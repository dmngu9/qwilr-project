import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/signin', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/signup', (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/', (req: Request, res: Response) => {
    res.redirect('/auth/signin');
});

export default router;
