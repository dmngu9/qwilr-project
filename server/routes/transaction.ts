import express, { Request, Response } from 'express';

import { isAuthenticated } from '../config';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.redirect('/my/dashboard');
});

router.get('/dashboard', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/buy/:stockSymbol', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/sell/:stockSymbol', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

export default router;
