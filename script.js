document.addEventListener("DOMContentLoaded", function() {
    var inputFields = document.querySelectorAll(".input-field");
    var totalElement = document.getElementById("total");
    var clearButton = document.getElementById("clearButton");

    var subtractNumber = document.getElementById("subtractNumber");
    var calculationResult = document.getElementById("calculationResult");

    var calculateButton = document.getElementById("calculateButton");
    var clearCalculationButton = document.getElementById("clearCalculationButton");


    function cloneRow() {
        var initialTable = document.getElementById('initialTable');
        var repeatingTable = document.getElementById('repeatingTable');
        var newRow = repeatingTable.insertRow(repeatingTable.rows.length);

        // Clone values from specific cells (e.g., cells for 1000, 500, and 100 bills)
        var bill10sValue = document.getElementById('bill10s').value;
        var bill5sValue = document.getElementById('bill5s').value;
        var bill1sValue = document.getElementById('bill1s').value;
        var bill1510sValue = 0;

        // Insert the cloned values into the new row
        //newRow.insertCell(0).innerHTML = '1000';
        //newRow.insertCell(1).innerHTML = bill1000sValue;
        //newRow.insertCell(2).innerHTML = '---'; // You can replace this with the appropriate value if needed
        if (bill10sValue < 15) {
            repeatingTable.rows[1].cells[1].innerHTML = (15 - bill10sValue) * 10;
            bill1510sValue = bill1510sValue + (15 - bill10sValue) * 10;
        } else {
            repeatingTable.rows[1].cells[1].innerHTML = 0;
        }
        if (bill5sValue < 20) {
            repeatingTable.rows[2].cells[1].innerHTML = (20 - bill5sValue) * 5;
            bill1510sValue = bill1510sValue + (20 - bill5sValue) * 5;
        } else {
            repeatingTable.rows[2].cells[1].innerHTML = 0;
        }
        if (bill10sValue < 50) {
            repeatingTable.rows[3].cells[1].innerHTML = (50 - bill1sValue) * 1;
            bill1510sValue = bill1510sValue + (50 - bill1sValue) * 1;
        } else {
            repeatingTable.rows[3].cells[1].innerHTML = 0;
        }

        repeatingTable.rows[4].cells[1].innerHTML = bill1510sValue;
        initialTable.rows[9].cells[3].innerHTML = bill1510sValue;
        var targetCell = repeatingTable.rows[4].cells[1];
        targetCell.style.backgroundColor = "#FFC0CB";
    }


    function updateTotal() {
        var total = 0;
        inputFields.forEach(function(inputField) {
            var value = parseInt(inputField.value) || 0;
            total += value * parseInt(inputField.id.slice(4));
            
        });

        totalElement.textContent = "ตอนนี้มีตังในเก๊ะ: $" + total;
        cloneRow();
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
            var inputValue = parseInt(this.value) || 0;
            var billValue = parseInt(row.children[0].textContent) || 1; // Default to 1 if not a valid number
            var expectedQuantity = parseInt(row.children[2].textContent);
            // Calculate the total value by multiplying the input value with the bill value
            var totalValue = inputValue * billValue;
    
            // Display the total value in the fourth cell
            row.children[3].textContent = totalValue - (expectedQuantity * billValue);
    
            // Update styling based on comparison with expected quantity
            if (inputValue < expectedQuantity) {
                row.classList.add("error-row");
                row.classList.remove("success-row");
            } else {
                row.classList.add("success-row");
                row.classList.remove("error-row");
            }
    
            // Update total after input change
            updateTotal();
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
