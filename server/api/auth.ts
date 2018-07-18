import { Router, Request, Response, NextFunction } from 'express';

import { passport } from '../config';
import { User, UserModel, createUser } from '../models';

const router = Router();

const authFormFieldValidator = (req: Request, res: Response, next: NextFunction) => {
    const username = req.body.username;
    const fullname = req.body.fullname;
    const password = req.body.password;

    username !== undefined && req.checkBody('username', 'Username is required').notEmpty();
    fullname !== undefined && req.checkBody('fullname', 'Username is required').notEmpty();
    password !== undefined && req.checkBody('password', 'Password is required').notEmpty();

    const errors = req.validationErrors();

    if (!errors) {
        return next();
    }

    res.json({ status: 400, error: errors });
};

router.post('/signin', authFormFieldValidator, (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: Error, user: UserModel) => {
        if (!!err) {
            return next(err);
        }

        if (!user) {
            return res.json({ status: 401, error: 'Invalid username or password' });
        }

        req.logIn(user, (error: Error) => {
            if (!!error) {
                return next(error);
            }
            return res.redirect('/my/dashboard');
        });
    })(req, res, next);
});

router.get('/signout', (req: Request, res: Response) => {
    req.logOut();
    !!req.session &&
        req.session.destroy((err: Error) => {
            res.redirect('/auth/signin');
        });
});

router.post('/signup', authFormFieldValidator, (req: Request, res: Response) => {
    const username = req.body.username;
    const fullname = req.body.fullname;
    const password = req.body.password;

    const newUser = new User({
        username,
        password,
        fullname
    });

    createUser(newUser as UserModel, (err: Error, user: UserModel) => {
        if (!!err) {
            return res.json({ status: 500, error: err });
        }

        return res.redirect('/auth/signin');
    });
});

export default router;
