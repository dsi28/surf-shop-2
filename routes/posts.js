const Post = require('../models/post'),
 express = require('express'),
 router = express.Router(),
 {postsIndex,
 postsNew,
 postsCreate,
 postsEdit,
 postsUpdate,
 postsShow,
 postsDelete} = require('../controllers/posts'),
 {asyncErrorHandler} = require('../middleware');

        //routes for:  /posts

router.get('/', postsIndex);

router.get('/new', asyncErrorHandler(postsNew));

router.post('/', asyncErrorHandler(postsCreate));

router.get('/:id/edit', asyncErrorHandler(postsEdit));

router.put('/:id', asyncErrorHandler(postsUpdate));

router.get('/:id', asyncErrorHandler(postsShow));

router.delete('/:id', asyncErrorHandler(postsDelete));

module.exports = router;