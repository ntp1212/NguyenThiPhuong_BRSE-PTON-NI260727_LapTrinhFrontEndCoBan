let table = document.getElementById('user-table-container');
console.log(table);
let tbody = document.getElementById('table-body');
console.log(tbody);
let inputSearch = document.getElementById('search-box');
console.log(inputSearch);




// lấy dữ liệu từ localStorage
let userList = JSON.parse(localStorage.getItem('userList'));
// hàm cập nhật dữ liệu lên localStorage
let updateLocal = () => {
    localStorage.setItem('userList', JSON.stringify(userList));
};
// console.log(userList);
// hàm hiển thị phần giao diện bảng từ dữ liệu users trong Local Storage
let renderUserList = () => {
    tbody.innerHTML = '';
    userList.forEach(el => {
    let tr = document.createElement('tr')
    tr.className = 'user-row';
    tr.innerHTML = `
    <td>${el.usercode}</td>
            <td class="user-name">${el.username}</td>
            <td>${el.email}</td>
            <td>${el.role}</td>
            <td>${el.birthday}</td>
            <td>${el.status}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-edit" >Sửa</button>
                <button class="btn-delete" data-email = "${el.email}">Xóa</button>
              </div>
            </td>`
            tbody.appendChild(tr);
});
}

//Hiển thị phần giao diện bảng từ dữ liệu users trong Local Storage
renderUserList();

// Tính năng xoá từng hàng, từng bản ghi trong bảng dữ liệu users
tbody.addEventListener('click', (ev) => {
    let deleteBtn = ev.target.closest('.btn-delete');
    console.log(deleteBtn);
    
    if (!deleteBtn) {
        return ;
    } 
    let deleteEmail = deleteBtn.dataset.email;  
    let deleteIndex = userList.findIndex((user)=> {
         return user.email === deleteEmail;
    })
        userList.splice(deleteIndex,1);
        updateLocal();
        renderUserList();
    }
    
)

// Tính năng tìm kiếm user theo name,
// hiển thị ra đúng bản ghi dữ liệu khi tìm thấy user
// console.log(userRow);
let search = () => {
    let userRow = document.querySelectorAll('.user-row');
    let inputSearchText = document.getElementById("search-box").value.trim().toLowerCase();
    userRow.forEach((el)=> {
        
        elName = el.children[1].innerText.trim().toLowerCase();
        if(elName.includes(inputSearchText)) {
            el.style.display = '';
        } else {
            el.style.display= 'none'
        }
        
    })
}

inputSearch.oninput = search;

// Tính năng hiển thị số trang tương ứng 5 đối tượng trên 1 trang






//Tính năng điều hướng chuyển sang trang mới




//Tính năng điều hướng 
// sang trang chỉnh sửa (edit) thông tin người dùng
