// Truy xuat phan tu bang Selector cua CSS
/*
Yêu cầu: Phải nắm rõ phần Selector của CSS
    #demo { }
    .classDemo { }
    Attribute Selector

Có thể sư dụng cách này để thay thế cho việc truy xuất trong file main.js
    - getElementById
    - getElementsByClassName
    - getElementsByTagName

    - querySelector("#demo") -> Trả về cho mình một phần tử đần tiên tìm thấy được mà match với selector 
    - querySelectorAll(".demo") -> Trả về cho mình nhiều phẩn tử match với selector truyền vào -> Không phải là array. Muốn ép kiểu về array giống buổi trước Array.from()
*/


var demoId = document.querySelector("#demo");
console.log(demoId);

console.log(document.querySelector(".demo")); // Trả về class .demo đầu tiên nó tìm thấy thôi.

var demoClass = document.querySelectorAll(".demo");
console.log(demoClass);

demoClass = Array.from(demoClass);
console.log(demoClass.push(123));
console.log(demoClass);



var btnModal = document.querySelector("body [data-toggle='modal']");
console.log(btnModal);