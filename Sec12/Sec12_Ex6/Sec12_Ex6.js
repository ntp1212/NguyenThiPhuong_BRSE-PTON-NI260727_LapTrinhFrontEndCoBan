let choice = Number(prompt("Nhap lua chon cua ban"));

switch (choice) {
    case 1:
        let name = prompt("Nhap ten nguoi dung");
        break;

    case 2:
        let age = prompt("Nhap tuoi nguoi dung");
        break;
        
    case 3:
        console.log(`Nguoi dung ${name} hien dang ${age} tuoi`);
        break;
        
    case 4:
        let a = Number(prompt("Nhap so muon in bang cuu chuong"));
        for (let i = 1; i <= 10; i++) {
            a *= i;
            console(a);
        }
        break;
        
    case 5:
        let kiemTra = Number(prompt("Nhap 1 so nguyen bat ki"));
        if (kiemTra % 2 == 0) {
            console.log(`So ${kiemTra} la so chan`)
        } else {
            console.log(`So ${kiemTra} la so le`);
        }
        break;
        
    case 6:
        let n = Number(prompt("Nhap so nguyen tinh tong"));
        let tong = 0;
        for (let i = 0; i < n; i++) {
            tong += i;
        }
        break;
        
        console.log(`Tong day so tu 1 den ${n} la: ${tong}`);
    case 7:
        let day = Number(prompt("Nhap so nguyen in day so"));
        for (let i = 0; i < day; i++) {
            console.log(i);
            i++;
        }
        break;
        
    case 8:
        let number = Number(prompt("Nhập một số nguyên:"));

        let isPrime = true;

        if (number < 2 || !Number.isInteger(number)) {
            isPrime = false;
        } else {
            for (let i = 2; i < number; i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(`${number} là số nguyên tố`);
        } else {
            console.log(`${number} không phải là số nguyên tố`);
        }
        break;
        
    case 9:
        let text = prompt("Nhập một chuỗi:");

        let reverse = "";

        for (let i = text.length - 1; i >= 0; i--) {
            reverse += text[i];
        }

        console.log(`Chuỗi đảo ngược: ${reverse}`);
        break;
        
    case 10:
        break;

}