
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const taskList = document.getElementById("task-list");
const pendingCount = document.getElementById("pending-count");
const clearBtn = document.getElementById("clear-btn");

// Khởi tạo dữ liệu
const defaultTodos = [
    { id: 1, content: "Quét nhà", completed: false },
    { id: 2, content: "Rửa bát", completed: false }
];

// Đọc dữ liệu từ Local Storage
let todos;

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    try {
        const parsedTodos = JSON.parse(savedTodos);

        todos = Array.isArray(parsedTodos)
            ? parsedTodos.filter(todo =>
                todo &&
                Number.isFinite(todo.id) &&
                typeof todo.content === "string" &&
                typeof todo.completed === "boolean"
            )
            : [...defaultTodos];
    } catch (error) {
        todos = [...defaultTodos];
    }
} else {
    todos = [...defaultTodos];
}

// Lưu dữ liệu vào Local Storage
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// READ: Hiển thị danh sách công việc
function renderTodos() {
    taskList.innerHTML = "";

    todos.forEach(todo => {
        const taskItem = document.createElement("div");
        taskItem.className = "task-item";

        if (todo.completed) {
            taskItem.classList.add("completed");
        }

        // Checkbox hoàn thành công việc
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = todo.completed;
        checkbox.setAttribute("aria-label", "Hoàn thành công việc");

        // Nội dung công việc
        const taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = todo.content;

        // Khu vực các nút thao tác
        const actions = document.createElement("div");
        actions.className = "task-actions";

        // Nút sửa
        const editBtn = document.createElement("button");
        editBtn.className = "edit-btn";
        editBtn.textContent = "Sửa";
        editBtn.type = "button";
        editBtn.dataset.id = todo.id;

        // Nút xóa
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "Xóa";
        deleteBtn.type = "button";
        deleteBtn.dataset.id = todo.id;

        actions.append(editBtn, deleteBtn);

        taskItem.append(checkbox, taskText, actions);
        taskList.appendChild(taskItem);

        // Đổi trạng thái hoàn thành
        checkbox.addEventListener("change", () => {
            todo.completed = checkbox.checked;

            saveTodos();
            renderTodos();
        });
    });

    // Đếm số công việc chưa hoàn thành
    const pending = todos.filter(todo => !todo.completed).length;

    pendingCount.textContent = `You have ${pending} pending tasks`;
}

// CREATE: Thêm công việc mới
todoForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const content = todoInput.value.trim();

    if (content === "") {
        alert("Vui lòng nhập nội dung công việc!");
        todoInput.focus();
        return;
    }

    const newTodo = {
        id: Date.now(),
        content: content,
        completed: false
    };

    todos.push(newTodo);

    saveTodos();
    renderTodos();

    // Xóa nội dung input sau khi thêm
    todoInput.value = "";
    todoInput.focus();
});

// UPDATE và DELETE: Sử dụng sự kiện trên phần tử cha
taskList.addEventListener("click", function (event) {
    const target = event.target;

    // Lấy id của công việc cần thao tác
    const id = Number(target.dataset.id);

    // UPDATE: Sửa công việc
    if (target.classList.contains("edit-btn")) {
        const todo = todos.find(item => item.id === id);

        if (!todo) return;

        const taskItem = target.closest(".task-item");
        const taskText = taskItem.querySelector(".task-text");

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.className = "edit-input";
        editInput.value = todo.content;

        taskText.replaceWith(editInput);

        target.textContent = "Lưu";
        target.classList.remove("edit-btn");
        target.classList.add("save-btn");

        editInput.focus();
        editInput.select();
        return;
    }

    // Lưu nội dung sau khi sửa
    if (target.classList.contains("save-btn")) {
        const todo = todos.find(item => item.id === id);

        if (!todo) return;

        const taskItem = target.closest(".task-item");
        const editInput = taskItem.querySelector(".edit-input");
        const newContent = editInput.value.trim();

        if (newContent === "") {
            alert("Nội dung công việc không được để trống!");
            editInput.focus();
            return;
        }

        todo.content = newContent;

        saveTodos();
        renderTodos();
        return;
    }

    // DELETE: Xóa một công việc
    if (target.classList.contains("delete-btn")) {
        todos = todos.filter(item => item.id !== id);

        saveTodos();
        renderTodos();
    }
});

// Cho phép nhấn Enter để lưu nội dung đang sửa
taskList.addEventListener("keydown", function (event) {
    if (
        event.key === "Enter" &&
        event.target.classList.contains("edit-input")
    ) {
        const taskItem = event.target.closest(".task-item");
        const saveBtn = taskItem.querySelector(".save-btn");

        if (saveBtn) {
            saveBtn.click();
        }
    }

    // Nhấn Escape để hủy thao tác sửa
    if (
        event.key === "Escape" &&
        event.target.classList.contains("edit-input")
    ) {
        renderTodos();
    }
});

// DELETE: Xóa tất cả công việc
clearBtn.addEventListener("click", function () {
    if (todos.length === 0) {
        alert("Danh sách công việc đã trống!");
        return;
    }

    const isConfirmed = confirm("Bạn có chắc chắn muốn xóa tất cả?");

    if (isConfirmed) {
        todos = [];

        saveTodos();
        renderTodos();
    }
});

// Hiển thị dữ liệu khi mở trang
renderTodos();