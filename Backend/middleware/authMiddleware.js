import jwt from 'jsonwebtoken';
const secret = process.env.SECRET_KEY
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

export default  authMiddleware;
