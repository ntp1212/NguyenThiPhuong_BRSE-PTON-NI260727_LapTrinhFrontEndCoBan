let weight = Number(prompt("Nhap can nang tinh theo kilogram"));
let height = Number(prompt("Nhap chieu cao tinh theo meter"));
let Bmi = weight / (height * height);
// Theo WHO
if (Bmi < 18.5) {
    alert("Theo WHO bạn có cân nặng thấp( bạn gầy)");
} else if (Bmi <= 24.9) {
    alert("Theo WHO bạn có cân nặng bình thường")
} else if (Bmi <= 25) {
    alert("Theo WHO bạn đang thừa cân ")
} else if (Bmi < 30) {
    alert("Theo WHO bạn đang ở giai đoạn tiền béo phì ")
} else if (Bmi <= 35) {
    alert("Theo WHO bạn đang ở giai đoạn béo phì độ I ")
} else if (Bmi < 40) {
    alert("Theo WHO bạn đang ở giai đoạn béo phì độ II")
} else {
    alert("Theo WHO bạn đang ở giai đoạn béo phì độ III")
}
// theo IDI & WPRO
if (Bmi < 22.9) {
    alert("Theo IDI & WPRO bạn có cân nặng bình thường")
} else if (Bmi <= 23) {
    alert("Theo IDI & WPRO bạn đang thừa cân ")
} else if (Bmi < 25) {
    alert("Theo IDI & WPRO bạn đang ở giai đoạn tiền béo phì ")
} else if (Bmi < 30) {
    alert("Theo IDI & WPRO bạn đang ở giai đoạn béo phì độ I ")
} else {
    alert("Theo IDI & WPRO bạn đang ở giai đoạn béo phì độ II")
}