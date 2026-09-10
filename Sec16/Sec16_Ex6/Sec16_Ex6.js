const arr1 =[1,2,3,4,5,6,];
const arr2= [10,20,30,40,50];
const arr3= [1,3,5,7,9];
function sumArr(acc,cur) {
    acc+=cur;
    return acc;
}
let sum1 = arr1.reduce(sumArr,0);
let sum2 = arr2.reduce(sumArr,0);
let sum3 = arr3.reduce(sumArr,0);
console.log(sum1);
console.log(sum2);
console.log(sum3);
