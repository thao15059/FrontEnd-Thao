- Display Flex: https://www.youtube.com/watch?v=huali38wdQI&t=322s

## Project Todo List

1. Thêm mới một tác vụ
  - User nhấn vào Nút "Add Task"
    - Dùng CSS để viết sẵn 2 class: show, hidden
    - Khi mới vào trang mặc định sẽ có class hidden -> Dùng CSS để display: none;
    - Khi người dùng nhấn nút "Add Task" lần đầu tiên -> Xoá class hidden đi và thêm class show vào
    - element.classList.add, element.classList.remove
    - Nhấn lần thứ 

  - Có một form nhập liệu (Input, Select)
    - Sự kiện Input: addEventListener("input", function() {}) -> evt.target.value
    - Sự kiện Select: addEventListener("change", function() {}) -> evt.target.value
  - Khi nhập thì phải lưu được vào trong một biến nào đó
    ```javascript
    // ĐỊnh nghĩa dữ liệu cho một tác vụ có những thông tin như sau
    const taskData = {
      id: 23424, // random ngẫu nhiên số cố 4 chữ số Math.random() * 1111 + 1000
      name: "Nhập từ ô input",
      level: 1 // Nhập từ ô input. 1 -> Small, 2 -> Medium, 3 -> High
    }
    ```
  - Khi User nhấn vào nút Submit -> Thêm phần tử này vào trong Array (Thêm phần tử mới vào một Array, push)
    ```javascript
    // Lưu trữ nhiều phần tử bằng cấu trúc dữ liệu Array
    let listTasks = [
      {
        // ... id, name, level
      },
      {
        // ... id, name, level
      }
    ]
    ```
  - Khi lưu lại xong => Hiển thị ra HTML (Dùng vòng lặp + innerHTML)

2. Xoá một tác vụ
  - Trong mỗi hàng của bảng sẽ có một nút nhất là nút Delete
  - Khi người dùng nhấn vào nút này => Lưu trữ ID của tác vụ vào trong thuộc tính của button
  ```html
    <button type="button" class="btn btn-danger" task-id="23424">Delete</button>
  ```
  - Biết được phần tử mà User muốn xoá có ID là bao nhiêu?
  - Bài toán xoá một phần tử trong Array dựa vào ID của nó
    - findIndex https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    - splice: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
  - Dùng Javascript xoá một phần tử trong Array `listTasks`
  - Khi xoá xong Data => Hiển thị ra giao diện (Dùng vòng lặp + innerHTML)

3. Chỉnh sửa một tác vụ
  - Mỗi hàng trong Table sẽ có một button là "Edit"
  - Khi hiển thị hàng này ra giao diện => Phải nối chuỗi thêm ID của task-id vào 
  ```html
    <button type="button" class="btn btn-warning" task-id="23424">Edit</button>
  ```
  - Khi người dùng nhấn xong -> getAttribute("task-id")  để lấy ra được ID cần chỉnh sửa
  - Tìm kiếm dữ liệu trong Array dựa vào ID: `finđInex, find`
  - Khi tìm xong -> Có được dữ liệu của phần tử cần chỉnh sửa: `id`, `name`, `level`
  - Dùng JS DOM hiển thị lại form bằng class `show`, `hidden`
  - Điền dữ liệu hiện tại từ `{}` để tự động điền vào Ô Input và Select trong Form `input.value = "a"`
  - Khi điền dữ liệu sẵn ròi => User vẫn có thể sửa lại
  - Lại quay về giống bài toán Thêm mới 
    ```javascript
    // ĐỊnh nghĩa dữ liệu cho một tác vụ có những thông tin như sau
    const taskData = {
      id: 23424, // random ngẫu nhiên số cố 4 chữ số Math.random() * 1111 + 1000
      name: "Nhập từ ô input",
      level: 1 // Nhập từ ô input. 1 -> Small, 2 -> Medium, 3 -> High
    }
    ```
  - Khi User nhấn vào nút Submit -> Chỉnh sửa data tại một vị trí bất kỳ dựa vào ID của nó
    ```javascript
    // Lưu trữ nhiều phần tử bằng cấu trúc dữ liệu Array
    let listTasks = [
      {
        id: 55,
        name: "Di chơi",
        level: 0
      }, // index = 0
      {
        id: 93,
        name: "Di học",
        level: 1
      } // index = 1
    ]
    ```
  - Dùng finđInex => Tìm ra index = 1 => `listTasks[0] = dataMới`
  - Khi thay đổi xong dữ liệu => Ẩn Form => Hiển thị dữ liệu ra Table, ra HTML (Dùng vòng lặp + innerHTML)
  
4. Tìm kiếm một tác vụ
  - Cho phép người dùng nhập thông tin tìm kiếm vào ô Input "Search For ..."
  - Dùng một sự kiện `addEventListener("input")` của ô input có tên "input"
  - Khi người dùng nhập vào thì lưu vào một biến nào đó `let searchStr = ""`
  - Nhập chữ "a" => `searchStr = evt.target.value` => Mong đợi `searchStr = "a"`
  - Bài toán tìm kiếm phần tử trong Array theo một tiêu chí nào đó (Đang tìm kiếm theo `name`)
    - findIndex 

  - Hiển thị phần tử này ra bảng bằng innerHTML và vòng lặp
  - Khi người dùng xoá về chuỗi rỗng "" => Hiển thị lại danh sách đầy đủ ban đầu ra HTML bằng innerHTML và vòng lặp

5. Sắp xếp danh sách trong table theo:
  - chiều từ trên xuống dưới, từ dưới lên trên
  - theo cấp độ, theo tên
  - Xử lý trên dữ liệu 
    - Dùng hàm có sẵn của Array để sắp xếp
    - `sort`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

  - Hiển thị lại danh sách bằng innerHTML và vòng lặp