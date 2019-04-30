const Post = require('../models/post');

module.exports = {
    postsIndex(req,res,next){
        res.render('/posts/index');
    },
    async postsNew(req,res,next){
        res.render('/posts/new')
    },
    async postsCreate(req,res,next){
        const post = await Post.create(req.body.post);
        res.redirect(`/posts/${post._id}`);
    },
    async postsEdit(req,res,next){
        const post = await Post.findById(req.params.id);
        res.render('/posts/edit', {post})
    },
    async postsUpdate(req,res,next){
        const post = await Post.findOneAndUpdate({_id: req.params.id},req.body.post);
        res.redirect(`/posts/${post._id}`);
    },
    async postsShow(req,res,next){
        const post =  await Post.findById(req.params.id);
        res.render(`/posts/show`, {post});
    },
    async postsDelete(req,res,next){
        const post = await Post.findById(req.params.id);
        post.remove();
        res.redirect('/posts');
    }


};