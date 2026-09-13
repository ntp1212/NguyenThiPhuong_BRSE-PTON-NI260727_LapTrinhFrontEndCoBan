let openBtn = document.querySelector('.btn1');
console.log(openBtn);

let closeBtn = document.querySelector('.btn2');
console.log(closeBtn);

let parentBox = document.querySelector('.parent-box');
console.log(parentBox);
openBtn.addEventListener('click', function() {
    parentBox.classList.add('active');

})
closeBtn.addEventListener('click', function() {
    parentBox.classList.remove('active');
    
})