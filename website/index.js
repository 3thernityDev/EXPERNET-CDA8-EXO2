// Change button name
const changeMe2 = (e) => {
    const txt = document.getElementById("changeMe");
    const buttonValue = txt.value;
    document.getElementById("buttonChangeMe").innerText = buttonValue;
    console.log(buttonValue);
};

const validate = () => {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let email = document.getElementById("email");
    let pseudo = document.getElementById("pseudo");
    let password = document.getElementById("password");
    let checkpassword = document.getElementById("checkpassword");

    if (
        (!fname.value.trim(),
        !lname.value.trim(),
        !email.value.trim(),
        !pseudo.value.trim(),
        !password.value.trim(),
        !checkpassword.value.trim())
    ) {
        console.log("Merci de remplir tout les champs");
        document.getElementById("errorPassword").innerText =
            "Merci de remplir tout les champs";
    } else {
        if (password.value === checkpassword.value) {
            console.log("ok pour envoie");
            document.getElementById("errorPassword").innerText = "";
        } else {
            document.getElementById("errorPassword").innerText =
                "Les mots de passe ne sont pas identique";
        }
    }
};
