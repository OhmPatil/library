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

function addBook(title, author, pages, isRead){
    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    console.log('Book Added');
}

addBook('Hobbit', 'me', 200, false)
addBook('asdasd', 'you', 500, true)
addBookToDom()

function addBookToDom(){
    myLibrary.forEach(myBook =>{
        let card = document.createElement('div')
        card.classList.add('card')

        let title = document.createElement('div')
        title.classList.add('title')
        title.textContent = myBook.title
        let author = document.createElement('div')
        author.classList.add('author')
        author.textContent = myBook.author
        let pages = document.createElement('div')
        pages.classList.add('pages')
        pages.textContent = myBook.pages
        let isRead = document.createElement('div')
        isRead.classList.add('isRead')
        isRead.textContent = myBook.isRead
        
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(isRead)

        
        document.querySelector('.container').appendChild(card)
        console.log('Card created');

    })
}