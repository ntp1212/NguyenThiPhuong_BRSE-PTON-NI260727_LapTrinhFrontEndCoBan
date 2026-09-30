// lấy các biến
let inputEmail = document.getElementById("email");
console.log(inputEmail);
let inputUsername = document.getElementById("username");
console.log(inputUsername);
let inputPassword = document.getElementById("password");
console.log(inputPassword);
let openEye = document.getElementById("open-eye");
console.log(openEye);
let closeEye = document.getElementById("close-eye");
console.log(closeEye);
let signupValidation = document.getElementById("sign-up-validation");
console.log(signupValidation);
let emailCannotBlank = document.querySelector(".email-cannot-blank");
console.log(emailCannotBlank);
let emailExist = document.querySelector(".email-exist");
console.log(emailExist);
let emailError = document.querySelector(".email-error");
console.log(emailError);
let usernameCannotBlank = document.querySelector(".username-cannot-blank");
console.log(usernameCannotBlank);
let passwordCannotBlank = document.querySelector(".password-cannot-blank");
console.log(passwordCannotBlank);
let passwordMinlengthError = document.querySelector(
  ".password-min-length-error",
);
console.log(passwordMinlengthError);
let passwordNumberRequiredError = document.querySelector(
  ".password-number-required-error",
);
console.log(passwordNumberRequiredError);
let passwordUpercaseLowercaseError = document.querySelector(
  ".password-uppercase-lowercase-error",
);
console.log(passwordUpercaseLowercaseError);
let signupError = document.getElementById("sign-up-error");
console.log(signupError);
let signupToast = document.getElementById("sign-up-toast");
console.log(signupToast);
let msg = document.getElementById("msg");
console.log(msg);

// hàm tắt mes eror
let hideErrorMes = () => {
  // email
    msg.classList.remove("show");
    signupError.classList.add("hidden");
    emailError.classList.add("hidden");
    signupValidation.classList.add("hidden");
    emailCannotBlank.classList.add("hidden");

  // user
  msg.classList.remove("show");
    signupValidation.classList.add("hidden");
    usernameCannotBlank.classList.add("hidden");

  // mật khẩu 
  passwordMinlengthError.classList.add("hidden");
  passwordNumberRequiredError.classList.add("hidden");
  passwordUpercaseLowercaseError.classList.add("hidden");
  msg.classList.remove("show");
  signupValidation.classList.add("hidden");
  passwordCannotBlank.classList.add("hidden");
};
//----------- Kiểm tra email ----------------
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let checkEmail = () => {
  if (inputEmail.value.trim() === "") {
    msg.classList.add("show");
    signupValidation.classList.remove("hidden");
    emailCannotBlank.classList.remove("hidden");
    return false;
  } else if (!regexEmail.test(inputEmail.value)) {
    // trường hợp email bị bỏ trống sau khi blur vào và nhấc ra
    // console.log('hàm đã chạy');
    msg.classList.add("show");
    signupError.classList.remove("hidden");
    emailError.classList.remove("hidden");
    return false;
  } else {
    // trường hợp đúng định dạng
    // console.log('hàm');
    hideErrorMes();
    return true;
  }
};
inputEmail.addEventListener("blur", () => {
  checkEmail();
});

// --------------------Kiểm tra user name không trống ------------

let checkUsernameBlank = () => {
  if (inputUsername.value === "") {
    msg.classList.add("show");
    signupValidation.classList.remove("hidden");
    usernameCannotBlank.classList.remove("hidden");
    return false;
  } else {
    hideErrorMes();
    return true;
  }
};
inputUsername.addEventListener("blur", () => {
  console.log("hoatj ddongj");

  checkUsernameBlank();
});
//--------------------- Ẩn hiện mật khẩu --------------------------
openEye.addEventListener("click", () => {
  inputPassword.type = "text";
  openEye.style.display = "none";
  closeEye.style.display = "block";
});
closeEye.addEventListener("click", () => {
  inputPassword.type = "password";
  closeEye.style.display = "none";
  openEye.style.display = "block";
});

//--------------------- kiểm tra mật khẩu ------------------------
// Ít nhất 8 ký tự
let regexPassLength = /^.{8,}$/;
// Có ít nhất 1 chữ số
let regexPassNumber = /(?=.*\d)/;
// Có ít nhất 1 chữ hoa, 1 chữ thường
let regexPassUpperLower = /(?=.*[A-Z])(?=.*[a-z])/;
// Có ít nhất 1 ký tự đặc biệt
let regexSpecial = /(?=.*[^A-Za-z0-9\s])/;
// Không có khoảng trắng
let regexSpace = /^\S+$/;

let checkPass = () => {
   if (inputPassword.value.trim() === "") {
    msg.classList.add("show");
    signupValidation.classList.remove("hidden");
    passwordCannotBlank.classList.remove("hidden");
    return false;
  } else if (!regexPassLength.test(inputPassword.value.trim())
  ) {
    // mật khẩu bị bỏ trống hoặc ít hon 8 kí tự sau khi blur vào và nhấc ra
    msg.classList.add("show");
    signupError.classList.remove("hidden");
    passwordMinlengthError.classList.remove("hidden");
    return false;
  } else if (!regexPassNumber.test(inputPassword.value)) {
    // mật khẩu không có số
    hidePassErrorMes();
    msg.classList.add("show");
    signupError.classList.remove("hidden");
    passwordNumberRequiredError.classList.remove("hidden");
    return false;
  } else if (!regexPassUpperLower.test(inputPassword.value)) {
    // Mật khẩu phải có chữ hoa và chữ thường
    hidePassErrorMes();
    msg.classList.add("show");
    signupError.classList.remove("hidden");
    passwordUpercaseLowercaseError.classList.remove("hidden");
    return false;
  } else {
    hideErrorMes();
    return true;
  }
};
inputPassword.addEventListener("blur", () => {
  console.log("da hoat dong");

  checkPass();
});

let form = document.getElementById("sign-up-form");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  // Lấy dữ liệu tài khoản đã lưu
  let userList = JSON.parse(localStorage.getItem("userList")) || [];
  // Gọi các hàm và lấy kết quả kiểm tra
  let isEmailValid = checkEmail();
  let isUsernameValid = checkUsernameBlank();
  let isPasswordValid = checkPass();

  // Nếu có ít nhất một dữ liệu sai thì dừng
  if (!isEmailValid || !isUsernameValid || !isPasswordValid) {
    return;
  }

  // Kiểm tra email đã tồn tại chưa
  let isExist = userList.some((user) => {
    return user.email === inputEmail.value.trim();
  });

  if (isExist) {
    console.log("Taif khoanr ton tai");

    msg.classList.add("show");
    signupValidation.classList.add("hidden");
    signupError.classList.remove("hidden");

    emailExist.classList.remove("hidden");
    return;
  } else {
    // Tạo tài khoản mới
    let newUser = {
      email: inputEmail.value.trim(),
      username: inputUsername.value.trim(),
      password: inputPassword.value,
    };

    userList.push(newUser);
    // Lưu vào Local Storage
    localStorage.setItem("userList", JSON.stringify(userList));
    console.log("dk thanh cong");
    // Hiện thông báo đăng ký thành công
    msg.classList.add("show");
    signupValidation.classList.add("hidden");
    signupError.classList.add("hidden");
    signupToast.classList.remove("hidden");

    // Xóa dữ liệu form
    form.reset();
    hideErrorMes();
    // Chuyển sang trang đăng nhập sau 0.2 giây
    setTimeout(() => {
    window.location.href = './sign-in.html';
}, 1000);
  }
  
});
let cancel = document.querySelector('.cancel');
console.log(cancel);
cancel.addEventListener('click', () => {
  hideErrorMes();
    
})
