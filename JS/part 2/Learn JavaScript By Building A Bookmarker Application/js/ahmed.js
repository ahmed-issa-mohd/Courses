let books = [];
if (localStorage.getItem("books") === null) {

    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(data => {
            data.forEach(book => {
                books.push(book);
            });
            localStorage.setItem('books', JSON.stringify(books));
            fetchBookmarks();
        });

}


function fetchBookmarks() {
    let books = JSON.parse(localStorage.getItem("books"));
    let bookmarksResults = document.getElementById('bookmarksResults');
    bookmarksResults.innerHTML = "";
    books.forEach(book => {
        bookmarksResults.innerHTML += `
        <div>${book.name}</div>
        `;
    });
}

document.getElementById("myForm").addEventListener("submit", (e) => {
    var siteName = document.getElementById('siteName').value;
    var siteUrl = document.getElementById('siteUrl').value;
    var book = {
        name: siteName,
        url: siteUrl
    }
    let books = JSON.parse(localStorage.getItem("books"));
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    fetchBookmarks();
    e.preventDefault();
});





function editBooks() {
    let books = JSON.parse(localStorage.getItem("books"));
    books[10].name = "ahmed";
    localStorage.setItem('books', JSON.stringify(books));

}
editBooks();