import express from 'express';
const router = express.Router();
import { authUser, getUserProfile, logoutUser, registerUser, requestPasswordReset, resetPassword, updateUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validator } from '../middleware/validatorMiddleware.js';
import { loginSchema } from '../validators/loginValidator.js';
import { registerSchema } from '../validators/registerValidator.js';
import { updateSchema } from '../validators/updateSchema.js';
import { resetRequestSchema } from '../validators/resetValidator.js';
import { passwordResetSchema } from '../validators/passwordResetValidator.js';

router.post('/register', validator(registerSchema), registerUser)
router.post('/login', validator(loginSchema), authUser)
router.post('/requestReset', validator(resetRequestSchema), requestPasswordReset)
router.post('/resetPassword', validator(passwordResetSchema), resetPassword)
router.post('/logout', logoutUser)
router.get('/profile', protect, getUserProfile)
router.put('/profile', protect, validator(updateSchema), updateUserProfile)

export default router;