const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  deletefriend,
  addfriend,
} = require('../../controllers/UserController.js');

// /api/Users
router.route('/').get(getUsers).post(createUser);

// /api/Users/:UserId
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);
  ///api/Users/:UserId/friends/:friendId
  router
  .route('/:userId/friends/:friendId')
  .put(addfriend)
  .delete(deletefriend);

module.exports = router;
