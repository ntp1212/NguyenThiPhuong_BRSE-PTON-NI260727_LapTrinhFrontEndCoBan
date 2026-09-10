let arr = [];

function minArr(arr) {
    if (!Array.isArray(arr)) {
        alert( `Vui long nhap mot mang`)
        return;
    }
    else if(arr.length === 0) {
        alert(`Vui long nhap cac phan tu trong mang`)
        return;
    } else {
    let min = arr[0];

   for (let i in arr) {
    if (min > arr[i]) {
        min = arr[i];
    }
   }
   return min;
    }
}
const arr1 = [3,5,1,8,-3,7,8];
const arr2 = [7,12,6,9,20,56,89];
const arr3 = [];
const arr4 = [0,0,0,0,0,0];
let result1 = minArr(arr1);
let result2= minArr(arr2);
let result3 = minArr(arr3);
let result4 = minArr(arr4);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
