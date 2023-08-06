
const QueryString1 = window.location.search;
const params1 = new URLSearchParams(QueryString1);

let firstname = params1.get("out_firstname");
let lastname = params1.get("out_lastname");
let gendr = params1.get("out_gendr");
let dateofbirth = params1.get("out_dateofbirth");
let mail = params1.get("email");

let out_firstname = document.getElementById("out_firstname");
let out_lastname = document.getElementById("out_lastname");
let out_gendr = document.getElementById("out_gendr");
let out_dateofbirth = document.getElementById("out_dateofbirth");
let out_mail = document.getElementById("out_mail");

out_firstname.value = firstname;
out_lastname.value = lastname;
out_gendr.value = gendr;
out_dateofbirth.value = dateofbirth;
out_mail.value = mail;


function pswdValidation() {
    let pswd = document.getElementById("pswd").value;
    let cnfmpswd = document.getElementById("cnfmpswd").value;
    if (pswd != cnfmpswd) {
        document.getElementById("errpswd").innerHTML = "password and confirm password should be same";
        return false;
    }

    return true;
}