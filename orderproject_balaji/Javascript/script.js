function changeValue() {
    const QueryString = window.location.search;
    const Params = new URLSearchParams(QueryString);

    // console.log(QueryString);
    // console.log(Params.get("snacks"));

    // input parameters
    let firstname = Params.get("firstname");
    let email = Params.get("email");
    let address = Params.get("address");
    let mobile = Params.get("mobile");
    let snack4 = Params.get("snacks");
    let biriyani5 = Params.get("biriyani");
    let hotdrink4 = Params.get("hotdrinks");

    // output parameters
    let out_firstname = document.getElementById("out_firstname");
    let out_email = document.getElementById("out_email");
    let out_address = document.getElementById("out_address");
    let out_mobile = document.getElementById("out_mobile");
    let out_snack4 = document.getElementById("out_snack4");
    let out_biriyani5 = document.getElementById("out_biriyani5");
    let out_hotdrink4 = document.getElementById("out_hotdrink4");

    // Assign values
    out_firstname.value = firstname;
    out_email.value = email;
    out_address.value = address;
    out_mobile.value = mobile;
    out_snack4.value = snack4;
    out_biriyani5.value = biriyani5;
    out_hotdrink4.value = hotdrink4;

}

function calculation() {
    
}