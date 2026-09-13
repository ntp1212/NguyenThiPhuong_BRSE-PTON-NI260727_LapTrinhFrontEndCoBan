// lay phep tinh
let operatorBtn = document.querySelectorAll('.operator');
console.log(operatorBtn);
// lay so nhap vao
let numberBtn = document.querySelectorAll('.number');
console.log(numberBtn);

// nut bang
let equalBtn = document.getElementById('equal');
console.log(equalBtn);

// nut clear
let clearBtn = document.getElementById('clear');
console.log(clearBtn);

// man hinh hien thi
let display = document.getElementById("display");


// doi nut nhan thanh toan tu



// bat su kien nhan nut so

numberBtn.forEach(function (btn) {
    btn.addEventListener('click', function() {
        console.log();
        
        display.value += btn.textContent;
    })
})

// bat su kien nhan nut phep tinh

operatorBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
        display.value += btn.textContent;
    })
})

// nut clear
clearBtn.addEventListener('click',function() {
    display.value = '';
})


// kiem tra va hien thi ket qua
