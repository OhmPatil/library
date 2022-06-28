let add_book_button = document.querySelector('.add-book-button')
add_book_button.addEventListener('click', displayForm)

let form = document.querySelector('#form')
form.addEventListener('submit', function(e){
    getFormData()
    e.preventDefault()
})

let myLibrary = []

function displayForm(){
    document.getElementById('form').style.display = ''
}

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
    addBookToDom()
}

addBook('Hobbit', 'me', 200, false)
addBook('asdasd', 'you', 500, true)

function addBookToDom(){
    let allCards = document.querySelectorAll('.card')
    allCards.forEach(Card => {
        Card.remove()
    })

    myLibrary.forEach(myBook =>{
        let card = document.createElement('div')
        card.classList.add('card')

        let title = document.createElement('div')
        title.classList.add('book-title')
        title.textContent = `Title: ${myBook.title}`
        let author = document.createElement('div')
        author.classList.add('author')
        author.textContent = `By ${myBook.author}`
        let pages = document.createElement('div')
        pages.classList.add('pages')
        pages.textContent = `No. of pages: ${myBook.pages}`
        let isRead = document.createElement('div')
        isRead.classList.add('isRead')
        isRead.textContent = myBook.isRead
        
        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(isRead)

        
        document.querySelector('.book-container').appendChild(card)
        console.log('Card created');
    })
}


function getFormData(){
    let title = document.getElementById('form-title').value
    let author = document.getElementById('form-author').value
    let pages = document.getElementById('form-pages').value
    let isRead = document.getElementById('form-isRead').checked
    
    console.log(title, author, pages, isRead);
    addBook(title, author, pages, isRead)
    form.reset()
}


console.log(myLibrary);