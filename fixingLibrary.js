const library = {

            books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

            addBook: function(book) {

                      if (!book.title || !book.author || !book.year) {

                          console.log("Book information is incomplete.");

                      } else {
                        this.books.push(book);
                      }

                    },

            findBookByTitle: function(title) {

                 return this.books.find(book => book.title === title)? "found":"not found"

                    },

            removeBook: function(title) {

              const index = this.books.findIndex(book => book.title === title);

                if (index !== -1) {
                    this.books.splice(index, 1);
                    return "deleted"
                } else {
               return "Book not found."
                } 
            } 
        };

library.addBook({ title:"mahabharat",author: "George Orwell", year: 1949 });
console.log(library.removeBook("mahabharat"))
console.log(library.books.length);


