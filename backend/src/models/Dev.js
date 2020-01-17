const mongoose = require('mongoose');

const DevScheema = new mongoose.Scheema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
})

module.exports = mongoose.model('Dev', DevScheema);