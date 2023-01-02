const jwt = require('jsonwebtoken');
require("dotenv").config()

const fetchuser = (req, res, next) => {
    const _envUnauthorizedResponse = parseInt(process.env.unauthorizedResponse);
    // Get user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(_envUnauthorizedResponse).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(_envUnauthorizedResponse).send({ error: "Please authenticate using a valid token" });
    }

}
module.exports = fetchuser;