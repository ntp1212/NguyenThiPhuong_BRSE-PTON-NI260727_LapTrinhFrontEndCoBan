let arr = [1,2,5,8,9,15,99,55];
let number = prompt("Nhap mot so bat ki");
let found = false;
for (let i=0; i<arr.length; i++) {
    if (number == arr[i]) {
        found = true;
        break;
    }
    
    
}
if(found == true) {
        alert("Bingo");
    } else {
        alert("Chúc bạn may mắn lần sau")
    }