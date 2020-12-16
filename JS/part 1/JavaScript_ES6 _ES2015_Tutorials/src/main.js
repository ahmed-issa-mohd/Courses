function getData(method, url) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: this.statusText
            });
        }
        xhr.send();

    });
}

getData('GET', 'https://api.thecatapi.com/v1/images/search?limit=80&mime_types=&order=Random&size=small&page=0&sub_id=demo-34b439')
    .then(
        (data) => {
            let todos = JSON.parse(data);
            let output = " ";
            todos.forEach(element => {
                output += `
                <li>
                <img src= '${element.url}'/>
                </li>                
                `;
            });
            document.getElementById('template').innerHTML = output;

            todos.forEach(element => {
                console.log(element);
            });
        }
    )
    .catch();