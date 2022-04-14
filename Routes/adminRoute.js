const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');



router.post('/signup',adminController.signup);
router.post('/login',adminController.login);
router.post('/forgotPassword', adminController.forgotPassword);
router.patch('/resetPassword/:token', adminController.resetPassword);
router.use(authMiddleware.protect);
router.patch('/updateMyPassword', adminController.updatePassword);




module.exports=router;