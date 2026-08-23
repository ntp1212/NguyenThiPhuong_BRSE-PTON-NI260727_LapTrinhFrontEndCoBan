let a = Number(prompt("Mời bạn nhập vào số a"));
let b = Number(prompt("Mời bạn nhập vào số b"));
let phepTinh = prompt("Mời bạn nhập vào các phép tính (+,-,*,/)");
let ketQua;
if (phepTinh == "+") {
    ketQua = a + b;
    alert(`Kết quả của phép tính trên là: a + b = ${ketQua}`);
} else if (phepTinh == "-") {
    ketQua = a - b;
    alert(`Kết quả của phép tính trên là: a - b = ${ketQua}`)
} else if (phepTinh == "*") {
    ketQua = a * b;
    alert(`Kết quả của phép tính trên là: a * b = ${ketQua}`)
} else {
    ketQua = a / b;
    alert(`Kết quả của phép tính trên là: a / b = ${ketQua}`)
}