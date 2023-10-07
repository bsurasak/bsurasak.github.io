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

    function performSubtraction() {
        var result = 0;
        var subtractValue = parseInt(subtractNumber.value) || 0;


        var input2 = parseInt(document.getElementById("input2").value) || 0;
        var input3 = parseInt(document.getElementById("input3").value) || 0;


            result = subtractValue - 3300 - input2 - input3;
        calculationResult.textContent = result;
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



    // Page navigation functionality
    pageLinks.forEach(link => {
        link.addEventListener("click", function () {
            const pageNumber = this.getAttribute("data-page");
            // You can implement logic here to switch content based on the page number
            console.log("Navigating to Page " + pageNumber);
        });
    });

});
