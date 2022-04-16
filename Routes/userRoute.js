const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

const router = express.Router();


router.get('/me',authMiddleware.protect,userController.getMe,userController.getUser);
router.patch('/updateMe',
authMiddleware.protect,
userController.uploadUserPhoto,
userController.resizeUserPhoto,
userController.updateMe);
router.delete('/deleteMe',userController.deleteMe);


router.get('/',adminController.protect,adminController.restrictTo("admin"),userController.getAllUser);
router.route('/:id').
get(adminController.protect,adminController.restrictTo("admin"),userController.getUser).
patch(adminController.protect,adminController.restrictTo("admin"),userController.updateUser).
delete(adminController.protect,adminController.restrictTo("admin"),userController.deleteUser)

// router.use(authMiddleware.protect);


module.exports = router