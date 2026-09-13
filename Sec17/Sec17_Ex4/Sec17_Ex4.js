let yellow = document.querySelector('.color-yellow');
let green = document.querySelector('.color-green');
let grey = document.querySelector('.color-grey');
let main = document.querySelector('main');

yellow.addEventListener('mouseover',function() {
    main.classList.add('color-yellow');
})
yellow.addEventListener('mouseout',function() {
    main.classList.remove('color-yellow');
})
green.addEventListener('mouseover',function() {
    main.classList.add('color-green');
})
green.addEventListener('mouseout',function() {
    main.classList.remove('color-green');
})
grey.addEventListener('mouseover',function() {
    main.classList.add('color-grey');
})
grey.addEventListener('mouseout',function() {
    main.classList.remove('color-grey');
})