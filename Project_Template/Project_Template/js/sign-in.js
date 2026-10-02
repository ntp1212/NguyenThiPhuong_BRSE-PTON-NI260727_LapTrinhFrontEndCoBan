let signinForm = document.getElementById('sign-in-form');
console.log(signinForm);
let inputEmail = document.getElementById('email');
console.log(inputEmail);
let inputPassword =document.getElementById('password');
console.log(inputPassword);
let saveLoggin = document.querySelector('.save-loggin');
console.log(saveLoggin);
let msg =document.getElementById('msg');
console.log(msg);
let loginValidation =document.getElementById('login-validation');
console.log(loginValidation);
let passwordCannotBlank =document.querySelector('.password-cannot-blank');
console.log(passwordCannotBlank);
let emailCannotBlank =document.querySelector('.email-cannot-blank');
console.log(emailCannotBlank);
let loginToast = document.getElementById('login-toast');
console.log(loginToast);
let loginError = document.getElementById('login-error');
console.log(loginError);
let closeBtn = document.querySelector('.close-btn');
console.log(closeBtn);

//hàm đóng tất cả các thẻ mes eror
let closeMes = () => {
    msg.classList.remove('show');
    loginValidation.classList.add('hidden');
    passwordCannotBlank.classList.add('hidden');
    emailCannotBlank.classList.add('hidden');
    loginToast.classList.add('hidden');
    loginError.classList.add('hidden');
}
closeMes();

// ------------- kiểm tra email không trống --------------
let checkEmail = () => {
    if(inputEmail.value.trim() === '') {       
        msg.classList.add('show');
        loginValidation.classList.remove('hidden');
        emailCannotBlank.classList.remove('hidden');
        return false;
    } else {
        closeMes();
        return true;
    }
}
inputEmail.addEventListener('blur', () => {
    checkEmail();
})
// ------------- kiểm tra mật khẩu không trống ---------------
let checkPass = () => {
    if (inputPassword.value.trim() === '') {
        msg.classList.add('show');
        loginValidation.classList.remove('hidden');
        passwordCannotBlank.classList.remove('hidden');
        return false;
    } else{
        closeMes();
        return true;
    }
}
inputPassword.addEventListener('blur', () => {
    checkPass();
})
//  Lấy dữ liệu userList từ localStrorage
let userList = JSON.parse(localStorage.getItem('userList')) || [];;

// kiểm tra email. mật khẩu có tồn tại không
let flag = false;
isValid = () => {
    
    userList.forEach(el => {
        if (el.email === inputEmail.value 
            && el.password === inputPassword.value) {
            flag = true;
        } 
    });
    return flag;
}

// kiểm tra lại và đăng nhập
signinForm.addEventListener('submit', (ev)=> {
    ev.preventDefault();
    // kiểm tra lại
    let emailValid = checkEmail();
    let passValid = checkPass();
    if(!emailValid || !passValid) {
        return;
    }
    if (isValid()) {
         // tài khoản chính xác
        msg.classList.add('show');
        loginToast.classList.remove('hidden');
        flag = false;
        setTimeout(()=> {
            // chuyển hướng trang sang dashboard
        window.location.href = '../pages/dashboard.html'
        },1000)
        closeMes();
        inputPassword.value = '';
    } else {
        // Email hoặc mật khẩu không tồn tại.
        msg.classList.add('show');
        loginError.classList.remove('hidden');
        }
    }
)


// ------------------ Nút đóng thông báo ---------------
closeBtn.addEventListener('click',() => {
    closeMes();
})
