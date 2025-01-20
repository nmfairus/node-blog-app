import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
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

// Get a user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update a user by id
router.put('/:id', async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedUser) {
        res.status(404).json({ message: 'Pengguna tidak ditemui' });
      } else {
        res.json(updatedUser);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
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
