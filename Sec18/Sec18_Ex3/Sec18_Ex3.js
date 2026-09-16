let createInput = document.getElementById('new-value');
let createBtn = document.querySelector('.btn1');
let newList = document.querySelector('.todo-list')
// Khi check thi se bi gach chu, ko check thi quay lai bt
let jobChecked = document.querySelectorAll('.todo-list input');
console.log(jobChecked);
console.log(jobChecked[0]);
jobChecked.forEach((el)=> {
    el.addEventListener('click',()=> {
        console.log('The cha');        
        console.log(el.parentElement);
        el.parentElement.classList.toggle('completed',el.checked);
    })
        
    }
)

// Create
createBtn.addEventListener('click',() => {
    let newValue = createInput.value;
    newList.innerHTML += `<li class="todo-item">
                <input type="checkbox" >
                <span class="input-value">${newValue}</span> 
                <button class="inline-btn">Edit</button>
                <button class="inline-btn">Delete</button>

            </li>`
})
// Read

// Update
let listElement = document.querySelectorAll('.todo-list li' );
console.log(listElement);

// hiện nút update, delete
listElement.forEach((el) => {
  // Ban đầu xóa action ở các button
  el.querySelectorAll('button').forEach((child) => {
    child.classList.remove('action');
  });

  console.log(el.querySelectorAll('button'));

  el.addEventListener('dblclick', () => {
    // Xóa action ở tất cả button của tất cả li
    listElement.forEach((item) => {
      item.querySelectorAll('button').forEach((child) => {
        child.classList.remove('action');
      });
    });

    // Thêm action cho button của li vừa double click
    el.querySelectorAll('button').forEach((child) => {
      child.classList.add('action');
    });
  });
});
// Update
newList.addEventListener('click', (e) => {
  let todoItem = e.target.closest('.todo-item');

  if (!todoItem) {
    return;
  }

  // UPDATE
  if (e.target.matches('.edit-btn')) {
    let textElement = todoItem.querySelector('.input-value');

    let newValue = prompt(
      'Nhập nội dung mới:',
      textElement.textContent
    );

    if (newValue !== null && newValue.trim() !== '') {
      textElement.textContent = newValue.trim();
    }
  }

  // DELETE
  if (e.target.matches('.delete-btn')) {
    todoItem.remove();
  }
});
// updateBtn.forEach((el) => {
//     console.log(el.parentElement);
//     el.addEventListener('click',()=> {
//         createInput = el.parentElement.value;
//         createBtn.addEventListener('click',() => {
//             console.log(el.parentElement);
            
//     newValue = createInput.value;
//     newList.innerHTML += `<li class="todo-item">
//                 <input type="checkbox" >
//                 <span class="input-value">${newValue}</span> 
//                 <button class="inline-btn">Edit</button>
//                 <button class="inline-btn">Delete</button>

//             </li>`
// })
//     })
// })
// Delete
