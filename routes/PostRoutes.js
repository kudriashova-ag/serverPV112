const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getById);
router.post('/posts', PostController.add);
router.put('/posts/:id', PostController.update);
router.delete('/posts/:id', PostController.remove);

module.exports = router;