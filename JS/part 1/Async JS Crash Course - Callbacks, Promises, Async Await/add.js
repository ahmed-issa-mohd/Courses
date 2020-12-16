const posts = [
    { title: 'Post One', body: 'This is post one ' },
    { title: 'Post Two', body: 'This is post two ' },

];




fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        data.forEach(data => {
            posts.push(data);
        })

    }).then(getPosts);



// document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPosts').addEventListener('submit', addPosts);


function getPosts() {
    let output = '';
    posts.forEach(post => {
        output += `
        <div>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `;
    });
    document.getElementById('output').innerHTML = output;
}

function addPosts(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;



    posts.push({ title: title, body: body });
    getPosts();

}


getPosts();


