import axios from "axios"


export default {
        getBook: function (title){
            return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyDrahnrWwfTZcCcOo8EBVfxgt_zJZpJHqI`);
         },
        saveBook: function(bookData){
                return axios.post("/api/books", bookData);
        },
        getSavedBooks(){
                return axios.get("/api/books");
        },
        deleteBook(id){
                return axios.delete("/api/books/" + id);
        }
}
