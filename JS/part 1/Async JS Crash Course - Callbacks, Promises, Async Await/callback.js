const posts = [
    { title: 'Post One', body: 'This is post one ' },
    { title: 'Post Two', body: 'This is post two ' },

];


function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output += `
            <li>${post.title}</li>
            `;
        });
        document.body.innerHTML = output;
    }, 1000);
}


function craetePost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
getPosts();
craetePost({ title: 'Post Three', body: 'this is post three' }, getPosts);



