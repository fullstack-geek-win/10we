const QueryString1 = window.location.search;
const params1 = new URLSearchParams(QueryString1);

let firstname = params1.get("out_firstname");
let lastname = params1.get("out_lastname");
let gendr = params1.get("gender");
let dateofbirth = params1.get("DOB");

let out_firstname = document.getElementById("out_firstname");
let out_lastname = document.getElementById("out_lastname");
let out_gendr = document.getElementById("out_gendr");
let out_dateofbirth = document.getElementById("out_dateofbirth");

out_firstname.value = firstname;
out_lastname.value = lastname;
out_gendr.value = gendr;
out_dateofbirth.value = dateofbirth;

