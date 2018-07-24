import { Router, Request, Response } from 'express';

import { UserModel, getUserById, findUserByIdAndUpdateDeposit, findUserByIdAndUpdateShares } from '../models';

const router = Router();

router.get('/details', (req: Request, res: Response) => {
    const userId = req.session && req.session.passport.user;

    getUserById(userId)
        .then((user: UserModel) => res.status(200).send(user))
        .catch(_ => res.status(404).json({ error: 'User not found' }));
});

router.post('/deposit', (req: Request, res: Response) => {
    const userId = req.session && req.session.passport.user;
    const depositAmount = parseInt(req.body.deposit, 10);

    if (depositAmount < 0) {
        res.status(400).json({ error: 'You are not allowed to deposit less than 0 dollars' });
        return;
    }

    findUserByIdAndUpdateDeposit(userId, depositAmount)
        .then((user: UserModel) => res.status(200).send(user))
        .catch((err: Error) => res.status(400).json({ error: err.message }));
});

router.post('/withdraw', (req: Request, res: Response) => {
    const userId = req.session && req.session.passport.user;
    const withdrawAmount = parseInt(req.body.withdraw, 10) * -1;

    if (withdrawAmount > 0) {
        res.status(400).json({ error: 'You are not allowed to withdraw less than 0 dollars' });
        return;
    }

    findUserByIdAndUpdateDeposit(userId, withdrawAmount)
        .then((user: UserModel) => res.status(200).send(user))
        .catch((err: Error) => res.status(400).json({ error: err.message }));
});

router.post('/buy/:stockSymbol', (req: Request, res: Response) => {
    const userId = req.session && req.session.passport.user;
    const code = req.params.stockSymbol;
    const quantity = parseInt(req.body.quantity, 10);
    const company = req.body.company;
    const price = parseFloat(req.body.price);

    if (quantity <= 0) {
        res.status(400).json({ error: 'Quantity of stock has to be positive' });
        return;
    }

    findUserByIdAndUpdateShares(userId, 'buy', { code, company, quantity, price })
        .then((user: UserModel) => res.status(200).send(user))
        .catch((err: Error) => res.status(400).json({ error: err.message }));
});

router.post('/sell/:stockSymbol', (req: Request, res: Response) => {
    const userId = req.session && req.session.passport.user;
    const code = req.params.stockSymbol;
    const quantity = parseInt(req.body.quantity, 10);
    const company = req.body.company;
    const price = parseFloat(req.body.price);

    if (quantity <= 0) {
        res.status(400).json({ error: 'Quantity of stock has to be positive' });
        return;
    }

    findUserByIdAndUpdateShares(userId, 'sell', { code, company, quantity, price })
        .then((user: UserModel) => res.status(200).send(user))
        .catch((err: Error) => res.status(400).json({ error: err.message }));
});

export default router;
