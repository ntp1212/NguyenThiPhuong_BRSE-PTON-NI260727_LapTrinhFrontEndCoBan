// sử dụng luôn trang đăng kí và dữ liệu của ex1 sec19

let form = document.getElementById("loginForm");
console.log(form);
let email = document.getElementById("email");
console.log(email);
let password = document.getElementById("password");
console.log(password);
let submitBtn = document.getElementById("btn-submit");
console.log(submitBtn);
let succesOverlay = document.getElementById("successModal");
console.log(succesOverlay);
let customOverlay = document.getElementById("customModal");
console.log(customOverlay);
let closeBtn = document.querySelectorAll(".modal-box .modal-btn");
console.log(closeBtn);

// hàm dùng chung

// kiểm tra thông tin ô input

let checkInput = (el) => {
  if (el.value.trim() === "") {
    el.closest(".form-group").querySelector(".mes").innerText =
      "Vui lòng không bỏ trống";
    return false;
  } else {
    el.closest(".form-group").querySelector(".mes").innerText = "";
    return true;
  }
};

// Kiểm tra sự hợp lệ thông tin người dùng nhập vào: Email không được bỏ trống, Email & Password trùng khớp.
// // Kiểm tra sự hợp lệ thông tin người dùng nhập vào: Email không được bỏ trống
[email, password].forEach((el) => {
  el.addEventListener("blur", (ev) => {
    checkInput(el);
  });
});

// Kiểm tra sự hợp lệ thông tin người dùng nhập vào: mail & Password trùng khớp.
// console.log(accounts);
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let accounts = JSON.parse(localStorage.getItem("accounts"));
  // kiểm tra email và mật khẩu có trống không
  checkInput(email);
  checkInput(password);
  // kiem tra email, mật khẩu trống không
  if (!checkInput(email) || !checkInput(password)) {
    return;
  }
  // kiểm tra email, mật khẩu trùng khớp
  if (checkInput(email) && checkInput(password)) {
    let account = accounts.find((el) => {
      return (
        el.email === email.value.trim() && el.password === password.value.trim()
      );
    });
    account
      ? succesOverlay.classList.add("active")
      : customOverlay.classList.add("active");
  }
});
// đóng thông báo và chuyển đến trang chủ hoặc trang đăng nhập lại
let rememberTime = null;
closeBtn.forEach((el) => {
  el.addEventListener("click", () => {
    let overlay = el.closest(".modal-overlay");
    el.closest(".modal-overlay").classList.remove("active");
    // Chuyển trang chủ sau khi đăng nhập thành công.
    if (overlay === succesOverlay) {
        //tạo biến lưu trữ thười gian đăng nhập
      rememberTime = Date.now();
      console.log(rememberTime);
      window.location.href = "https://portal.rikkei.edu.vn/";
      email.value = "";
      password.value = "";
    }
  });
});
// Có nút mắt xem để xem lại mật khẩu dưới dạng Text.
let iconOpen = document.querySelector(".icon-open");
console.log(iconOpen);
let iconClose = document.querySelector(".icon-close");
console.log(iconClose);
iconOpen.addEventListener("click", (ev) => {
  iconOpen.classList.add("hidden");
  iconClose.classList.remove("hidden");
  password.type = "text";
});
iconClose.addEventListener("click", (ev) => {
  iconClose.classList.add("hidden");
  iconOpen.classList.remove("hidden");
  password.type = "password";
});
// Có lựa chọn ghi nhớ tài khoản trong 24 giờ.

let rememberLogin = document.getElementById("remember");
console.log(rememberLogin);
