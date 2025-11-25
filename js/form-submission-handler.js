(function () {
    // get all data in form and return object
    function getFormData(form) {
        var elements = form.elements;
        var formData = {};

        Object.keys(elements).map(function (x) {
            if (elements[x].id === "name")
                formData["fname"] = elements[x].value;

            if (elements[x].id === "acompanante")
                formData["acompanante"] = elements[x].value;

            if (elements[x].id === "switchNinnos")
                formData["switchNinnos"] = elements[x].checked;

            if (elements[x].id === "cuantosNinnos")
                formData["cuantosNinnos"] = elements[x].value

            if (elements[x].id === "menuInfantil")
                formData["menuInfantil"] = elements[x].value;

            if (elements[x].id === "trona")
                formData["trona"] = elements[x].value;

            if (elements[x].id === "alergias")
                formData["alergias"] = elements[x].value;

            if (elements[x].id === "transporte")
                formData["transporte"] = elements[x].value;

            if (elements[x].id === "observaciones")
                formData["observaciones"] = elements[x].value;
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(formData);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        return { data: formData };
    }

    function handleFormSubmit(event) {  // handles form submit without any jquery
        debugger;
        document.getElementById("ErrorName").style.display = "none";
        document.getElementById("ErrorTransporte").style.display = "none";

        event.preventDefault();           // we are submitting via xhr below
        var form = event.target;
        var formData = getFormData(form);
        var data = formData.data;

        if (data.fname != '' && data.transporte != '') {
            disableAllButtons(form);
            var url = form.action;
            var xhr = new XMLHttpRequest();
            xhr.open('POST', url);
            // xhr.withCredentials = true;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 2 && xhr.status === 200) {
                    form.reset();
                    VisibilityThankyouMessage();
                }
            };
            // url encode form data for sending as post data
            var encoded = Object.keys(data).map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            }).join('&');
            xhr.send(encoded);

        }
        else {
            if (data.fname == '')
                document.getElementById("ErrorName").style.display = "block";
            if (data.transporte == '')
                document.getElementById("ErrorTransporte").style.display = "block";
        }
    }

    function loaded() {
        // bind to the submit event of our form
        var forms = document.querySelectorAll("form");
        for (var i = 0; i < forms.length; i++) {
            forms[i].addEventListener("submit", handleFormSubmit, false);
        }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);

    function disableAllButtons(form) {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
})();
