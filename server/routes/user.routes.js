import express from 'express';

import {
  getUsers,
  getUserId,
  postUser,
  updateUser,
  deleteUser,
} from '../controller/user.controller.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:userId', getUserId);
router.post('/users', postUser);
router.put('/users/:userId', updateUser);
router.delete('/users/:userId', deleteUser);

export default router;
