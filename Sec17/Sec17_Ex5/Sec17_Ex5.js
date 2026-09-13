let form = document.getElementById("form");
console.log(form);;
// Tài khoản và mật khẩu cố định
let correctUsername = "huanrose@gmail.com";
let correctPassword = "123456";

let submitEnter = document.getElementById('btn-submit');
console.log(submitEnter);
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('da dung');
   let username = form.email.value;
  let password = form.password.value;
  
console.log(username);
console.log(password);
    // Kiểm tra thông tin đăng nhập
  if (username === correctUsername && password === correctPassword) {
    alert("Đăng nhập thành công");
  } else {
    alert("Đăng nhập thất bại");
  }
});
