const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const register = async (request, response) => {
    const { name, email, password } = request.body;
    const user = await User.findOne({ email: email });
    if (user) {
        return response.status(400).json({
            result: 'error',
            message: 'User already exists'
        });
    }

    try {
        const user = new User({ name, email, password });
        await user.save();
        response.send(user);
    }
    catch (err) {
        response.status(400).json(err);
    }
}

const login = async (request, response) => {
    const { email, password } = request.body;
    const user = await User.findOne({ email: email });
    if (!user) {
        return response.status(400).json({
            result: 'error',
            message: 'User not found'
        });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
        return response.status(400).json({
            result: 'error',
            message: 'Password incorrect'
        });
    }

    const token = jwt.sign({
        userId: user._id
    },
        'RANDOM',
        {
            expiresIn: "24h"
        }
    );


    response.json({
        message: 'Login successfull',
        token,
        user
    });
}

module.exports = { register, login }