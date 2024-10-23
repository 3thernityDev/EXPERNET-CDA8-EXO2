// Change button name
const changeMe2 = (e) => {
    const txt = document.getElementById("changeMe");
    const buttonValue = txt.value;
    document.getElementById("buttonChangeMe").innerText = buttonValue
    console.log(buttonValue);
};
