import {
    clearInputs,
    getInputValues,
} from "./dom_util.js";

import {
    postMouses,
} from "./api.js";

const submitButton = document.getElementById("submit_button");


submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const { productionYear, producerName, priceInUaH, color, weightInKilograms, cableForPower, numberOfButton } = getInputValues();

    clearInputs();

    postMouses({
        productionYear,
        producerName,
        priceInUaH,
        color,
        weightInKilograms,
        cableForPower,
        numberOfButton,
    });
    alert("MOUSES CREATED")
});