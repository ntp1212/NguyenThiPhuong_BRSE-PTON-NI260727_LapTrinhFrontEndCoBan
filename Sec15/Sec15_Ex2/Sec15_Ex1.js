// Bài 1: Viết một chương trình để in các ký tự trong một mảng theo thứ tự đảo ngược.
//  Ví dụ, nếu một mảng chứa các ký tự [ ‘c’, ‘s’, ‘c’, ‘2’, ‘6’, ‘1’ ] 
// sau khi thực hiện đảo ngược sẽ là “261csc”

let arr1 =[];
for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
    
    arr1.push(input);
}
console.log('Mảng ban đầu:',arr1);
let arrReverse = arr1.reverse();
console.log(arrReverse);

// Bài 2: Viết một chương trình khai báo một mảng ký tự. In ra số “ký tự số” trong mảng.
let arr2 =[];
for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
    
    arr2.push(input);
}
let count2 = 0; 
console.log('Mảng ban đầu:',arr2);
for (let i in arr2) {
    if(!isNaN(Number(arr2[i]))) {
        count2++;
    }
}
console.log(count2)
// Bài 3: Viết một chương trình để đếm số ký tự trong một chuỗi.
let arr3 =[];
for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
    
    arr3.push(input);
}
let count3 = 0; 
console.log('Mảng ban đầu:',arr3);
for (let i in arr3) {
    if(isNaN(Number(arr3[i]))) {
        count3++;
    }
}
console.log(count3)

// Bài 4: Viết một chương trình nhập vào 2 chuỗi, 
// sau đó kiểm tra xem hai chuỗi có giống nhau hay không.
let str1 = prompt("Nhập chuỗi thứ nhất:");

console.log(str1);
let str2 = prompt("Nhập chuỗi thứ hai:");

console.log(str2);
if (str1===str2) {
    console.log("Hai chuoi giong nhau");
} else{
    console.log("Hai chuoi khac nhau");
}
// Bài 5: Viết chương trình nhập vào một mảng ký tự,
//  tìm tất cả các ký tự trong mảng là (-) và thay thế các ký tự này bởi ký tự ( _
let arr5 = prompt("Nhap mang ki tu");
let a = "-"
let result = [];

for (let i=0; i<arr5.length; i++) {
    if(arr5[i] === a) {
        result[i] = "_";
    } else {
        result[i] = arr5[i]
    }
}
console.log(result);
