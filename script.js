const custom_show_button = document.querySelector(".btn-show-custom");
const custom_close_button = document.querySelector(".btn-close-custom");
const custom_form = document.querySelector(".custom-form");

const option_show_button = document.querySelector(".btn-show-option");
const option_close_button = document.querySelector(".btn-close-option");
const option_form = document.querySelector(".option-form");

const dialog_custom = document.querySelector(".dialog-custom");
const dialog_option = document.querySelector(".dialog-option");

const custom_burgers = [];
const option_burgers = [];

class Burger {
    constructor(name, ingredient, patty, sauce) {
        this.name = name;
        this.ingredient = ingredient;
        this.patty = patty;
        this.sauce = sauce;
    }
}

function add_burger(name, ingredient, patty, sauce, type) {
    const newBurger = new Burger(name, ingredient, patty, sauce);

    if (type) {
        custom_burgers.push(newBurger);
    } else {
        option_burgers.push(newBurger);
    }

    return type ? custom_burgers : option_burgers;
}

function append_burger(name, ingredient, patty, sauce, type) {
    const list_burger = document.querySelector(`.${type ? "custom" : "option"}_burgers ul`);
    const li = document.createElement("li");

    li.innerHTML = `
            <div class="card">
                <p>${name}</p>
                <p class="ingredient">ingredient: ${ingredient}</p>
                <p class="patty">patty: ${patty}</p>
                <p class="sauce">sauce: ${sauce}</p>
            </div>
        `;

    list_burger.appendChild(li);
}

//opening the custom modal
custom_show_button.addEventListener("click", () => dialog_custom.showModal());

//closing the custom modal
custom_close_button.addEventListener("click", () => dialog_custom.close());

//opening the options modal
option_show_button.addEventListener("click", () => dialog_option.showModal());

//closing the options modal
option_close_button.addEventListener("click", () => dialog_option.close());

//taking custom order
custom_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name_value = document.querySelector("#name").value;
    const ingredient_value = document.querySelector("#ingredient").value;
    const patty_value = document.querySelector("#patty").value;
    const sauce_value = document.querySelector("#sauce").value;

    add_burger(name_value, ingredient_value, patty_value, sauce_value, true);
    append_burger(name_value, ingredient_value, patty_value, sauce_value, true);

    console.log("custom burger: ", custom_burgers);

    dialog_custom.close();
});

//taking option order
option_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name_value = document.querySelector("#name-option").value;
    const ingredient_value = document.querySelector("#ingredient-option").value;
    const patty_value = document.querySelector("#patty-option").value;
    const sauce_value = document.querySelector("#sauce-option").value;

    add_burger(name_value, ingredient_value, patty_value, sauce_value, false);
    append_burger(name_value, ingredient_value, patty_value, sauce_value, false);

    console.log("option burger: ", option_burgers);

    dialog_option.close();
});