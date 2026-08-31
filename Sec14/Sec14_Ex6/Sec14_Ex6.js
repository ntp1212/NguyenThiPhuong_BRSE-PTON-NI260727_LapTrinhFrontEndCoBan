const lists = [
    {
        id: "1",
        bookName: "Abk",
        author : "ji",
        year : 2020,
    }
]
let input = Number(prompt(`
    ===== QUẢN LÝ DANH SÁCH SÁCH =====
          1. Thêm sách mới
          2. Hiển thị danh sách sách
          3. Tìm kiếm sách theo tên
          4. Xóa sách theo ID
          5. Thoát chương trình

    Nhập lựa chọn của bạn:`));
function bookLists() {
    for (let i in lists) {
        console.log("Id: ", lists[index].id);
        console.log("Ten sach: ", lists[index].bookName);
        console.log("Tac gia: ", lists[index].author);
        console.log("Nam xuat ban: ", lists[index].year);
        console.log("------------------------")
    }
};
while(true) {
    if (input === 1) {
    //them sach moi
    let id = Number(prompt('Nhap id sach'));
    let bookName = prompt('Nhap ten sach');
    let author = prompt('Nhap ten tac gia');
    let year = Number(prompt('Nhap nam xuat ban'));
    let list = {
        id: id,
        bookName: bookName,
        author : author,
        year : year,
    }
    lists.push(list);
    // in danh sach moi
    bookLists();

} else if(input === 2) {
    //Hien thi danh sach
    bookLists();

} else if (input===3) {
    // Tim kiem sach theo ten
    let findName = prompt(`Nhap ten sach de tim kiem`);
    let index = lists.findIndex(function(el,i) {
        return el.name === findName;
    })
    if (index === -1) {
        console.log(`Sach co ten ${findName} khong ton tai trong danh sach`);
    } else {
        
        console.log("Id: ", lists[index].id);
        console.log("Ten sach: ", lists[index].bookName);
        console.log("Tac gia: ", lists[index].author);
        console.log("Nam xuat ban: ", lists[index].year);
        console.log("------------------------")
    
    }

    
} else if (input === 4) {
    // Xoa sach theo id
    let deleteBook = prompt(`Nhap ten sach de xoa`);
    let index = lists.findIndex(function(el,i) {
        return el.name === deleteBook;
    })
     if (index === -1) {
        console.log(`Sach co ten ${deleteBook} khong ton tai trong danh sach`);
    } else {
        lists.splice(index,1);
    
    }

} else if (input=== 5) {
    // Thoat chuong trinh
    break;
} else {
   input = Number(prompt(`Lỗi nhập. Bạn vui lòng nhập theo hướng dẫn.
    ===== QUẢN LÝ DANH SÁCH SÁCH =====
          1. Thêm sách mới
          2. Hiển thị danh sách sách
          3. Tìm kiếm sách theo tên
          4. Xóa sách theo ID
          5. Thoát chương trình

    Nhập lựa chọn của bạn:`));
    
}
}