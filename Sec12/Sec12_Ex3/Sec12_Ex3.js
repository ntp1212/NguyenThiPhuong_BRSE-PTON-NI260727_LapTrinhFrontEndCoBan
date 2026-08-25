// ứng dụng cho phép hiển thị 20 số nguyên tố đầu tiên.
let count = 0;
let number = 2;
while (count <= 20) {
    let isPrime = true;
    for (let i= 2; i< number ; i++) {
        if(number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(number);
        count++;
    }
    number++;
}