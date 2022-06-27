let myLibrary = []

function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

Book.prototype.info = function(){
    if (!this.isRead){
        return('not read')
    }
    else return('read good job')
}

let book1 = new Book('ohm', 'me', 500, true)
myLibrary.push(book1)
console.log(book1.info())

console.log(myLibrary[0]);