const lists = [
    {
        id: 1,
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
        console.log("Id: ", lists[i].id);
        console.log("Ten sach: ", lists[i].bookName);
        console.log("Tac gia: ", lists[i].author);
        console.log("Nam xuat ban: ", lists[i].year);
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
    console.log(`Đây là danh sách sau khi thêm`)
    bookLists();

} else if(input === 2) {
    //Hien thi danh sach
        console.log(`Đây là danh sách hiện tại`)

    bookLists();

} else if (input===3) {
    // Tim kiem sach theo ten
    let findName = prompt(`Nhap ten sach de tim kiem`);
    let index = lists.findIndex(function(el,i) {
        return el.bookName === findName;
    })
    if (index === -1) {
        console.log(`Sach co ten ${findName} khong ton tai trong danh sach`);
    } else {
    console.log(`Đây là thông tin sách bạn tìm`)
                console.log("Id: ", lists[index].id);
        console.log("Ten sach: ", lists[index].bookName);
        console.log("Tac gia: ", lists[index].author);
        console.log("Nam xuat ban: ", lists[index].year);
        console.log("------------------------")
    
    }

    
} else if (input === 4) {
    // Xoa sach theo id
    let deleteBook = Number(prompt(`Nhap id sach de xoa`));
    let index = lists.findIndex(function(el,i) {
        return el.id === deleteBook;
    })
     if (index === -1) {
        console.log(`Sach co id ${deleteBook} khong ton tai trong danh sach`);
    } else {
        lists.splice(index,1);
    
    }
    console.log(`Đã xóa thành công`)
    console.log("Id: ", lists[index].id);
    console.log("Ten sach: ", lists[index].bookName);
    console.log("Tac gia: ", lists[index].author);
    console.log("Nam xuat ban: ", lists[index].year);
    console.log("------------------------")
    console.log(`Đây là danh sách hiện tại`)
    bookLists();


} else if (input=== 5) {
    // Thoat chuong trinh
    console.log(`Đã thoát chương trình. Cảm ơn bạn đã sử dụng app`)
  
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
 // Cho người dùng nhập lại lựa chọn
    input = Number(prompt(`
===== QUẢN LÝ DANH SÁCH SÁCH =====

1. Thêm sách mới
2. Hiển thị danh sách sách
3. Tìm kiếm sách theo tên
4. Xóa sách theo ID
5. Thoát chương trình

Nhập lựa chọn của bạn:
`));
}
