import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SignUpSchema = new Schema({
    email: {
        type: String,
        required: 'Enter email'
    },
    password: {
        type: String,
        required: 'Enter password'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

