// Bài 1: Cho mảng
let products = [
  { id: 1, name: "Milk", count: 100 },
  { id: 2, name: "Orange", count: 100 },
  { id: 3, name: "Butter", count: 100 },
];

// Tao ham in ra ca products
let callOut = () => {
  products.forEach((el) => {
    console.log(`id: ${el.id}`);
    console.log(`name: ${el.name}`);
    console.log(`count: ${el.count}`);
  });
};

// Thêm đối tượng có các thuộc tính tương tự các đối tượng có trong mảng “products”
let inputId = Date.now();
let inputName = prompt("Nhap ten san pham");
let inputCount = prompt("Nhap count");
while (isNaN(Number(inputCount))) {
  alert("Vui long nhap so");
  inputCount = prompt("Nhap count");
}
let product = {
  id: inputId,
  name: inputName,
  count: inputCount,
};
products.push(product);
callOut();
// Xóa đối tượng có id là 2
let deleteId = 2;
let flag = -1;
for (let i in products) {
  if (products[i].id === deleteId) {
    flag = i;
  }
}
if (flag === -1) {
  console.log(`Khong tim thay san pham co id ${deleteId}`);
} else {
  products.splice(flag, 1);
}
callOut();
// Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0
products.forEach((el) => {
  if (el.id === 3) {
    el.count = 0;
    console.log(
      "Truy vấn đến đối tượng có id là 3, sau đó cập nhật lại giá trị count = 0",
    );

    console.log(`id: ${el.id}`);
    console.log(`name: ${el.name}`);
    console.log(`count: ${el.count}`);
  }
});
// Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không?
// Nếu Có in toàn bộ thông tin, nếu Không hiển thị thông báo “Không có dữ liệu bạn tìm kiếm”
let findValue = "Butter";
let check = -1;
console.log(
  "Cho từ khóa “Butter”. Kiểm tra từ khóa có trong mảng “products” hay không?",
);

for (let i = 0; i < products.length; i++) {
  if (products[i].name.includes(findValue)) {
    check = i;
  }
}
if (check === -1) {
  console.log(`Khong tim thay san pham co ten ${findValue}`);
} else {
  console.log(`id: ${products[check].id}`);
  console.log(`name: ${products[check].name}`);
  console.log(`count: ${products[check].count}`);
}

// Bài 2: Tạo dữ liệu để có thể in ra nội dung dưới đây:
let couses = [
  { id: 1, name: "HTML", complete: false },
  { id: 2, name: "CSS", complete: false },
  { id: 3, name: "Basic of javascript", complete: false },
  { id: 4, name: "Node package Manager", complete: false },
  { id: 5, name: "Git", complete: false },
];
let callCousesOut = () => {
  couses.forEach((el) => {
    console.log(`${el.id}. ${el.name}\nComplete: ${el.complete} `);
  });
};

callCousesOut();
let chechInput = (i,mes)=> {
    
    while (!Number.isInteger(i) || i==="") {
        console.log("Vui lòng nhập số nguyên");
        i = Number(
          prompt(
            `${mes}. (Nhập từ 0 đến ${couses.length-1}) `,
          ),
        );
      } 
      while (i < 0 || i > couses.length - 1) {
        console.log(
          `${mes} từ 0 đến ${couses.length-1}`,
        );
        i = Number(
          prompt(
            `${mes}. (Nhập từ 0 đến ${couses.length-1}) `,
          ),
        );
      } ;
      return i;
}
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
let check2 = true;
while (check2) {
  let choice = prompt(`Chào mừng đến với hệ thống quản lí khóa học. Bạn chọn:
C: Nhập vào khóa học mới và có trạng thái hoàn thành
R: In ra toàn bộ các khóa học
U: Update trạng thái khóa học.
D: Xóa khóa học
E: Thoát khỏi chương trình`).toLowerCase();

  switch (choice) {
    case "c":
      // C – Cho người dùng nhập vào khóa học mới và trạng thái hoàn thành.
      console.log("Chức năng nhập vào khóa học mới và trạng thái hoàn thành");

      let newId = Date.now();
      let newName = prompt(`Vui lòng nhập tên khóa học mới muốn thêm`);
      let newComplete = prompt(`Vui lòng nhập trạng thái khóa học`);
      let couse = {
        id: newId,
        name: newName,
        complete: newComplete,
      };
      //  Sau đó cập nhật lại mảng dữ liệu và in ra giống như trên
      couses.push(couse);
      console.log("Bạn đã thêm khóa học dưới vào danh sách.");
      console.log(`${couse.id}. ${couse.name}\nComplete: ${couse.complete} `);

      console.log("Danh sách khóa học sau khi thêm:");
      callCousesOut();
      break;
    case "r":
      // R – In ra toàn bộ các khóa học theo mẫu trên
      console.log("Chức năng in toàn bọ danh sách khóa học hiện tại.");

      console.log("Danh sách khóa học hiện tại:");

      callCousesOut();
      break;
    case "u":
        // Kiem tra danh sach co trong không
      if (couses.length === 0) {
    console.log("Danh sách khóa học đang trống.");
    break;
  }
      // U – Hỏi người dùng vị trí update khóa học.

      console.log("Chức năng update khóa học.");
      let updateIndex = Number(
        prompt(
          `Vui lòng nhập vị trí khóa học muốn update.(Nhập từ 0 đến ${couses.length - 1}) `,
        ),
      );
      let mes1 = 'Vui lòng nhập vị trí khóa học muốn update.';
 updateIndex = chechInput(updateIndex,mes1);
      

        console.log(`Bạn đang update khóa học:
                ${couses[updateIndex].id}. ${couses[updateIndex].name}
                Complete: ${couses[updateIndex].complete}`);

        let updateName = prompt("Vui long nhập tên khóa học muốn update");
        let updateComplete = prompt(
          "Vui long nhập trạng thái khóa học muốn update",
        );
        couses[updateIndex].name = updateName;
        couses[updateIndex].complete = updateComplete;
        callCousesOut();
      
      // Nếu tồn tại cho người dùng nhập vào tên muốn update và trạng thái mới.
      // Update xong in lại như trên
      break;
    case "d":
        // Kiem tra danh sach co trong không
        if (couses.length === 0) {
    console.log("Danh sách khóa học đang trống.");
    break;
  }
      // D – Hỏi người dùng vị trị của khóa học muốn xóa. Tiến hành xóa và in ra như trên
      console.log("Chức năng xóa khóa học.");
      let deleteIndex = Number(
        prompt(
          `Vui lòng nhập vị trí khóa học muốn xóa.(Nhập từ 0 đến ${couses.length - 1})`,
        ),
      );
      let mes2 ='Vui lòng nhập vị trí khóa học muốn xóa.'
      deleteIndex = chechInput(deleteIndex,mes2);
        console.log(`Bạn đang xóa khóa học:
                ${couses[deleteIndex].id}. ${couses[deleteIndex].name}
                Complete: ${couses[deleteIndex].complete}`);
        couses.splice(deleteIndex, 1);

        callCousesOut();
     
      break;
    case "e":
      // E – thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Academy”
      console.log("Chức năng thoát chương trình.");
      alert("Cảm ơn bạn đã đến với Rikkei Academy");
      check2 = false;
      break;
    default:
      alert("Bạn đã nhập sai. Vui lòng nhập lại");
  }
}
