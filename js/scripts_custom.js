
function toggleBoxVisibility() {

    if (document.getElementById("switchNinnos").checked == true) {
        document.getElementById("groupCuantosNinnos").style.visibility = "visible";
        document.getElementById("groupMenuInfantil").style.visibility = "visible";
        document.getElementById("groupTrona").style.visibility = "visible";
    }
    else {
        document.getElementById("groupCuantosNinnos").style.visibility = "hidden";
        document.getElementById("groupMenuInfantil").style.visibility = "hidden";
        document.getElementById("groupTrona").style.visibility = "hidden";
    }
}