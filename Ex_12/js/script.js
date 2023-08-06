const QueryString = window.location.search;
const params = new URLSearchParams(QueryString);
//input parameters
let firstname = params.get("firstname");
let lastname = params.get("lastname");
let gendr = params.get("gender");
let dateofbirth = params.get("DOB");

//output parameters
let out_firstname = document.getElementById("out_firstname");
let out_lastname = document.getElementById("out_lastname");
//let out_gendr = document.getElementsByTagName("out_gendr");
//let out_dateofbirth=document.getElementById("out_dateofbirth");
//Assign values
out_firstname.value = firstname;
out_lastname.value = lastname;
//out_gendr.value=gendr;
//out_dateofbirth=dateofbirth;

// Index page validation
function IndexClearForm() {
    let firstNameError = document.getElementById("firstnameerr");
    let lastNameError = document.getElementById("lastnameerr");
    firstNameError.innerHTML = "";
    lastNameError.innerHTML = "";
}
function FormValidation() {
    ClearForm();
    if (!firstNameValidation())
        return false;
    if (!lastNameValidation())
        return false;
    return true;
}

// DOB page validation
function DOBClearForm() {
    document.getElementById("female").checked = false;
    document.getElementById("male").checked = false;
    document.getElementById("DOB").value = "dd/mm/yyyy";
    document.getElementById("age").value = "";
    
}

function DOBFormValidation() {
    // DOBClearForm();
    if (!genderValidation())
        return false;
    if (!dobValidation())
        return false;
    return true;
}

function dobValidation() {
    document.getElementById("age").value = "";
    document.getElementById("agemsg").innerHTML = "";
    document.getElementById("genderr").innerHTML = "";
    let dob = document.getElementById("DOB").value;
    let currentDate = new Date().toJSON().slice(0, 10);
    let age = parseInt(currentDate.slice(0, 4)) - parseInt(dob.slice(0, 4));
    
    // Technical Handling
    if (isNaN(age)) {
        document.getElementById("agemsg").innerHTML = "Please enter valid DOB";
        return false;
    }

    // Logical Handling
    document.getElementById("age").value = age;
    if (age < 18) {
        document.getElementById("agemsg").innerHTML = "You are not able to create an account if your DOB is under 18 years";
        return false;
    }
    return true;
}

function genderValidation() {
    if (document.getElementById("female").checked == false && 
        document.getElementById("male").checked == false) {
            document.getElementById("genderr").innerHTML = "Please select any Gender";
            return false;
    }
    return true;
}

function firstNameValidation(){
    let firstName = document.getElementById("firstname");
    let firstNameError = document.getElementById("firstnameerr");
    if( firstName.value.trim()=="" || firstName.value.trim()==null){
        firstNameError.innerHTML = "Please enter the first name";
        return false;
    }
    else {
        firstName.value = firstName.value.trim();
        return true;
    }
}

function lastNameValidation(){
    let lastName = document.getElementById("lastname");
    let lastNameError = document.getElementById("lastnameerr");
    if( lastName.value.trim()=="" || lastName.value.trim()==null){
        lastNameError.innerHTML = "Please enter the last name";
        return false;
    }
    else {
        lastName.value = lastName.value.trim();
        return true;
    }
}



