import express, { Request, Response } from 'express';

import { canAccessAuthRoutes } from '../config/passport';

const router = express.Router();

router.get('/signin', canAccessAuthRoutes, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/signup', canAccessAuthRoutes, (req: Request, res: Response) => {
    res.sendFile('index.html', { root: 'dist' });
});

router.get('/', (req: Request, res: Response) => {
    res.redirect('/auth/signin');
});

export default router;
