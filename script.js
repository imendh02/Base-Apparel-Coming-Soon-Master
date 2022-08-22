const button = document.getElementById("btn");
const email = document.getElementById("email");

button.addEventListener("click",valide); 
function valide() {
    const emailValue = email.value.trim();
    var valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!emailValue.match(valid)) {
        const formControl = email.parentElement;
        formControl.className = 'form-control error';
    }
    if(emailValue.match(valid)) {
        const formControl = email.parentElement;
        formControl.classList.remove("error");
    }
}