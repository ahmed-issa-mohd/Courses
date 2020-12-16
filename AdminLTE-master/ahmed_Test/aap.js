// var btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     alert('a');
// });


$(document).ready(function () {
    $("button").click(function () {
        $("h1").toggleClass("blue");
        $("h2").toggleClass("red");
        $("p").toggleClass("green");
    });
});
