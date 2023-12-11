const Post = require('../models/Post');

const getAll = async (request, response) => { 
    const posts = await Post.find({});
    response.json(posts);
}

const getById = (request, response) => {

}

const add = (request, response) => {

}

const update = (request, response) => {

}

const remove = (request, response) => {

}

module.exports = { getAll, getById, add, update, remove };