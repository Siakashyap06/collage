// page 1 zipper

const zipper = document.querySelector(".zipper-pull");
const zipperArea = document.querySelector(".zipper-area");

if (zipper && zipperArea) {

    let draggingZipper = false;

    // start dragging zipper
    zipper.addEventListener("mousedown", function () {
        draggingZipper = true;
    });

    // stop dragging
    document.addEventListener("mouseup", function () {

        if (draggingZipper) {

            const area = zipperArea.getBoundingClientRect();
            const zipperPosition = zipper.offsetLeft;

            // open page 2
            if (zipperPosition > area.width * 0.8) {
                window.location.href = "material.html";
            }
        }

        draggingZipper = false;
    });

    // move zipper
    document.addEventListener("mousemove", function (event) {

        if (draggingZipper) {

            const area = zipperArea.getBoundingClientRect();

            let position = event.clientX - area.left;

            // keep zipper inside track
            if (position < 0) {
                position = 0;
            }

            if (position > area.width - zipper.offsetWidth) {
                position = area.width - zipper.offsetWidth;
            }

            zipper.style.left = position + "px";
        }

    });
}


// page 2 draggable objects

const bagItems = document.querySelectorAll(".bag-item");

let topLayer = 20;

bagItems.forEach(function (item) {

    let draggingItem = false;
    let offsetX = 0;
    let offsetY = 0;

    // pick up item
    item.addEventListener("mousedown", function (event) {

        draggingItem = true;

        offsetX = event.clientX - item.offsetLeft;
        offsetY = event.clientY - item.offsetTop;

        // bring item to front
        topLayer = topLayer + 1;
        item.style.zIndex = topLayer;

    });

    // drag item
    document.addEventListener("mousemove", function (event) {

        if (draggingItem) {

            let newX = event.clientX - offsetX;
            let newY = event.clientY - offsetY;

            item.style.left = newX + "px";
            item.style.top = newY + "px";

            item.style.right = "auto";
            item.style.bottom = "auto";
        }

    });

    // drop item
    document.addEventListener("mouseup", function () {
        draggingItem = false;
    });

});
// page 2 button

const whyButton = document.querySelector(".why-button");

if (whyButton) {
    whyButton.addEventListener("click", function (event) {
        event.stopPropagation();
        window.location.href = "memory.html";
    });
}


// page 3 card flip

const memoryCards = document.querySelectorAll(".memory-card");

memoryCards.forEach(function (card) {

    // click card
    card.addEventListener("click", function () {

        // flip front/back
        card.classList.toggle("flipped");

    });

});