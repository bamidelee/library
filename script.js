
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.read');
const submit = document.querySelector('.submit');
const table = document.querySelector('table');


class library{
    constructor(title, author, pages)
    {
        this.title = title;
        this.author = author;
        this.pages = pages;
    };
   
    
}
submit.addEventListener('click', addBook);

function addBook()
{
    const newBook = document.createElement('tr');
    const remove = document.createElement('button');
    remove.textContent = 'remove';
    remove.addEventListener('click', (e) =>
{
    remove.parentElement.remove();
})

    const newTitle = document.createElement('td');
    const newAuthor = document.createElement('td');
    const newPages = document.createElement('td');
    const newRead = document.createElement('td');
    const newLibrary = new library(title.value, author.value, pages.value)
    newTitle.textContent = newLibrary.title;
    newAuthor.textContent = newLibrary.author;
    newPages.textContent = newLibrary.pages;
    if (read.checked)
    {
        newRead.textContent = 'read';
    }
    else{
        newRead.textContent = 'unread';
    }
    
    newBook.appendChild(newTitle);
    newBook.appendChild(newAuthor);
    newBook.appendChild(newPages);
    newBook.appendChild(newRead);
    newBook.appendChild(remove);
    table.appendChild(newBook);

}
