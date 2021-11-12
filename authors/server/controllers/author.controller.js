const Author = require('../models/author.model')

module.exports = {
    getAllAuthors: (req, res) => {
        Author.find()
            .then(allDaAuthors => res.json({ message: "Here are the Authors...", authors: allDaAuthors }))
            .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        },
        
    getOneAuthor: (req, res) => {
            Author.findOne({ _id: req.params.id})
                .then(oneAuthor => res.json({ author: oneAuthor }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
            },
            
    createAnAuthor: (req, res) => {
            Author.create(req.body)
            .then(newAuthor => res.json({ author: newAuthor}))
            .catch(err =>  res.status(400).json(err))
        },
        
    updateOldAuthor: (req, res) => {
            Author.findByIdAndUpdate(
                {_id: req.params.id}, 
                req.body,
                {new: true, runValidators: true}
                )
                .then(updateAuthor=> res.json({ author: updateAuthor }))
                .catch(err =>  res.status(400).json(err))
        },
            
    deleteAuthor: (req, res) =>{
                Author.findByIdAndDelete(req.params.id)
                .then(result => res.json({ result: result }))
                .catch(err => res.json ({ message: "Something went Wrong", error: err}))
        }
            
}