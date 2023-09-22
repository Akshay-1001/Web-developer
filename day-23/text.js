function collectData() {
    let signMail = document.getElementById("sign-email").value;
    let signPass = document.getElementById("sign-pass").value;

    let msgbox = document.getElementById("sign-msg");

    fillError = "Enter your details";

    if (signMail, signPass){
        UserData.sM = signMail;
        UserData.sP = signPass;

    }
    else {
        msgbox.innerHTML = fillError;
    }
}


let UserData = {}

function checkme() {
    let loginMail = document
}