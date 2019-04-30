const Post = require('../models/post'),
 express = require('express'),
 router = express.Router(),
 {postsIndex,
 postsNew,
 postsCreate,
 postsEdit,
 postsUpdate,
 postsShow,
 postsDelete} = require('../controllers/posts');

        //routes for:  /posts

router.get('/', postsIndex);

router.get('/new', postsNew);

router.post('/', postsCreate);

router.get('/:id/edit', postsEdit);

router.put('/:id', postsUpdate);

router.get('/:id', postsShow);

router.delete('/:id', postsDelete);

module.exports = router;