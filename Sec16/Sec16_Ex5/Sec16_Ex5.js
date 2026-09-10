let input = prompt('Nhap chuoi kiem tra');
function isPalindrome(str) {
    let strReverse = '';
    for (let i=str.length - 1; i>=0; i--){
        strReverse += str[i]
    }
    if (strReverse === str) {
        return true;
    } else{
        return false;
    }
}
let result = isPalindrome(input);
if (result) {
    alert(`Day la mot chuoi doi xung`)
} else {
    alert(`Day la mot chuoi khong doi xung`)

}