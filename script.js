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

        totalElement.textContent = "ตอนนี้มีตังในเก๊ะ: $" + total;
    }

    function clearInputs() {
        inputFields.forEach(function(inputField) {
            inputField.value = ""
        });
        totalElement.textContent = "ตอนนี้มีตังในเก๊ะ: $0";
    }

    clearButton.addEventListener("click", function() {
        clearInputs();
        resetRowColors(); // Call the function to reset row colors
    });

    function resetRowColors() {
        inputFields.forEach(function(inputField) {
            var row = inputField.parentElement.parentElement;
            row.classList.remove("error-row");
            row.classList.remove("success-row");
        });
    }


    // Page 2 declarations
var inputFieldsPage2 = document.querySelectorAll(".input-field-page2");
var totalElementPage2 = document.getElementById("total-page2");
var clearButtonPage2 = document.getElementById("clearButton-page2");

// Functions for Page 2
function updateTotalPage2() {
    var total2 = 0;
    inputFieldsPage2.forEach(function(inputFieldPage2) {
        var value = parseInt(inputFieldPage2.value) || 0;
        total2 += value * parseInt(inputFieldPage2.id.slice(4));
    });

    totalElementPage2.textContent = "ตอนนี้มีตังในเก๊ะ: $" + total2;
}

// Add event listeners to input fields for automatic calculation
inputFieldsPage2.forEach(function(inputFieldPage2) {
    inputFieldPage2.addEventListener("input", updateTotalPage2);
});

function clearInputsPage2() {
    inputFieldsPage2.forEach(function(inputFieldPage2) {
        inputFieldPage2.value = "";
    });
    totalElementPage2.textContent = "ตอนนี้มีตังในเก๊ะ: $0";
}

clearButtonPage2.addEventListener("click", function() {
    clearInputsPage2();
    resetRowColorsPage2(); // Call the function to reset row colors for Page 2
});
function resetRowColorsPage2() {
    inputFields.forEach(function(inputField) {
        var row = inputField.parentElement.parentElement;
        row.classList.remove("error-row");
        row.classList.remove("success-row");
    });
}




    function performSubtraction() {
        var result = 0;
        var subtractValue = parseInt(subtractNumber.value) || 0;


        var input2 = parseInt(document.getElementById("input2").value) || 0;
        var input3 = parseInt(document.getElementById("input3").value) || 0;


            result = subtractValue - 3300 - input2 - input3;
        calculationResult.textContent = result;

        var calculationResultPage2 = document.getElementById("calculationResultPage2");
        calculationResultPage2.textContent = result;
    }


    calculateButton.addEventListener("click", function() {
        performSubtraction();
    });
    clearCalculationButton.addEventListener("click", function() {
        subtractNumber.value = "";
        input2.value = "";
        input3.value = "";
        calculationResult.textContent = 0;
    });

    inputFields.forEach(function(inputField) {
        inputField.addEventListener("input", function() {
            var row = this.parentElement.parentElement; // Get the parent row
            var value = parseInt(this.value) || 0;
            var expectedQuantity = parseInt(row.children[2].textContent);

            if (value < expectedQuantity) {
                row.classList.add("error-row");
                row.classList.remove("success-row");
            } else {
                row.classList.add("success-row");
                row.classList.remove("error-row");
            }

            updateTotal(); // Update total after input change
        });
        
    });



    /* date drop down and page number*/

    const daysDropdown = document.getElementById("days");
    const monthsDropdown = document.getElementById("months");
    const yearsDropdown = document.getElementById("years");
    const pageLinks = document.querySelectorAll(".page-link");


    const years = [
        "จันทร์","อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"
    ];
    for (let i = 0; i < years.length; i++) {
        yearsDropdown.options.add(new Option(years[i], i + 1));
    }

    // Populate dropdowns with options (days, months, years)
    for (let i = 1; i <= 31; i++) {
        daysDropdown.options.add(new Option(i, i));
    }

    const months = [
        "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม",
         "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
    ];

    for (let i = 0; i < months.length; i++) {
        monthsDropdown.options.add(new Option(months[i], i + 1));
    }


    const page1Content = document.querySelector('.container');
    const page2Content = document.querySelector('.page2-container');


    // Page navigation functionality
    pageLinks.forEach(link => {
        link.addEventListener("click", function () {
            const pageNumber = this.getAttribute("data-page");

            if (pageNumber === "1") {
                page1Content.style.display = "block";
                page2Content.style.display = "none";
            } else if (pageNumber === "2") {
                page1Content.style.display = "none";
                page2Content.style.display = "block";
            }

            console.log("Navigating to Page " + pageNumber);
        });
    });

});
