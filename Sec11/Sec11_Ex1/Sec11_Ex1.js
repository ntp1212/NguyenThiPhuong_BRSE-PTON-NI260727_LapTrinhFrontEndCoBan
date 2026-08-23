let kiemTra = Number(prompt("Nhap nam can kiem tra"));
if (kiemTra % 4 == 0 || (kiemTra % 100 == 0 && kiemTra % 400 == 0)) {
alert(`Day la nam nhuan`);

} else {
    alert(`Day khong la nam nhuan`)
}