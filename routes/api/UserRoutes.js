const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/UserController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:Id
router.route('/:_id').get(getSingleUser).delete(deleteUser);

// /api/user/:_id/friends/:friendId
router.route('/:_id/friends/:friendId').post(addFriend);

// /api/user/:_id/friends/:friendId
router.route('/:_id/friends/:friendId').delete(deleteFriend);

module.exports = router;
