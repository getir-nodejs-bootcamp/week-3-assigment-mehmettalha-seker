const httpStatus = require("http-status");

const authenticateToken = (req, res, next) => {

    const token = req.headers?.authorization?.split(" ")[1] || null;
    if (token === null) {
        return res
            .status(httpStatus.UNAUTHORIZED)
            .send({ error: "Token invalid!" });
    }
        next();
};

module.exports = authenticateToken;