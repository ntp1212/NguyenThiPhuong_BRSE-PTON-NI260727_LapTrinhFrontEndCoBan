let arr = [];
for(let i=0; i<20; i++) {
    arr.push(Math.floor(Math.random() * 10));
}
console.log(arr);
let arrLe = [];
let arrChan = [];
for (let i=0; i<arr.length; i++) {
    if (arr[i] % 2 == 0) {
        arrChan.push(arr[i]);
    } else {
        arrLe.push(arr[i]);
    }
}
console.log(`Phan tu le: ${arrLe}`);
console.log(`Phan tu chan: ${arrChan}`);
let sumLe = 0;
let sumChan = 0;
for (let i=0; i<arrLe.length; i++) {
    sumLe += arrLe[i];
}
for (let i=0; i<arrChan.length; i++) {
    sumChan += arrChan[i];
}
alert(`Tong cac so le trong day so la: ${sumLe}`);
alert(`Tong cac so chan trong day so la: ${sumChan}`);
