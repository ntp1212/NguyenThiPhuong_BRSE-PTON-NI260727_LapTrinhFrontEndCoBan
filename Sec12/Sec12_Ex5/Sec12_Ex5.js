// Bài 1: In dãy Fibonacci
let a = 0;
let b = 1;
let count = 0;

while (count < 100) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;

    count++;
}
// Bài 2: Tính giai thừa của một số nguyên dương
let number = Number(prompt("Nhap so nguyen duong muon tinh gia thua"));
if (isNaN(number) || number <0) {
    alert("Nhap so nguyen duong");
    number = Number(prompt("Nhap so nguyen duong muon tinh gia thua"));
}
let giaThua = 1;
for (let i = 1; i < number; i++) {
    giaThua = number * i;
}
console.log(`Giai thua cua ${number} la: ${giaThua}.`)

// Bài 3: In tam giác vuông. Các góc vuông nằm ở các vị trí khác nhau
// tam giac co goc vuong phia tren, ben trai
let n1 = Number(prompt("Nhap chieu cao tam giac"));
for (let i = n1; i>=1; i--) {
    let row = "";
    for (let j = 1; j < i; j++) {
        row += "*";
    }
    console.log(row);
}
// tam giac co goc vuong ở dưới bên trái
let n2 = Number(prompt("Nhap chieu cao tam giac"));
for (let i = 1; i <= n2; i++) {
    let row = " ";
    for (j = 1; j<=i; j++) {
        row += "*";
    }
    console.log(row);
}
// tam giac co goc vuong phia tren, ben phai
let n3 = Number(prompt("Nhập chiều cao:"));

for (let i = n3; i >= 1; i--) {

    let row = "";

    // In khoảng trắng
    for (let j = 1; j <= n3 - i; j++) {
        row += " ";
    }

    // In dấu *
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
// tam giac co goc vuong phia duoi, ben phai

let n4 = Number(prompt("Nhập chiều cao:"));

for (let i = 1; i <= n4; i++) {

    let row = "";

    // In khoảng trắng
    for (let j = 1; j <= n4 - i; j++) {
        row += " ";
    }

    // In dấu *
    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}
//  In hình chữ nhật rỗng
let rows = Number(prompt("Nhập số dòng:"));
let cols = Number(prompt("Nhập số cột:"));

for (let i = 1; i <= rows; i++) {

    let row = "";

    for (let j = 1; j <= cols; j++) {

        if (i === 1 || i === rows || j === 1 || j === cols) {
            row += "*";
        } else {
            row += " ";
        }
    }

    console.log(row);
}
//   Viết chương trình tính lãi ngân hàng (lãi mẹ đẻ lãi con)
//  khi biết số tiền ban đầu, số tháng cho vay và lãi suất hàng tháng.
let money = Number(prompt("Nhập số tiền ban đầu:"));
let months = Number(prompt("Nhập số tháng cho vay:"));
let rate = Number(prompt("Nhập lãi suất hàng tháng (%):"));

let finalMoney = money * Math.pow(1 + rate / 100, months);

console.log(`Số tiền sau ${months} tháng là: ${finalMoney}`);