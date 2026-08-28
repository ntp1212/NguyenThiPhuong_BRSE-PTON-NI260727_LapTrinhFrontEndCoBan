let arr = [];
for (let i=0; i<20; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
let count = 0;
let input = prompt("Nhap mot so nguyen bat ki de tim kiem");
for (let i=0; i<arr.length; i++) {
    if (input == arr[i]) {
        count ++;
    }
}
console.log(arr);
alert(`So ${input} da xuat hien ${count} lan trong day so`);