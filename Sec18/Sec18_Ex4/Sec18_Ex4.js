let keyBtn = document.querySelectorAll('.key-btn');
let deleteBtn = document.getElementById('delete-button');
let display = document.getElementById('display');
console.log(keyBtn);
console.log(deleteBtn);
console.log(display);
// lang nghe nhan phim va dua chu len o input

keyBtn.forEach((el) => {
    el.addEventListener('click', (ev)=> {
        // lang nghe
    console.log(ev.target.innerText);
    //dua len o input
    if(ev.target.innerText === 'Xóa') {
        display.value +=''
    } else{
        display.value += ev.target.innerText;
    }
    
})
})
// Xoa
deleteBtn.addEventListener('click', (ev)=> {
    console.log(deleteBtn.innerText)
    display.value = display.value.slice(0,-1);
})
