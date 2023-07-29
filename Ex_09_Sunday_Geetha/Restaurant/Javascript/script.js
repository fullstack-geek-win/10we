const Querystring = window.location.search;
const params = new URLSearchParams(Querystring);
//input parameters
let customername = params.get("customername");
let address = params.get("address");
let phone = params.get("phone");
let cnt = params.get("flag");
let snack1, biriyani1, hotdrink1;
if (params.get("snack1") != null)
    snack1 = params.get("snack1");
if (params.get("biriyani1") != null)
    biriyani1 = params.get("biriyani1");
if (params.get("hotdrink1") != null)
    hotdrink1 = params.get("hotdrink1");



function changeValue() {


    // let snack1 = params.get("snack1");
    // let snack2 = params.get("snack2");
    // let snack3 = params.get("snack3");
    // let snack4 = params.get("snack4");
    // let snack5 = params.get("snack5");
    // let biriyani1 = params.get("biriyani1");
    // let biriyani2 = params.get("biriyani2");
    // let biriyani3 = params.get("biriyani3");
    // let biriyani4 = params.get("biriyani4");
    // let biriyani5 = params.get("biriyani5");
    // let biriyani6 = params.get("biriyani6");
    // let hotdrink1 = params.get("hotdrink1");
    // let hotdrink2 = params.get("hotdrink2");
    // let hotdrink3 = params.get("hotdrink3");
    // let hotdrink4 = params.get("hotdrink4");
    // let hotdrink5 = params.get("hotdrink5");

    // output parameters
    let out_customername = document.getElementById("out_customername");
    let out_address = document.getElementById("out_address");
    let out_phone = document.getElementById("out_phone");
    // let out_snack1 = document.getElementById("out_snack1");
    // let out_snack2 = document.getElementById("out_snack2");
    // let out_snack3 = document.getElementById("out_snack3");
    // let out_snack4 = document.getElementById("out_snack4");
    // let out_snack5 = document.getElementById("out_snack5");
    // let out_biriyani1 = document.getElementById("out_biriyani1");
    // let out_biriyani2 = document.getElementById("out_biriyani2");
    // let out_biriyani3 = document.getElementById("out_biriyani3");
    // let out_biriyani4 = document.getElementById("out_biriyani4");
    // let out_biriyani5 = document.getElementById("out_biriyani5");
    // let out_biriyani6 = document.getElementById("out_biriyani6");
    // let out_hotdrink1 = document.getElementById("out_hotdrink1");
    // let out_hotdrink2 = document.getElementById("out_hotdrink2");
    // let out_hotdrink3 = document.getElementById("out_hotdrink3");
    // let out_hotdrink4 = document.getElementById("out_hotdrink4");
    // let out_hotdrink5 = document.getElementById("out_hotdrink5");



    // Assign values
    //out_customername.value = customername;
    // out_address.innerHTML = address;
    //out_phone.innerHTML = phone;
    // out_snack1.value = snack1;
    // out_snack2.value = snack2;
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

    changeSubTotal()

}

function changeSubTotal() {
    let qty = parseInt(document.getElementById("snack1_qty").value);
    let prize = parseFloat(document.getElementById("snack1_prize").value);
    document.getElementById("snack1_subtot").value = qty * prize;
}

// function calculateTotal() {
//     let unit_price = {
//         frenchfries: 35
//         // sugar: 22,
//         //butter: 12,
//         //eggs: 2,
//         //vanilla: 43
//     };
//     let item_price = {}

//     item_price.frenchfries = ($("#qty_frenchfries").val() * unit_price.frenchfries)
//     $("#price_frenchfries").val(item_price.frenchfries);

//item_price.butter = ($("#qty_butter").val() * unit_price.butter)
//$("#price_butter").val(item_price.butter);

//item_price.eggs = ($("#qty_eggs").val() * unit_price.eggs)
// $("#price_eggs").val(item_price.eggs);

// item_price.vanilla = ($("#qty_vanilla").val() * unit_price.vanilla)
// $("#price_vanilla").val(item_price.vanilla);

//let total = item_price.sugar + item_price.butter + item_price.eggs + item_price.vanilla;


// $("#total_value").text(total);

// }

// $(function () {
//     $(".qty").on("change keyup", calculateTotal)
// })




cnt = parseInt(cnt);
for (let i = 0; i < cnt; i++) {
    let foodItem = document.createElement("input");
    let foodQty = document.createElement("input");
    let foodPrize = document.createElement("input");
    let foodSubTotal = document.createElement("input");




    if (i == 0) {
        foodItem.value = snack1;
        foodQty.value = 1;
        foodPrize.value = 95;
        foodPrize.readOnly = "true";
        foodSubTotal.value = foodQty.value * foodPrize.value;
        foodSubTotal.readOnly = "true";
    }

    if (i == 1)
        foodItem.value = biriyani1;

    if (i == 2)
        foodItem.value = hotdrink1;

    const divTable = document.getElementById("divTable");
    if (i == 0) {
        const headfooditem = document.createElement("input");
        const headfoodQty = document.createElement("input");
        const headprize = document.createElement("input");
        const headsubtotal = document.createElement("input");

        headfooditem.value = "FOODITEM";
        headfooditem.style.color = "blue";
        headfooditem.readOnly = "true";

        headfoodQty.value = "QUANTITY";
        headfoodQty.style.color = "blue";
        headfoodQty.readOnly = "true";

        headprize.value = "PRIZE";
        headprize.style.color = "blue";
        headprize.readOnly = "true";

        headsubtotal.value = "SUBTOTAL";
        headsubtotal.style.color = "blue";
        headsubtotal.readOnly = "true";

        divTable.appendChild(headfooditem);
        divTable.appendChild(headfoodQty);
        divTable.appendChild(headprize);
        divTable.appendChild(headsubtotal);
        divTable.appendChild(document.createElement("br"));
    }

    divTable.appendChild(foodItem);
    foodQty.onchange = changeValue;
    divTable.appendChild(foodQty);
    divTable.appendChild(foodPrize);
    divTable.appendChild(foodSubTotal);
    divTable.appendChild(document.createElement("br"));
}

function changeQty() {
    foodQty.value = document.getElementById("foodQty");

    foodPrize.value = 95;
    parseInt(foodSubTotal.value) = parseInt(foodQty.value) * parseInt(foodPrize.value);
}





