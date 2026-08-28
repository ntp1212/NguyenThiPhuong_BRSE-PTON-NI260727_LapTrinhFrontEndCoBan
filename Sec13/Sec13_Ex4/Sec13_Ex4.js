let input = prompt("Nhap mot day so bat ki");
let arr = input.split(" ").map(Number);
let max = arr[0];
for (let i=0; i<arr.length; i++) {
   
    if (max < arr[i]) {
        max = arr[i]
    }
}
alert(`So lon nhat trong day so la: ${max}`);
