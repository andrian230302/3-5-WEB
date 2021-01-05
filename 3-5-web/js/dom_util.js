export const REMOVE_BUTTON_PREFIX = 'remove-button-';
export const EDIT_BUTTON_PREFIX = 'edit-button-';


const productionYearInput = document.getElementById("production_year_input");
const producerNameInput = document.getElementById("producer_name_input");
const priceInUahInput = document.getElementById("price_in_uah_input");
const colorInput = document.getElementById("color_input");
const weightInKilogramsInput = document.getElementById("weight_in_kilograms_input");
const cableForPowerInput = document.getElementById("cable_for_power_input");
const numberOfButtonInput = document.getElementById("number_of_button_input");
const itemsContainer = document.getElementById("item_container");
const findMousesByProdName = document.getElementById("find_input")

const getItemId = (id) => `item-${id}`;


const itemTemplate = ({ id, productionYear, producerName, priceInUaH, color, weightInKilograms, cableForPower, numberOfButton }) => `
<li id="${getItemId(id)}">
    <div>
        <h5>Producition year: ${productionYear}</h5>
        <h5>Producer name: ${producerName}</h5>
        <h5>Price in UAH: ${priceInUaH}</h5>
        <h5>Color:${color}</h5>
        <h5>Weight in kilograms: ${weightInKilograms}</h5>
        <h5>Cable for power: ${cableForPower}</h5>
        <h5>Count of button: ${numberOfButton}</h5>
        <button id="${EDIT_BUTTON_PREFIX}${id}" type="button">Edit</button>
        <button id="${REMOVE_BUTTON_PREFIX}${id}" type="button">Remove</button>
    </div>
</li>`;

export const clearInputs = () => {
    productionYearInput.value = "";
    producerNameInput.value = "";
    priceInUahInput.value = "";
    colorInput.value = "";
    weightInKilogramsInput.value = "";
    cableForPowerInput.value = "";
    numberOfButtonInput.value = "";
};

export const addItemToPage = ({ id, productionYear, producerName, priceInUaH, color, weightInKilograms, cableForPower, numberOfButton }, onEditItem, onDeletedItem) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, productionYear, producerName, priceInUaH, color, weightInKilograms, cableForPower, numberOfButton }, onEditItem, onDeletedItem)
    );

    const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
    const deletedButton = document.getElementById(`${REMOVE_BUTTON_PREFIX}${id}`);


    editButton.addEventListener("click", onEditItem);
    deletedButton.addEventListener("click", onDeletedItem);

}

export const renderItemsList = (items, onEditItem, onDeletedItem) => {
    itemsContainer.innerHTML = "";
    for (const item of items) {
        addItemToPage(item, onEditItem, onDeletedItem);
    }
};

export const getInputValues = () => {
    return {
        productionYear: productionYearInput.value,
        producerName: producerNameInput.value,
        priceInUaH: priceInUahInput.value,
        color: colorInput.value,
        weightInKilograms: weightInKilogramsInput.value,
        cableForPower: cableForPowerInput.value,
        numberOfButton: numberOfButtonInput.value,
    };
};

export const getInputProducerName = () => {
    return findMousesByProdName.value
};