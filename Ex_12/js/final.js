const QueryString1 = window.location.search;
const params1 = new URLSearchParams(QueryString1);

let firstname = params1.get("out_firstname");
let lastname = params1.get("out_lastname");
let gendr = params1.get("out_gendr");
let dateofbirth = params1.get("out_dateofbirth");
let mail = params1.get("out_mail");
let pswd = params1.get("pswd");
//let cnfmpswd = params1.get("cnfmpswd");

let out_firstname = document.getElementById("out_firstname");
let out_lastname = document.getElementById("out_lastname");
let out_gendr = document.getElementById("out_gendr");
let out_dateofbirth = document.getElementById("out_dateofbirth");
let out_mail = document.getElementById("out_mail");
let out_pswd = document.getElementById("out_pswd");
//let out_cnfmpswd = document.getElementById("out_cnfmpswd");


out_firstname.value = firstname;
out_lastname.value = lastname;
out_gendr.value = gendr;
out_dateofbirth.value = dateofbirth;
out_mail.value = mail + "@besant.com";
out_pswd.value = pswd;
//out_cnfmpswd.value = cnfmpswd;
