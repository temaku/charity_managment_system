const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');



router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.use(authMiddleware.protect);
router.patch('/updateMyPassword', authController.updatePassword);




module.exports=router;