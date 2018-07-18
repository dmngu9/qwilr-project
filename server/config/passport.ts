import { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import passportLocal from 'passport-local';

import { User, UserModel, validatePassword } from '../models';

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser((user: UserModel, done) => {
    done(undefined, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .exec()
        .then((user: UserModel) => {
            done(undefined, user);
        })
        .catch(error => done(error, undefined));
});

passport.use(
    new LocalStrategy((username, password, done) => {
        User.findOne({ username })
            .exec()
            .then((user: UserModel) => {
                if (!user) {
                    return done(undefined, false, { message: `Username ${username} not found.` });
                }

                validatePassword(password, user.password, (error: Error, isMatch: boolean) => {
                    if (!!error) {
                        return done(error);
                    }

                    if (isMatch) {
                        return done(undefined, user);
                    }
                    return done(undefined, false, { message: 'Invalid password.' });
                });
            })
            .catch((err: Error) => done(err));
    })
);

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (req.isAuthenticated()) {
        return next();
    }

    res.redirect('/auth/signin');
};

export default passport;
