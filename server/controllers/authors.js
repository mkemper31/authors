const mongoose = require('mongoose');
const Author = mongoose.model('Author')
module.exports = {
    all: async (req, res) => {
        try {
            const authors = await Author.find();
            res.json({authors: authors});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: async (req, res) => {
        try {
            const author = await Author.findById({ _id : req.params.id });
            res.json({author: author });
        }
        catch (err) {
            res.json(err);
        }
        Author.findById({ _id : req.params.id })
            .then((data) => {
                res.json({author: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const author = new Author(req.body);
        author.save()
            .then((data) => {
                res.json({newAuthor: data});
            })
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        const options = { runValidators : true };
        Author.updateOne({ _id : req.params.id }, req.body, options)
            .then((data) => {
                res.json({updatedAuthor: data});
            })
            .catch(err => {
                console.log("error:",err);
                res.json(err);
            });
    },
    delete: (req, res) => {
        Author.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
