import jwt from 'jsonwebtoken';


const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ error: 'Akses ditolak. Token tidak disediakan.' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET); // Gantikan 'SECRET_KEY' dengan kunci rahsia anda
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token tidak sah.' });
  }
};

export default verifyToken;