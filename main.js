// turn off default form settings
const form = document.querySelector('form')
form.setAttribute('nonvalidate', true)


// grab elements
const submit = document.querySelector(".btn-primary")
let name = document.querySelector("#name__input")
let email = document.querySelector("#email__user")
let phone = document.querySelector("#phone__user")
let emailError = document.querySelector(".email__error")
let nameError = document.querySelector(".name__error")
let phoneError = document.querySelector(".phone__error")

//function to check name
let checkName = () => {
    if (name.value == ""){
        nameError.innerHTML = "Error: Enter Name";
        event.preventDefault()
        return
    }
    let re = /^[a-zA-Z ]{2,30}$/;
    if(!re.test(name.value)) {
        nameError.innerHTML = "Error: Non valid characters";
        event.preventDefault()
    }else{
        nameError.innerHTML = "Name has been submitted";
        event.preventDefault()
    }
}
//function to check email
let checkEmail = () => {
    if (email.value == ""){
        emailError.innerHTML = "Error: Enter Email";
        event.preventDefault()
        return
    }
    let re = /^[\w-]+@([\w-]+\.)+[\w-]+$/;
    if(!re.test(email.value)) {
        emailError.innerHTML = "Error: Non valid characters";
        event.preventDefault()
    }else{
        emailError.innerHTML = "Email has been submitted";
        event.preventDefault()
    }
}
//function to check phone
let checkPhone = () => {
        if (phone.value == ""){
            phoneError.innerHTML = "Error: Enter phone number";
            event.preventDefault()
            return
        }
        let re = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
        let ra = /^123-456-7890$/;
        let ba = /^098-765-4321$/;
        let bw = /^987-654-3210$/;
        let yu = /^012-345-6789$/;
        let ve = /^010-101-0101$/;
        let qw = /^101-010-1010$/;
        let repeatZ = /^0{3,}/;
        let repeatO = /^1{3,}/;
        let repeatT = /^2{3,}/;
        let repeatTh = /^3{3,}/;
        let repeatF = /^4{3,}/;
        let repeatFi = /^5{3,}/;
        let repeatS = /^6{3,}/;
        let repeatSe = /^7{3,}/;
        let repeatE = /^8{3,}/;
        let repeatN = /^9{3,}/;
        if(!re.test(phone.value) || ra.test(phone.value) || ba.test(phone.value) || bw.test(phone.value) || yu.test(phone.value) || ve.test(phone.value) || qw.test(phone.value) || repeatZ.test(phone.value)
            || repeatO.test(phone.value) || repeatT.test(phone.value) || repeatTh.test(phone.value) || repeatF.test(phone.value) || repeatFi.test(phone.value) ||repeatS.test(phone.value) || repeatSe.test(phone.value)
                || repeatE.test(phone.value) || repeatN.test(phone.value) || phone.value.length > 15) {
            phoneError.innerHTML = "Error: Please follow 000-000-0000 format or number is not valid";
            event.preventDefault()
        }else{
            phoneError.innerHTML = "Phone number has been submitted";
            event.preventDefault()
        }
    }

submit.addEventListener('click', (event) => {
    checkName();
    checkEmail();
    checkPhone();
});
