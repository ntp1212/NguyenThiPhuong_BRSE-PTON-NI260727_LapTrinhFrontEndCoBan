// lay form
let form = document.getElementById('form');
console.log(form);
// lay cua input email
let email = document.getElementById('email');
console.log(email);
// lay input password
let password = document.getElementById('password');
console.log(password);
// lay confirm password
let confirmPass = document.getElementById('confirm-password');
console.log(confirmPass);
// lay mess 
let messEmail = document.getElementById('mess-email');
console.log(messEmail);
let messPass = document.getElementById('mess-pass');
console.log(messPass);
let messConfirm = document.getElementById('mess-confirm');
console.log(messConfirm);

// lay nut submit
let submitBtn = document.getElementById('submit-btn')
console.log(submitBtn);

// dinh dang email
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// dinh dang pass 
let passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// kiem tra du lieu
let checkValidation = (el,mesTag,regex, mesText) => {
    if(el.value === '') {
        mesTag.innerText = "Vui lòng không bỏ trống";
    } else if (!regex.test(el.value)) {
        mesTag.innerText = mesText;

    } else{
        mesTag.innerText = '';
    }
};
let messTextEmail = "Vui lòng nhập đúng định dạng"
// kiem tra du lieu email
email.addEventListener('blur',()=> {
    checkValidation(email,messEmail,emailRegex,messTextEmail)
});
let messTextPass = "Mật khẩu phải có trên 8 kí tự bao gồm cả kí tự đặc biệt, chữ hoa, chữ thường và số"
// kiem tra pass
password.addEventListener('blur',()=> {
    checkValidation(password,messPass,passRegex,messTextPass)
});

// kiem tra confirm
confirmPass.addEventListener('blur',()=> {
   
    if(confirmPass.value.trim() !== password.value.trim()) {
         messConfirm.innerText = 'Mật khẩu kiểm tra không trùng khớp'
    }
});

// ngan chan su kien mac dinh

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

// luu lai localstrorage
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];
console.log(accounts);

// lang nghe submit va luu
submitBtn.addEventListener('click', () =>{ 
     // Kiem tra email

  // let isEmailValid = checkValidation(
  //   email,
  //   messEmail,
  //   emailRegex,
  //   messTextEmail
  // );

  // // Kiem tra password

  // let isPassValid = checkValidation(
  //   password,
  //   messPass,
  //   passRegex,
  //   messTextPass
  // );
  //   // Kiem tra confirm password

  // let isConfirmValid = true;

  // if (confirmPass.value.trim() === "") {
  //   messConfirm.innerText = "Vui lòng không bỏ trống";
  //   isConfirmValid = false;
  // } else if (confirmPass.value !== password.value) {
  //   messConfirm.innerText =
  //     "Mật khẩu xác nhận không trùng khớp";
  //   isConfirmValid = false;
  // } else {
  //   messConfirm.innerText = "";
  // }
  //   if (!isEmailValid || !isPassValid || !isConfirmValid) {
  //   return;
  // }

  // Kiem tra email da ton tai
console.log('submit');

  let isExist = accounts.some(function (account) {
    return account.email === email.value.trim();
  });

  if (isExist) {
    messEmail.innerText = "Email này đã được đăng ký";
    return;
  }
// tao tai khoan moi
    let newAccount = {
    email: email.value.trim(),
    password:  password.value.trim(),
};
accounts.push(newAccount);
localStorage.accounts = JSON.stringify(accounts);
alert('Đăng kí thành công');
})