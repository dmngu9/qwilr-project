import express, { Request, Response } from 'express';

import { isAuthenticated } from '../config';

const router = express.Router();

router.get('/dashboard', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/trade', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/buy/:sharecode', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/sell/:sharecode', isAuthenticated, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/', isAuthenticated, (req: Request, res: Response) => {
    res.redirect('/dashboard');
});

export default router;
