let display = document.getElementById("display");

let numberButtons = document.querySelectorAll(".number");

let operatorButtons = document.querySelectorAll(".operator");

let equalButton = document.getElementById("equal");

let clearButton = document.getElementById("clear");


// Nhập số
numberButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        display.value += button.textContent;

    });

});


// Nhập phép toán
operatorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        display.value += button.textContent;

    });

});


// Nút C
clearButton.addEventListener("click", function () {

    display.value = "";

});


// Nút =
equalButton.addEventListener("click", function () {

    try {

        let expression = display.value;

        // Kiểm tra không được để trống
        if (expression === "") {
            throw new Error("Vui lòng nhập phép tính!");
        }

        // Đổi ký hiệu × và ÷ thành toán tử JavaScript
        expression = expression.replace(/×/g, "*");
        
        // Kiểm tra chia cho 0
        if (/\/0/.test(expression)) {
            throw new Error("Không thể chia cho 0!");
        }

        // Tính kết quả
        let result = Function("return " + expression)();

        // Kiểm tra kết quả
        if (!Number.isFinite(result)) {
            throw new Error("Phép tính không hợp lệ!");
        }

        display.value = result;

    } catch (error) {

        alert(error.message);

        display.value = "";

    }

});