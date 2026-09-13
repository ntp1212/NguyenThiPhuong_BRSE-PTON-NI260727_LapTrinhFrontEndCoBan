let main = document.querySelector('main');
console.log(main);
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    main.classList.toggle("color-black")
});