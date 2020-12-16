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


function craetePost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error : Somsthing Went Wrong ');
            }
        }, 2000);
    });

}


// craetePost({ title: 'Post Three ', body: 'this is post one ' })
//     .then(getPosts)
//     .catch(err => console.log(err));


// Async / Await  / Fetch 

async function FetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();



}
FetchUser();


// Async / Await 
//  async function init() {
//     await craetePost({ title: 'Post Three ', body: 'this is post one ' });

//     getPosts();
// }
// init();

getPosts();