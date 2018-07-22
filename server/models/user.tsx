import mongoose, { Promise } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

export interface Shares {
    symbol: string;
    company: string;
    quantity: number;
}

export interface UserModel extends mongoose.Document {
    username: string;
    password: string;
    fullname: string;
    deposit: number;
    shares: Shares[];
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: String,
    deposit: {
        type: Number,
        default: 0,
        min: [0, 'Deposit cannot be negative']
    },
    shares: [
        {
            code: String,
            company: String,
            quantity: Number
        }
    ]
});

const User = mongoose.model('user', userSchema);

export const getUserById = (id: string) => {
    return User.findById(id, '-password -_id -__v')
        .lean()
        .exec();
};

export const createUser = (newUser: UserModel, cb: (err: Error, user: UserModel) => void) => {
    bcrypt.genSalt(10, (err: Error, salt: string) => {
        if (err) {
            console.error('Failed to genSalt: ', err);
            return;
        }

        bcrypt.hash(
            newUser.password,
            salt,
            () => {
                return;
            },
            (error: Error, hash: string) => {
                if (error) {
                    console.error('Failed to create hashed password: ', error);
                    return;
                }
                newUser.password = hash;
                newUser.save(cb);
            }
        );
    });
};

export const findUserByIdAndUpdateDeposit = (id: string, offsetAmount: number) => {
    return getUserById(id).then((user: UserModel) => {
        const newDepositBalance = user.deposit + offsetAmount;

        if (newDepositBalance < 0) {
            return Promise.reject(new Error('You are not allowed to have negative deposit balance'));
        }

        return User.findByIdAndUpdate(id, { deposit: newDepositBalance }, { new: true, select: '-password -_id -__v' })
            .lean()
            .exec();
    });
};

export const validatePassword = (
    candidatePassword: string,
    password: string,
    cb: (error: Error, match: boolean) => void
) => {
    bcrypt.compare(candidatePassword, password, (err: Error, isMatch: boolean) => {
        cb(err, isMatch);
    });
};

export default User;
