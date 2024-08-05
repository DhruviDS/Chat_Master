import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    iss: {
    type: String,
    required: true
    },
    nbf: {
    type: Number,
    required: true
    },
    aud: {
    type: String,
    },
    sub: {
    type: String,
    required: true
    },

    email: {
    type: String,
    required: true
    },
    email_verified: {
    type: Boolean,
    required: true
    },

    azp: {
    type: String,
    required: true
    },
    name: {
    type: String,
    required: true
    },
    picture: {
    type: String,
    required: true
    },
    given_name: {
    type: String,

    },

    family_name: {
    type: String,

    },
    iat: {
    type: Number,

    },
    exp: {
    type: Number,

    },

    jti: {
    type: String,

    }  
})

const user = mongoose.model('user', userSchema);

export default user;