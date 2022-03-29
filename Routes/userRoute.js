const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.get('/me',authMiddleware.protect,userController.getMe,userController.getUser);
router.patch('/updateMe',
authMiddleware.protect,
userController.uploadUserPhoto,
userController.resizeUserPhoto,
userController.updateMe);
router.delete('/deleteMe',userController.deleteMe);


router.get('/',userController.getAllUser);
router.route('/:id').
get(userController.getUser).
patch(userController.updateUser).
delete(userController.deleteUser)

// router.use(authMiddleware.protect);


module.exports = router