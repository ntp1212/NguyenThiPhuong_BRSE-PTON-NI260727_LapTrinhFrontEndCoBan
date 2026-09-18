// get input name
let studentName = document.getElementById('student-name');
console.log(studentName);
// get input age
let studentAge = document.getElementById('student-age');
console.log(studentAge);
//get input class
let studentClass = document.getElementById('student-class');
console.log(studentClass);
// get add btn
let addBtn = document.getElementById('add-btn');
console.log(addBtn);
// get input search
let searchBtn = document.getElementById('search-btn');
console.log(searchBtn);
// get update btn
let updateBtn = document.querySelectorAll('.btn-edit');
console.log(updateBtn);
// get delete btn
let deleteBtn = document.querySelectorAll('.btn-delete');
console.log(deleteBtn);
// get student table
let studentList = document.getElementById('student-table');
console.log(studentList);

// tao function create
let createNew = function (btn) {btn.addEventListener('click',()=> {
// get value form input name
console.log(studentName.value);
console.log(studentAge.value);
console.log(studentClass.value);
// add value into list
studentList.innerHTML += `
<div class="student-row">
                <div>${studentName.value}</div>
                <div>${studentAge.value}</div>
                <div>${studentClass.value}</div>
                <div class="action-buttons">
                    <button id="update-btn" class="btn-edit">Sửa</button>
                    <button id="delete-btn" class="btn-delete">Xóa</button>
                </div>
            </div>
`
// delete value form input
studentName.value = '';
studentAge.value ='';
studentClass.value = ''
})
}
// Thêm sinh viên mới:
//  Nhập thông tin sinh viên (tên, tuổi, lớp) vào 
// một biểu mẫu và thêm vào danh sách.
createNew(addBtn);
// addBtn.addEventListener('click',()=> {
// // get value form input name
// console.log(studentName.value);
// console.log(studentAge.value);
// console.log(studentClass.value);
// // add value into list
// studentList.innerHTML += `
// <div class="student-row">
//                 <div>${studentName.value}</div>
//                 <div>${studentAge.value}</div>
//                 <div>${studentClass.value}</div>
//                 <div class="action-buttons">
//                     <button id="update-btn" class="btn-edit">Sửa</button>
//                     <button id="delete-btn" class="btn-delete">Xóa</button>
//                 </div>
//             </div>
// `
// // delete value form input
// studentName.value = '';
// studentAge.value ='';
// studentClass.value = ''
// })
// Hiển thị danh sách sinh viên: 
// Thông tin sinh viên sẽ được hiển thị dưới dạng bảng.



// Xóa sinh viên: 
// Mỗi dòng trong bảng có một nút xóa để xóa sinh viên khỏi danh sách.
deleteBtn.forEach((el)=> {
    el.addEventListener('click', ()=> {
        console.log(el.parentElement.parentElement);
        
        el.parentElement.parentElement.remove();
    })
})

// Sửa thông tin sinh viên:
//  Khi bấm nút "Sửa", cho phép chỉnh sửa thông tin sinh viên.
updateBtn.forEach((el)=> { 
    el.addEventListener('click',()=>{
        let inputBox = el.closest('.student-row');;
        console.log(inputBox);
        console.log(inputBox.children[0].textContent);
        studentName.value = inputBox.children[0].textContent;
        studentAge.value = inputBox.children[1].textContent;
        studentClass.value = inputBox.children[2].textContent;
        
    })
})

// Tìm kiếm sinh viên: 
// Tìm kiếm sinh viên theo tên.
