import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validator } from '../middleware/validatorMiddleware.js';
import { loginSchema } from '../validators/loginValidator.js';
import { registerSchema } from '../validators/registerValidator.js';

router.post('/register', validator(registerSchema), registerUser)
router.post('/login', validator(loginSchema), authUser)
router.post('/logout', logoutUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, updateUserProfile)

export default router;