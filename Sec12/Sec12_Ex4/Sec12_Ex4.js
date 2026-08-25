// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, hiển thị hộp thoại thông báo là đã hoàn thành.
for (let i = 0; i <100 ; i++) {
    console.log(i);
    if (i == 99) {
        alert("Da hoan thanh vong lap");
    }
}
// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập.
//  Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, yêu cầu người dùng tăng nhiệt độ.
let nhietDo = Number(prompt("Nhap nhiet do hien tai trong phong."));
if (nhietDo <20) {
    alert("Hay tang niet do len");
} else if (nhietDo >= 100) {
    alert("Hay giam nhiet do");
} else {
    alert("Xin cam on da hop tac")

}
// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.
let a = 0;
let b = 1;

for (let i = 1; i <= 20; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}
// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.

while (true) {

    if (a % 5 === 0 && a !== 0) {
        console.log(`Số đầu tiên chia hết cho 5 là: ${a}`);
        break;
    }

    let next = a + b;
    a = b;
    b = next;
}
// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.
let tong = 0;
for (let i = 1; i <= 20; i++) {

    tong = tong + a;

    let next = a + b;
    a = b;
    b = next;
}

console.log(`Tổng 20 số Fibonacci đầu tiên là: ${tong}`);
// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.
let count = 0;
let number = 1;
let sum = 0;

while (count < 30) {

    if (number % 7 === 0) {
        sum = sum + number;
        count++;
    }

    number++;
}

console.log(`Tổng 30 số chia hết cho 7 đầu tiên là: ${sum}`);
// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz",
//  5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”
for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}