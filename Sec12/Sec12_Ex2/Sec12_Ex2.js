// Bài 1: Chuyển từ độ C sang độ F.
let doC = Number(prompt("Nhập nhiệt độ C:"));
let doF = (doC * 9) / 5 + 32;
console.log(`${doC} = ${doF}`);

// Bài 2: Chuyển từ mét sang feet
let meter = Number(prompt("Nhập số mét:"));
let feet = meter * 3.28084;
console.log(`${meter} = ${feet}`);
// Bài 3: Tính diện tích hình vuông khi biết cạnh a.
let canh = Number(prompt("Nhập cạnh a:"));
let dienTichHV = canh * canh;
console.log(`Diện tích hình vuông có cạnh bằng ${canh} là: ${dienTichHV}`);
// Bài 4: Tính diện tích hình chữ nhật khi biết 02 cạnh a, b.
let chieuDai = Number(prompt("Nhập chiều dài a:"));
let chieuRong = Number(prompt("Nhập chiều rộng b:"));

let dienTichHCN = chieuDai * chieuRong;

console.log(`Diện tích hình chữ nhật là: ${dienTichHCN}`);
// Bài 5: Tính diện tích tam giác vuông khi biết 02 cạnh kề a, b.
let canhKea = Number(prompt("Nhập cạnh kề a:"));
let canhKeb = Number(prompt("Nhập cạnh kề b:"));

let dienTichTG = (canhKea * canhKeb) / 2;

console.log(`Diện tích tam giác vuông là: ${dienTichTG}`);
// Bài 6: Giải phương trình bậc 1.
let a1 = Number(prompt("Nhập a:"));
let b1 = Number(prompt("Nhập b:"));
if (a1 !== 0) {
  let x = -b1 / a1;
  console.log(`Phương trình có nghiệm x = ${x}`);
} else if (b1 !== 0) {
  console.log("Phương trình vô nghiệm");
} else {
  console.log("Phương trình có vô số nghiệm");
}
// Bài 7: Giải phương trình bậc 2.
let a2 = Number(prompt("Nhập a:"));
let b2 = Number(prompt("Nhập b:"));
let c2 = Number(prompt("Nhập c:"));

if (a2 === 0) {
  // Trở thành phương trình bậc 1
  if (b2 !== 0) {
    let x = -c2 / b2;
    console.log(`Phương trình có nghiệm x = ${x}`);
  } else if (c2 !== 0) {
    console.log("Phương trình vô nghiệm");
  } else {
    console.log("Phương trình có vô số nghiệm");
  }
} else {
  let delta = b2 * b2 - 4 * a2 * c2;

  if (delta < 0) {
    console.log("Phương trình vô nghiệm");
  } else if (delta === 0) {
    let x = -b2 / (2 * a2);
    console.log(`Phương trình có nghiệm kép x = ${x}`);
  } else {
    let x1 = (-b2 + Math.sqrt(delta)) / (2 * a2);
    let x2 = (-b2 - Math.sqrt(delta)) / (2 * a2);

    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
  }
}
// Bài 8: Kiểm tra xem một số nhập vào có phải là tuổi của một người không.
// Một số nguyên là tuổi của một người khi nhỏ 120 và lớn hơn 0.
let age = Number(prompt("Nhập tuổi:"));

if (Number.isInteger(age) && age > 0 && age < 120) {
  console.log(`${age} là tuổi hợp lệ`);
} else {
  console.log(`${age} không phải là tuổi hợp lệ`);
}

