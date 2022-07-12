const open = document.querySelector("#open");
const modalContainer = document.querySelector(".modal_container");
const close = document.querySelector("#close");

open.addEventListener("click", function () {
    modalContainer.classList.add("show");
});

close.addEventListener("click", function () {
    modalContainer.classList.remove("show");
});
