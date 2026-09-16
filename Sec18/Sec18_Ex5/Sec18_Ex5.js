// Lấy dữ liệu từ localStorage nếu có, nếu không dùng danh sách mẫu ban đầu
        let todos = JSON.parse(localStorage.getItem('todos')) || [
            { id: 1, text: "Xin việc ở Google", completed: true },
            { id: 2, text: "Mua biệt thự", completed: true },
            { id: 3, text: "Cưới vợ", completed: false },
            { id: 4, text: "Mua xe hơi", completed: false },
            { id: 5, text: "Sinh con", completed: false },
            { id: 6, text: "Đi du lịch vòng quanh thế giới", completed: false }
        ];

        let editId = null; // Biến lưu ID của công việc đang được sửa

        const todoInput = document.getElementById('todo-input');
        const addBtn = document.getElementById('add-btn');
        const todoList = document.getElementById('todo-list');

        // Hàm lưu vào LocalStorage
        function saveToLocalStorage() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        // R - READ: Hiển thị danh sách công việc lên giao diện
        function renderTodos() {
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
                
                li.innerHTML = `
                    <div class="todo-content" onclick="toggleStatus(${todo.id})">
                        <input type="checkbox" ${todo.completed ? 'checked' : ''} onclick="event.stopPropagation(); toggleStatus(${todo.id})">
                        <span>${escapeHtml(todo.text)}</span>
                    </div>
                    <div class="todo-actions">
                        <button class="btn-edit" onclick="editTodo(${todo.id})">Sửa</button>
                        <button class="btn-delete" onclick="deleteTodo(${todo.id})">Xóa</button>
                    </div>
                `;
                todoList.appendChild(li);
            });
        }

        // C - CREATE & U - UPDATE: Thêm mới hoặc Cập nhật công việc
        function handleAddOrUpdate() {
            const text = todoInput.value.trim();
            if (!text) {
                alert('Vui lòng nhập nội dung công việc!');
                return;
            }

            if (editId !== null) {
                // UPDATE: Cập nhật công việc đang sửa
                todos = todos.map(todo => {
                    if (todo.id === editId) {
                        return { ...todo, text: text };
                    }
                    return todo;
                });
                editId = null;
                addBtn.innerText = 'Thêm';
            } else {
                // CREATE: Thêm công việc mới
                const newTodo = {
                    id: Date.now(),
                    text: text,
                    completed: false
                };
                todos.push(newTodo);
            }

            todoInput.value = '';
            saveToLocalStorage();
            renderTodos();
        }

        // Đổi trạng thái hoàn thành (Check / Uncheck)
        function toggleStatus(id) {
            todos = todos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });
            saveToLocalStorage();
            renderTodos();
        }

        // Đưa dữ liệu lên ô input để chuẩn bị sửa (Update preparation)
        function editTodo(id) {
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todoInput.value = todo.text;
                editId = id;
                addBtn.innerText = 'Lưu';
                todoInput.focus();
            }
        }

        // D - DELETE: Xóa công việc
        function deleteTodo(id) {
            if (confirm('Bạn có chắc chắn muốn xóa công việc này không?')) {
                todos = todos.filter(todo => todo.id !== id);
                // Nếu đang sửa mục này mà lại bấm xóa thì reset nút về Thêm
                if (editId === id) {
                    editId = null;
                    todoInput.value = '';
                    addBtn.innerText = 'Thêm';
                }
                saveToLocalStorage();
                renderTodos();
            }
        }

        // Chống lỗi bảo mật XSS cơ bản khi in text ra HTML
        function escapeHtml(str) {
            return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
        }

        // Sự kiện click nút Thêm/Lưu
        addBtn.addEventListener('click', handleAddOrUpdate);

        // Sự kiện nhấn phím Enter để thêm/sửa nhanh
        todoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleAddOrUpdate();
            }
        });

        // Khởi chạy hiển thị lần đầu
        renderTodos();