const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');



router.post('/signup',adminController.signup);
router.post('/login',adminController.login);
router.post('/forgotPassword', adminController.forgotPassword);
router.patch('/updateProfile/id',
adminController.uploadAdminPhoto,
adminController.resizeAdminPhoto, 
adminController.updateAdminProfile);
//router.patch('/resetPassword/:token', adminController.resetPassword);

//router.patch('/updateMyPassword', adminController.updatePassword);
// router.patch('/updateAdminProfile/:id',
// adminController.uploadAdminPhoto,
// adminController.resizeAdminPhoto, 
// adminController.updateAdminProfile);




module.exports=router;