const jwt = require('jsonwebtoken');

const auth = async (request, response, next) => {
    try {
        const token = request.headers.authorization.split(' ')[1];
        const verifyToken = await jwt.verify(token, 'RANDOM');
        request.user = verifyToken;
        next();
     }
    catch (err) {
        response.status(400).json({
            result: 'error',
            message: 'Invalid Token'
        });
    }
}

module.exports = auth;


