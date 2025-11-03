
function toggleBoxVisibility() {

    if (document.getElementById("switchNinnos").checked === true) {
        document.getElementById("groupCuantosNinnos").style.display = "block";
        document.getElementById("groupMenuInfantil").style.display = "block";
        document.getElementById("groupTrona").style.display = "block";
    }
    else {
        document.getElementById("groupCuantosNinnos").style.display = "none";
        document.getElementById("groupMenuInfantil").style.display = "none";
        document.getElementById("groupTrona").style.display = "none";
    }
}

function VisibilityThankyouMessage() {
    if (document.getElementById("formConfirma").style.display === "block") {
        document.getElementById("titleConfirma").style.display = "none";
        document.getElementById("formConfirma").style.display = "none";
        document.getElementById("thankyouMessage").style.display = "block";
    }
}