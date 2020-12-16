var myFormData = new FormData();

function onUploadBtnClick(e) {
    // ----- Cats
    var api_url = "https://api.thecatapi.com/v1/images/upload"
    var api_key = "DEMO-API-KEY"

    // ---- Dogs
    //var api_url = "https://api.thecatapi.com/v1/images/upload"
    //var api_key = "DEMO-API-KEY"

    e.preventDefault();
    // get the inputted
    var file_input = document.getElementById("file")
    var sub_id_input = document.getElementById("sub_id")
    // add them to the FormData object
    myFormData.append('file', file_input.files[0]);
    myFormData.append('sub_id', sub_id_input.value);

    var xmlhttp = new XMLHttpRequest;

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.status == 201) {
            updateResponseOutput(xmlhttp.responseText);
        } else if (xmlhttp.status == 400) {
            updateResponseOutput("Error: " + xmlhttp.responseText);
        } else {
            updateResponseOutput(xmlhttp.responseText);
        }

    };
    xmlhttp.onload = function () {
        updateStatusOutput("Uploaded");
    };

    xmlhttp.open('POST', api_url, true);

    // add your API key to the request header - this is needed to authorise an upload
    xmlhttp.setRequestHeader('x-api-key', api_key);
    xmlhttp.send(myFormData);
    updateStatusOutput("Uploading...");
}

function updateStatusOutput(msg) {
    document.getElementById("status").innerHTML = msg;
}

function updateResponseOutput(msg) {
    document.getElementById("response").innerHTML = msg;
    let data = JSON.parse(msg);;
    console.log(data.id);
    document.getElementById('img').src = data.url;

}

var form = document.getElementById("upload_form");
form.addEventListener("submit", onUploadBtnClick, true);