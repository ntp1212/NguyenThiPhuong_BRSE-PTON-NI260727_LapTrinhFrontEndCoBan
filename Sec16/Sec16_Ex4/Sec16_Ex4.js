
function isEven(number) {
    if(number%2 === 0) {
        return true;
    } else{
        return false;
    }
}
let input = Number(prompt('Nhap mot so bat ki'));
let result = isEven(input);
console.log(result);
