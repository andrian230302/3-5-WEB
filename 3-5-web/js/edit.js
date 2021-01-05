import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

import {
    updateMouses,
} from "./api.js";

const submitButton = document.getElementById("submit_button");


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const query = window.location.search.substring(1);
    const vars = query.split("=");
    const itemId = vars[1];

    const { productionYear, producerName, priceInUaH, color, weightInKilograms, cableForPower, numberOfButton } = getInputValues();

    clearInputs();

    updateMouses(itemId, {
        productionYear,
        producerName,
        priceInUaH,
        color,
        weightInKilograms,
        cableForPower,
        numberOfButton,
    });
    alert("MOUSES Edited")
});