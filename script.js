document.addEventListener("DOMContentLoaded", function() {
    var inputFields = document.querySelectorAll(".input-field");
    var totalElement = document.getElementById("total");
    var clearButton = document.getElementById("clearButton");

    var subtractNumber = document.getElementById("subtractNumber");
    var calculationResult = document.getElementById("calculationResult");

    var calculateButton = document.getElementById("calculateButton");
    var clearCalculationButton = document.getElementById("clearCalculationButton");

    function updateTotal() {
        var total = 0;
        inputFields.forEach(function(inputField) {
            var value = parseInt(inputField.value) || 0;
            total += value * parseInt(inputField.id.slice(4));
        });

        totalElement.textContent = "Total money: $" + total;
    }

    function clearInputs() {
        inputFields.forEach(function(inputField) {
            inputField.value = "";
        });
        totalElement.textContent = "ตอนนี้มีตังในเก๊ะ: $0";
    }

    clearButton.addEventListener("click", clearInputs);

    function performSubtraction() {
        var result = 0;
        var subtractValue = parseInt(subtractNumber.value) || 0;
            result = subtractValue - 3300;
        calculationResult.textContent = result;
    }


    calculateButton.addEventListener("click", function() {
        performSubtraction();
    });
    clearCalculationButton.addEventListener("click", function() {
        subtractNumber.value = "";
        calculationResult.textContent = 0;
    });

    inputFields.forEach(function(inputField) {
        inputField.addEventListener("input", updateTotal);
    });

});
