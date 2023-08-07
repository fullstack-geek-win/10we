

function convert() {
    let cmVal = document.getElementById("txtInput");
    if (cmVal.value.trim() == "" || cmVal.value.trim() == null) {
        document.getElementById("result").innerHTML = "Empty value";
        return;
    }
    if (isNaN(cmVal.value)) {
        document.getElementById("result").innerHTML = "Not a Number value";
        return;
    }
    let inchVal = cmVal.value * 0.393701;
    document.getElementById("result").innerHTML = inchVal.toFixed(4) + " Inches";
}