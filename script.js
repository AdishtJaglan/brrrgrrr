const custom_show_button = document.querySelector(".btn-show-custom");
const custom_close_button = document.querySelector(".btn-close-custom");
const custom_form = document.querySelector(".custom-form");

const option_show_button = document.querySelector(".btn-show-option");
const option_close_button = document.querySelector(".btn-close-option");
const option_form = document.querySelector(".option-form");

const dialog_custom = document.querySelector(".dialog-custom");
const dialog_option = document.querySelector(".dialog-option");

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

//opening the custom modal
custom_show_button.addEventListener("click", () => {
    dialog_custom.showModal();
});

//closing the custom modal
custom_close_button.addEventListener("click", () => {
    dialog_custom.close();
});

//opening the options modal
option_show_button.addEventListener("click", () => {
    dialog_option.showModal();
});

//closing the options modal
option_close_button.addEventListener("click", () => {
    dialog_option.close();
});

//taking custom order
custom_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ingredient_value = ingredient.value;
    const patty_value = patty.value;
    const sauce_value = sauce.value;

    add_burger(ingredient_value, patty_value, sauce_value);

    console.log("burger: ", burgers);

    dialog_custom.close();
});

//taking option order
option_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ingredient_value = ingredient.value;
    const patty_value = patty.value;
    const sauce_value = sauce.value;

    add_burger(ingredient_value, patty_value, sauce_value);

    console.log("burger: ", burgers);

    dialog_custom.close();
});