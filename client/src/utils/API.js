import axios from 'axios';

export default {
    // Getting searched book title
    getBooks : function (q) {
        return axios.get("/api/google", { params: { q : "title:" + q }});
    },
    // Saving Selected book to db
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData)
    },
    // Getting all saved books from 
    getSavedBooks: function (){
        return axios.get("/api/books");
    },
    // Deleting selected book from db
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}