const show_button = document.querySelector(".btn-show");
const close_button = document.querySelector(".btn-close");
const dialog = document.querySelector("dialog");
const burgers = [];

function Burger(ingredient, patty, sauce) {
    this.ingredient = ingredient;
    this.patty = patty;
    this.sauce = sauce;
}

function add_burger(ingredient, patty, sauce) {
    const newBurger = new Burger(ingredient, patty, sauce);

    burgers.push(newBurger);

    return burgers;
}

//opening the modal
show_button.addEventListener("click", () => {
    dialog.showModal();
});

//closing the modal
close_button.addEventListener("click", () => {
    dialog.close();
});