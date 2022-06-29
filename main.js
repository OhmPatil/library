// To show form when 'Add book' button is clicked
const add_book_button = document.querySelector('.add-book-button')
add_book_button.addEventListener('click', displayForm)
function displayForm(){
    document.getElementById('form').style.display = ''
}

// Logic for when form is submitted
const form = document.getElementById('form')
form.addEventListener('submit', function(e){
    getFormData()
    e.preventDefault()
})

// Create empty array of books
let myLibrary = []

// If books exist in localstorage, add them to myLibrary[]
if (localStorage.getItem('localLibrary')) {
    console.log('Exists in local storage');
    myLibrary = JSON.parse(localStorage.getItem('localLibrary'))   
    addBookToDom()
}
else console.log('Does not exist');

// Book object constructor and prototype
function Book(title, author, pages, isRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.isRead = isRead
}

// Function to add book to myLibrary[]
function addBook(title, author, pages, isRead){
    let newBook = new Book(title, author, pages, isRead)
    myLibrary.push(newBook)
    console.log('Book Added');
    localStorage.setItem('localLibrary', JSON.stringify(myLibrary))
    addBookToDom()
}

// Function to make card and display book on page
function addBookToDom(){

    // Removing all previously added cards
    let allCards = document.querySelectorAll('.card')
    allCards.forEach(Card => {
        Card.remove()
    })

    let card_id = 0
    myLibrary.forEach(myBook =>{
        let card = document.createElement('div')
        card.classList.add('card')

        let title = document.createElement('div')
        title.classList.add('book-title')
        title.textContent = `${myBook.title}`

        let author = document.createElement('div')
        author.classList.add('author')
        author.textContent = `By ${myBook.author}`

        let pages = document.createElement('div')
        pages.classList.add('pages')
        pages.textContent = `No. of pages: ${myBook.pages}`

        let isRead = document.createElement('div')
        isRead.classList.add('isRead')
        if (!myBook.isRead) isRead.textContent = 'Read Status: Not Read ❌'
        else isRead.textContent = 'Read Status: Read ✅'

        let removeButton = document.createElement('button')
        removeButton.classList.add('remove-button')
        removeButton.classList.add('btn')
        removeButton.classList.add('btn-danger')
        removeButton.textContent = 'Remove'

        let isReadButton = document.createElement('button')
        isReadButton.classList.add('isReadButton')
        if (!myBook.isRead){
            isReadButton.textContent = 'Mark as read'
            isReadButton.classList.add('btn')
            isReadButton.classList.add('btn-success')
        }
        else{
            isReadButton.textContent = 'Mark as unread'
            isReadButton.classList.add('btn')
            isReadButton.classList.add('btn-warning')
        }

        card.appendChild(title)
        card.appendChild(author)
        card.appendChild(pages)
        card.appendChild(isRead)
        card.appendChild(removeButton)
        card.appendChild(isReadButton)
        
        // Give same id to card, removeButton and isRead button
        card.dataset.cardID = card_id
        removeButton.dataset.cardID = card_id
        isReadButton.dataset.cardID = card_id

        removeButton.addEventListener('click', removeBook)
        isReadButton.addEventListener('click', changeReadStatus)
  
        document.querySelector('.book-container').appendChild(card)
        console.log('Card created');
        card_id++

        

        // Function to remove book from myLibrary[]
        function removeBook(){
            let bookToRemove = parseInt(removeButton.dataset.cardID)
            myLibrary.splice(bookToRemove, 1)
            console.log('Book Removed');
            localStorage.setItem('localLibrary', JSON.stringify(myLibrary))
            addBookToDom()
        }

        // Function to change read status of book
        function changeReadStatus(){
            myBook.isRead = !myBook.isRead
            localStorage.setItem('localLibrary', JSON.stringify(myLibrary))
            addBookToDom()
        }
    })
}

// Retrieve form data and add book to myLibrary[]
function getFormData(){
    let title = document.getElementById('form-title').value
    let author = document.getElementById('form-author').value
    let pages = document.getElementById('form-pages').value
    let isRead = document.getElementById('form-isRead').checked
    
    console.log(title, author, pages, isRead);
    addBook(title, author, pages, isRead)
    form.reset()
}
