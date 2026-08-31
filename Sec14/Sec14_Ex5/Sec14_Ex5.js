const students = [
     {
        id : 1,
    name : "Nguyen Van A",
    age : 20,
    },
      {
        id : 2,
    name : "Nguyen Van B",
    age : 20,
    },
]
   function studentsList() {
    console.log(" Danh sch sinh vien")
    for (let index in students) {
        console.log("Name: ", students[index].name);
        console.log("Age: ", students[index].age);
        console.log("Ma sinh vien: ", students[index].id);
        console.log("------------------------")

    }
   }
// Nguoi dung nha 1/2/3 de thuc hien cac thao tac
let input = Number(prompt("Nhap 1/2/3 de them, hien thi, xoa danh sach sinh vien"));
if (input == 1) {
    // them sinh vien moi
    let name = prompt(" Nhap ten sinh vien muon them vao");
    let age = prompt(" Nhap tuoi sinh vien muon them vao");
    let id = prompt(" Nhap ma sinh vien muon them vao");
    // them vao danh sach
    let student = {
        name: name,
        age: age,
        id: id,
    }
    students.push(student);
    
} else if (input == 2) {
    // Hien thi danh sach sinh vien
   studentsList();
} else if (input == 3) {
    // Xoa sinh vien theo id
    let idDelete = Number(prompt(" Nhap ma sinh vien muon xoa"));
    let index = students.findIndex (function(el, i) {
        return el.id === idDelete;
    });
    if (index === -1) {
        console.log(`Khong ton tai sinh vien co id: ${idDelete}`);
    }
    else {
        students.splice(index, 1);
    }
  studentsList();
} else {
    // input loi
    console.log("Loi nhap. Nhap 1/2/3 de them, hien thi, xoa danh sach sinh vien")
}