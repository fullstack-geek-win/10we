function changeValue() {
    const Querystring = window.location.search;
    const params = new URLSearchParams(Querystring);
    //input parameters
    let customername = params.get("customername");
    let address = params.get("address");
    let phone = params.get("phone");
    let snack1 = params.get("snack1");
    let snack2 = params.get("snack2");
    let snack3 = params.get("snack3");
    let snack4 = params.get("snack4");
    let snack5 = params.get("snack5");
    let biriyani1 = params.get("biriyani1");
    let biriyani2 = params.get("biriyani2");
    let biriyani3 = params.get("biriyani3");
    let biriyani4 = params.get("biriyani4");
    let biriyani5 = params.get("biriyani5");
    let biriyani6 = params.get("biriyani6");
    let hotdrink1 = params.get("hotdrink1");
    let hotdrink2 = params.get("hotdrink2");
    let hotdrink3 = params.get("hotdrink3");
    let hotdrink4 = params.get("hotdrink4");
    let hotdrink5 = params.get("hotdrink5");

    // output parameters
    let out_customername = document.getElementById("out_customername");
    let out_address = document.getElementById("out_address");
    let out_phone = document.getElementById("out_phone");
    let out_snack1 = document.getElementById("out_snack1");
    let out_snack2 = document.getElementById("out_snack2");
    let out_snack3 = document.getElementById("out_snack3");
    let out_snack4 = document.getElementById("out_snack4");
    let out_snack5 = document.getElementById("out_snack5");
    let out_biriyani1 = document.getElementById("out_biriyani1");
    let out_biriyani2 = document.getElementById("out_biriyani2");
    let out_biriyani3 = document.getElementById("out_biriyani3");
    let out_biriyani4 = document.getElementById("out_biriyani4");
    let out_biriyani5 = document.getElementById("out_biriyani5");
    let out_biriyani6 = document.getElementById("out_biriyani6");
    let out_hotdrink1 = document.getElementById("out_hotdrink1");
    let out_hotdrink2 = document.getElementById("out_hotdrink2");
    let out_hotdrink3 = document.getElementById("out_hotdrink3");
    let out_hotdrink4 = document.getElementById("out_hotdrink4");
    let out_hotdrink5 = document.getElementById("out_hotdrink5");



    // Assign values
    out_customername.value = customername;
    out_address.innerHTML = address;
    // out_phone.value = phone;
    out_snack1.value = snack1;
    out_snack2.value = snack2;
    // out_snack3.value = snack3;
    // out_snack4.value = snack4;
    // out_snack5.value = snack5;
    // out_biriyani1.value = biriyani1;
    // out_biriyani2.value = biriyani2;
    // out_biriyani3.value = biriyani3;
    // out_biriyani4.value = biriyani4;
    // out_biriyani5.value = biriyani5;
    // out_biriyani6.value = biriyani6;
    // out_hotdrink1.value = hotdrink1;
    // out_hotdrink2.value = hotdrink2;
    // out_hotdrink3.value = hotdrink3;
    // out_hotdrink4.value = hotdrink4;
    // out_hotdrink5.value = hotdrink5;
}