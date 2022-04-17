const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');



router.post('/signup',adminController.signup);
router.post('/login',adminController.login);
router.post('/forgotPassword', adminController.forgotPassword);
router.get('/',adminController.getAllAdmins);
router.patch('/updateProfile',
adminController.protect,
adminController.restrictTo("admin"),
adminController.uploadAdminPhoto,
adminController.resizeAdminPhoto, 
adminController.updateAdminProfile);





module.exports=router;