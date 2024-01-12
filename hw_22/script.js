let button = document.querySelector(`button`);
let colors = [ `green`, `red`, `yellow`];
let i = 0;
let stoplight = document.querySelector(`.stoplight`);
button.addEventListener(`click`, function () {
    let currentColor = colors[i % colors.length]; 
    let nextColor = colors[(i + 1) % colors.length];
    stoplight.classList.remove(currentColor);
    stoplight.classList.add(nextColor);
    i++;
});

let block = document.querySelector(`.text_block`);
let resizeElement = document.querySelector(`.resize_element`);
let resize = false;
resizeElement.addEventListener(`mousedown`, function () {
    resize = true;
    document.addEventListener(`mousemove`,newSize);
    document.addEventListener(`mouseup`, function () {
        resize = false;
        document.removeEventListener(`mousemove`,newSize);
    })
});

function newSize(event) {
    if (resize) {
        let newWidth = event.clientX - block.getBoundingClientRect().left;
        let newHeight = event.clientY - block.getBoundingClientRect().top;
        block.style.width = `${newWidth}px`;
        block.style.height = `${newHeight}px`;
    }
};
