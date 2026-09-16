const inputField = document.getElementById('inputField');
        const keyboardGrid = document.getElementById('keyboardGrid');

        // Danh sách các chữ cái từ A đến Z
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

        // Tạo các nút chữ cái A-Z
        alphabet.forEach(letter => {
            const button = document.createElement('button');
            button.classList.add('key-btn');
            button.innerText = letter;
            button.addEventListener('click', () => {
                inputField.value += letter;
                inputField.focus();
            });
            keyboardGrid.appendChild(button);
        });

        // Tạo nút Xóa
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('key-btn', 'key-delete');
        deleteButton.innerText = "Xóa";
        deleteButton.addEventListener('click', () => {
            inputField.value = inputField.value.slice(0, -1);
            inputField.focus();
        });
        keyboardGrid.appendChild(deleteButton);