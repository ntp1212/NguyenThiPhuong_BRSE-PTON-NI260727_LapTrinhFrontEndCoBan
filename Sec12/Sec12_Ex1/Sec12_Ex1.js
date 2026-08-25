// Bai 1
let a = Number(prompt("Nhap so a"));
let b = Number(prompt("Nhap so b"));
let tong = a + b;
console.log("Tong hai so a + b = ", tong);
// Bai 2
let tuoi = prompt("Nhap tuoi cua ban");
if (isNaN(tuoi)) {
    console.log("Phai nhap tuoi bang so");
} else if (tuoi <= 0) {
    console.log("Nhap tuoi lon hon 0");
} else if (tuoi >= 15) {
    console.log("Ban da du tuoi vao 10");
} else {
    console.log("Ban chua du tuoi vao 10");
}
// Bai 3
let numberInt = Number(prompt("Nhap so ban muon kiem tra"));
if (isNaN(numberInt)) {
    console.log("Ban phai nhap so");
} else if (numberInt < 0) {
    console.log(`So ${numberInt} la so nho hon 0`);
} else if (numberInt == 0) {
    console.log(`So ${numberInt} = 0`);
} else {
    console.log(`So ${numberInt} la so lon hon 0`)
}
// Bai 4
let numbetInt1 = Number(prompt("Nhap so nguyen thu nhat"));
let numbetInt2 = Number(prompt("Nhap so nguyen thu hai"));
let numbetInt3 = Number(prompt("Nhap so nguyen thu ba"));
let max;
if (numbetInt1 >= numbetInt2 && numbetInt1 >= numbetInt3) {
    max = numbetInt1;
} else if (numbetInt2 >= numbetInt1 && numbetInt2 >= numbetInt3) {
    max = numbetInt2;
} else {
    max = numbetInt3;
}
console.log("So lon nhat la: ", max);
// bai 5
let diemKiemTra = Number(prompt("Nhap diem bai kiem tra"));
if (isNaN(diemKiemTra) || diemKiemTra < 0 || diemKiemTra > 10) {
    alert("Ban phai nhap so tu 0 den 10");
    diemKiemTra = Number(prompt("Nhap diem bai kiem tra"));
};
let diemGiuaKi = Number(prompt("Nhap diem thi giua ki"));
if (isNaN(diemGiuaKi) || diemGiuaKi < 0 || diemGiuaKi > 10) {
    alert("Ban phai nhap so tu 0 den 10");
    diemGiuaKi = Number(prompt("Nhap diem thi giua ki"));
};
let diemCuoiKi = Number(prompt("Nhap diem thi cuoi ki"));
if (isNaN(diemCuoiKi) || diemCuoiKi < 0 || diemCuoiKi > 10) {
    alert("Ban phai nhap so tu 0 den 10");
    diemCuoiKi = Number(prompt("Nhap diem thi cuoi ki"));
};
let diemTrungBinh = (diemKiemTra + diemGiuaKi * 2 +diemCuoiKi * 3)/5;
if (diemTrungBinh >= 8.5) {
    console.log("Hoc luc Gioi");
} else if (diemTrungBinh >= 6.5) {
    console.log("Hoc luc Kha");
} else if (diemTrungBinh >= 5.0) {
    console.log("Hoc luc Trung binh");
} else {
    console.log("Hoc luc Yeu");
}
