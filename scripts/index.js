const title = document.getElementById("title");

const hideButton = document.querySelector("#hideButton");

hideButton.addEventListener('click', () => {

    if (title.style.display == 'none') {
        title.style.display = 'block'
    } else {
        title.style.display = 'none'
    }

});