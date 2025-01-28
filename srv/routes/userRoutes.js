import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import verifyToken from '../middlewares/authMiddleware.js';
dotenv.config();

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Periksa jika pengguna sudah wujud
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Pengguna dengan email ini sudah wujud' });
      }
  
      // Encrypt kata laluan
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Buat pengguna baru
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
  
      res.status(201).json({ message: 'Pengguna berjaya didaftarkan', user: { email: user.email } });
    } catch (error) {
      res.status(500).json({ error: 'Ralat semasa mendaftarkan pengguna' });
    }
  });
  

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findByCredentials(email, password);
        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).send({ user, token });
    } catch (error) {
        res.status(400).send({ error: 'Login failed!' });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.res.status(400).send(error);
    }
});

// Get all users and count
router.get('/count', async (req, res) => {
    try {
        const users = await User.find();
        const count = users.length;
        res.status(200).send({ count });
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get a user by id
router.get('/:id', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a user by id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
  
    try {
      // Cari pengguna berdasarkan ID
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'Pengguna tidak dijumpai' });
      }

      // Kemas kini nama jika diberikan
        if (name) {
            user.name = name;
        }
  
      // Kemas kini email jika diberikan
      if (email) {
        user.email = email;
      }
  
      // Kemas kini dan encrypt kata laluan jika diberikan
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
  
      // Simpan pengguna yang dikemas kini
      await user.save();
  
      res.status(200).json({ message: 'Pengguna berjaya dikemas kini', user: { email: user.email } });
    } catch (error) {
      res.status(500).json({ error: 'Ralat semasa mengemas kini pengguna' });
    }
  });

// Delete a user by id
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            res.status(404).json({ message: 'Pengguna tidak ditemui' });
        } else {
            res.json(user);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



export default router;
