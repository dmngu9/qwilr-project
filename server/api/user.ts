import { Router, Request, Response } from 'express';

import { User, UserModel } from '../models';

const router = Router();

router.get('/details', (req: Request, res: Response) => {
    const userId = req.session && req.session.passport.user;

    User.findById(userId, '-password -_id -__v')
        .lean()
        .exec()
        .then((user: UserModel) => res.status(200).send(user))
        .catch(_ => res.status(404).json({ error: 'User not found' }));
});

export default router;
