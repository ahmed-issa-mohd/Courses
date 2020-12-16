
document.getElementById('getPost').addEventListener('click', getPost);
document.getElementById('addPost').addEventListener('click', addPost);


function addPost(e) {
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let posts = [
        { title: 'post 1', body: 'this is  post number 1' },
        { title: 'post 2', body: 'this is  post number 2' },
        { title: 'post 3', body: 'this is  post number 13' }
    ];


    posts.push({ title: title, body: body });
    getPost(posts);
}

function getPost(posts) {
    let output = '';
    posts.forEach(post => {
        output += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
    });
    document.getElementById('output').innerHTML = output;
}