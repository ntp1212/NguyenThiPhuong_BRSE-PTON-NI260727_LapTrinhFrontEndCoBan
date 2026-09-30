// lấy các thẻ cần thiết
let form = document.getElementById("form");
console.log(form);
let inputContent = document.getElementById("content");
console.log(inputContent);
let inputDuedate = document.getElementById("due-date");
console.log(inputDuedate);
let inputStatus = document.getElementById("status");
console.log(inputStatus);
let inputAssigned = document.getElementById("assigned-to");
console.log(inputAssigned);
let submitBtn = document.getElementById("btn-submit");
console.log(submitBtn);
let lists = document.getElementById("lists");
console.log(lists);
let mes = document.getElementById("mes");
console.log(mes);

// bien co san
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
// lưu vào localS
// localStorage.setItem('courses',JSON.stringify(courses));
// lấy dữ liệu từ localStorage 
localStorage.getItem('courses',JSON.stringify(courses))
// hàm tái sử dụng
// hàm render hiển thị thông tin từ course sang bảng
let renderCouses = function () {
  lists.innerHTML = "";
  courses.forEach((el) => {
    let tr = document.createElement("tr");
    tr.className = "lists-row";
    tr.innerHTML += `
                            <th scope="row">${el.id}</th>
                            <td>${el.content}</td>
                            <td>${el.dueDate}</td>
                            <td>${el.status}</td>
                            <td>${el.assignedTo}</td>
                            <td>
                                <button type="button" class="btn btn-edit">Sửa</button>
                                <button type="button" class="btn btn-delete">Xóa</button>
                                </td>`;
    lists.appendChild(tr);
  });
};

// hàm thêm nội dung từ input sang courses

let newList = function () {
  // tạo list mới từ nội dung input
  let newId = Date.now();
  let course = {
    id: newId,
    content: inputContent.value,
    dueDate: inputDuedate.value,
    status: inputStatus.value,
    assignedTo: inputAssigned.value,
  };
  // xóa nội dung input
  inputContent.value = "";
  inputDuedate.value = "";
  inputStatus.value = "";
  inputAssigned.value = "";
  // đưa course mới vào courses
  courses.push(course);
};

// hàm kiểm tra nội dung của input
let checkInput = function (el) {
  if (el.value.trim() === "") {
    mes.innerText = "Vui lòng không để trống";
    return false;
  } else {
    mes.innerText = "";
    return true;
  }
};
// read
renderCouses();

// create + cập nhật dữ liệu
// kiểm tra các ô input không trống
inputContent.addEventListener("blur", () => {
  checkInput(inputContent);
});
inputDuedate.addEventListener("blur", () => {
  checkInput(inputDuedate);
});
inputStatus.addEventListener("blur", () => {
  checkInput(inputStatus);
});
inputAssigned.addEventListener("blur", () => {
  checkInput(inputAssigned);
});

// -----------hàm submit--------------------
    // Nếu updateId = null -> submit , nếu không là update
let updateId = null;
let submit = form.addEventListener("submit", (ev) => {
  // console.log("da submit");
  let contentValid = checkInput(inputContent);
  let duedateValid = checkInput(inputDuedate);
  let statusValid = checkInput(inputStatus);
  let assignedValid = checkInput(inputAssigned);
  // ngăn chặn hành động mặc định
  ev.preventDefault();
  // kiểm tra ô input
  checkInput(inputContent);
  checkInput(inputDuedate);
  checkInput(inputStatus);
  checkInput(inputAssigned);
  if (contentValid && duedateValid && statusValid && assignedValid) {
    if (updateId === null) {
    // Cập nhật thông tin mới vào courses và hiển thị lại bảng
        newList();
        renderCouses();

    } else {
        // nếu không là update khóa học
        courses.forEach((el) => {
    if (el.id === updateId) {
        console.log(updateId);
        console.log(inputContent.value);
        
      el.content = inputContent.value;
      console.log(el.content);
      
      el.dueDate = inputDuedate.value;
      el.status = inputStatus.value;
      el.assignedTo = inputAssigned.value;
      // xóa nội dung input
      inputContent.value = "";
      inputDuedate.value = "";
      inputStatus.value = "";
      inputAssigned.value = "";
     
      // hiển thị lại bảng dữ liệu
      renderCouses();
    }
  });
   // Reset updateId
     updateId = null;
    }
    
  } else {
    mes.innerText = "Vui lòng không để trống";
  }
    localStorage.setItem('courses',JSON.stringify(courses));
//   console.log(JSON.parse(localStorage.getItem("courses")));
  
});
// update
lists.addEventListener("click", (ev) => {
  // gắn sự kiện vào thẻ cha có chứa thẻ có class là btn-edit
  if (ev.target.classList.contains("btn-edit")) {
    // Nếu đúng thì lấy thông tin của thẻ cha của thẻ chửa thẻ btn-edit lên ô input
    // lấy thẻ cha của thẻ chứa thẻ có btn-edit
    let row = ev.target.closest(".lists-row");
    console.log(row);
    updateId = Number(row.children[0].innerText);
    inputContent.value = row.children[1].innerText;
    inputDuedate.value = row.children[2].innerText;
    inputStatus.value = row.children[3].innerText;
    inputAssigned.value = row.children[4].innerText;
  }
});
// delete

lists.addEventListener("click", (ev) => {
  // gắn sự kiện vào thẻ cha có chứa thẻ có class là btn-edit
  if (ev.target.classList.contains("btn-delete")) {
    // Nếu đúng thì lấy thông tin của thẻ cha của thẻ chửa thẻ btn-edit lên ô input
    // lấy thẻ cha của thẻ chứa thẻ có btn-edit
    let row = ev.target.closest(".lists-row");
    console.log(row);
    
    let deleteId =Number(row.children[0].innerText);
    let i = courses.findIndex((el) => {
        return el.id === deleteId
    })
    if (i !== -1) {
    courses.splice(i,1);
    renderCouses();
    }
    localStorage.setItem('courses',JSON.stringify(courses)); 
    // console.log(JSON.parse(localStorage.getItem("courses")));

  }
});