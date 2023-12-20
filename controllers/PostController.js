const Post = require('../models/Post');

const getAll = async (request, response) => {
    const posts = await Post.find({});
    response.json(posts);
}

const getById = async (request, response) => {
    const id = request.params.id;
    try {
        const post = await Post.findById(id);
        response.json(post);
    }
    catch (err) {
        response.status(404).json({
            result: 'error',
            message: 'Post not found'
        });
    }
}

const add = async (request, response) => {
    try {
        const post = new Post(request.body);
        await post.save(); // save to DB
        response.send(`Post with id ${post._id} added!`)
    }
    catch (err) {
        response.status(400).json(err);
    }
}

const update = async (request, response) => {
    const id = request.params.id;
    try {
        const post = await Post.findByIdAndUpdate(id, request.body);
        response.send('Post updated');
     }
    catch (err) {
        response.status(400).json({
            result: 'error',
            message: 'Post not found'
        });
    }
}

const remove = async (request, response) => {
    const id = request.params.id;
    try {
        await Post.findByIdAndDelete(id);
        response.send('Post deleted');
    }
    catch (err) {
        response.status(400).json({
            result: 'error',
            message: 'Post not found'
        });
    }
}

module.exports = { getAll, getById, add, update, remove };