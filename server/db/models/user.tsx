import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    deposit: {
        type: Number,
        default: 0
    },
    shares: [
        {
            symbol: String,
            company: String,
            quantity: Number
        }
    ]
});

const User = mongoose.model('user', userSchema);

export default User;
