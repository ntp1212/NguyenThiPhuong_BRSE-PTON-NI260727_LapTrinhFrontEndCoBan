// get form
let form = document.querySelector('.form');
console.log(form);

// get task-list table
let taskList = document.querySelector(".task-list");
console.log(taskList);
// get content
let inputContent = document.getElementById("content");
console.log(inputContent);
// get due-date
let inputDueDate = document.getElementById("due-date");
console.log(inputDueDate);
// get status
let inputStatus = document.getElementById("status");
console.log(inputStatus);
// get assigned-to
let inputAssigned = document.getElementById("assigned-to");
console.log(inputAssigned);
// get sunmit
let submitBtn = document.getElementById("submit-btn");
console.log(submitBtn);

const courses = [
  {
    id: 1,
    content: "Learn Javascript Session 01",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Anh Bách",
  },
  {
    id: 2,
    content: "Learn Javascript Session 2",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Lâm th",
  },
  {
    id: 3,
    content: "Learn CSS Session 1",
    dueDate: "2023-04-17",
    status: "Pending",
    assignedTo: "Hiếu Ci ớt ớt",
  },
];



courses.forEach((el, index) => {
  taskList.innerHTML += `<li class="task-item">
                    <div class="col-id">${index + 1}</div>
                    <div class="col-content">${el.content}</div>
                    <div class="col-date">${el.dueDate}</div>
                    <div class="col-status">${el.status}</div>
                    <div class="col-assign">${el.assignedTo}</div>
                    <div class="col-action">
                        <button type="button" class="btn edit-btn">Sửa</button>
                        <button type="button" class="btn btn-delete delete-btn">Xóa</button>
                    </div>
                </li>`;
});

// get button
let editBtn = document.querySelectorAll(".edit-btn");
console.log(editBtn);
let deleteBtn = document.querySelectorAll(".delete-btn");
console.log(deleteBtn);
// hàm tạo task mới
let newCourse = function () {

    // thêm object mới vào mảng
    courses.push({

        id: courses.length + 1,

        content: inputContent.value,

        dueDate: inputDueDate.value,

        status: inputStatus.value,

        assignedTo: inputAssigned.value

    });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  newCourse();
});
