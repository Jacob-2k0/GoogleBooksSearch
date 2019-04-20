// Dependencies
const axios = require("axios");
const db = require("../models");

// Defining CRUB methods for google
module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", { params })
            .then( results => results.data.items.filter (
                // Going through to only pull wanted data
                result => 
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            ))
            // Filtering through data and only getting books which are not saved
            .then(apiBooks => 
                db.Book.find().then(dbBooks => 
                    apiBooks.filter(apiBook => 
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};