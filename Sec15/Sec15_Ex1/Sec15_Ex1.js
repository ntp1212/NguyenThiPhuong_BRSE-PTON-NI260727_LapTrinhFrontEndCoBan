// Bài 1: Viết chương trình khởi tạo nhập 
// vào một mảng số nguyên gồm 10 phần tử. 
// Chương trình thực hiện tính và hiển thị xem có 
// bao nhiêu số nguyên lớn hơn hoặc bằng 10.
let arr1 = [];

for (let i = 0; i < 10; i++) {
    let input = prompt(`Nhập phần tử thứ ${i + 1}:`);
// kiem tra dinh dang co dung la so
    if (input === null || input.trim() === "" || isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
    } else {
        arr1[i] = Number(input);
    }
}

let count1 = 0;
for (let i in arr1) {
    if( arr1[i] >= 10) {
        count1++;
    }
};
console.log(`Mang co ${count1} phan tu lon hon hoac bang 10`);


// Bài 2: Viết chương trình khởi tạo nhập vào
//  một mảng số nguyên gồm 10 phần tử khác nhau. 
// Chương trình hiển thị ra được phần tử có 
// giá trị lớn nhất trong mảng và vị trí của phần tử đó.
let arr2 = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } else if (arr2.includes(input)) {
        alert("Vui lòng nhập số không trùng với số trước!");
        i--;
        continue;
    }
    arr2.push(input);
}

let max = arr2[0];
let imax = 0;
for (let i in arr2) {
    if (arr2[i] > max) {
        max =arr2[i];
        imax = i;
    }
}
console.log(`Số lớn nhất của mảng là ${max} tại vị trí số ${imax}`);


// Bài 3: Viết chương trình khởi tạo nhập vào một mảng số nguyên. 
// Hiển hiện giá trị lớn nhất trong mảng đó và giá trị trung bình của các phần tử trong mảng.
let arr3 = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } 
    arr3.push(input);
}

let max3 = arr3[0];
let sum3 = 0;
for (let i in arr3) {
    if (arr3[i] > max3) {
        max3 = arr3[i];
        
    }
    sum3 += arr3[i];
}

let everage3 = sum3 / 10;
console.log(`Số lớn nhất của mảng là ${max3}, giá trị trung bình của mảng là ${everage3}`);
// Bài 4: Viết chương trình khởi tạo nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.

let arr4 = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } 
    arr4.push(input);
}
console.log('Mảng ban đầu:',arr4);
let arr4Reverse = arr4.reverse();
console.log('Mảng đảo:',arr4Reverse);
// Bài 5: Viết chương trình đếm số nguyên âm trong một chuỗi.

let arr5 = [];
let n5 = Number(prompt("Nhập số lượng phần tử trong chuỗi"));
let count5 = 0;
// nhap chuoi
for (let i = 0; i < n5; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) {
         alert("Vui lòng nhập số nguyên!");
        i--; // nhập lại vị trí này
        continue;
    }
    arr5.push(input);
}
// Kiem tra so nguyen am
for (let i in arr5) {
    if(arr5[i] < 0) {
        count5++;
    }
}
console.log(`Chuỗi có tổng cộng ${count5} số nguyên âm`);


// Bài 6: Viết chương trình khởi tạo nhập vào 
// một mảng số nguyên gồm 10 phần tử. Nhập phần tử số nguyên và
//  tìm xem số đó có nằm trong mảng số nguyên không?
//  Nếu có thuộc mảng số nguyên thì in ra "Number X is in the array"
//  còn lại in ra "Number X is not in the array".
let arr6 = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } 
    arr6.push(input);
}
let number6 = Number(prompt("Nhap so nguyen can tim"));
if (arr6.includes(number6)) {
    console.log(`Number ${number6} is in the array`)
    
} else{
    console.log(`Number ${number6} is not in the array`)
}

// Bài 7: Viết chương trình khởi tạo nhập vào
//  một mảng số nguyên gồm 10 phần tử. Chương trình sắp xếp mảng 
// theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.

let arr7 = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } 
    arr7.push(input);
}
for (let i=0; i <10; i++) {
    for(let j=i+1; j< 10; j++) {
        if (arr7[i]< arr7[j]) {
            let trungGian = arr7[i];
            arr7[i] = arr7[j];
            arr7[j] = trungGian;
        }
    }
}
console.log(arr7);
// Bài 8: Viết chương trình khởi tạo nhập vào 
// 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
//  Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên. 
// Chương trình sẽ lưu các phần tử được nối từ 
// hai mảng b và a vào mảng c. Hiển thị mảng c.

let a = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } 
    a.push(input);
}
let b = [];

for (let i = 0; i < 10; i++) {
    let input = Number(prompt(`Nhập phần tử thứ ${i + 1}:`));
    
    // kiem tra dinh dang co dung la so
    if (isNaN(Number(input))) {
        alert("Vui lòng nhập số!");
        i--; // nhập lại vị trí này
        continue;
    } else if (!Number.isInteger(input)) // kiem tra co la so nguyen 
    {
         alert("Vui lòng nhập số nguyên!");
        i--;
        continue;
    } 
    b.push(input);
}
let c= a.concat(b);
console.log(c);
