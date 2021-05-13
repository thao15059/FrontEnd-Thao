/*
- Thay đổi class (Thêm và Xoá)
- Thay đổi attribute (Sửa)
- Thêm mới một attribute cho một phần tử 
- Bắt được sự kiện click chuột của người dùng 
- Thêm một phần tử gắn vào trong cấu trúc HTML
....
....
-> Làm hiệu ứng động cho phần tử đó.

Phải xác dụng được mình áp dụng công việc trên cho phần tử nào? 


1. Học cách truy xuất phần tử bằng Javascript
    - Truy xuất bằng id của phần tử -> HTMLElement -> Một phần tử HTML

    - Truy xuất bằng class của phần tử -> HTMLCollectionOf -> Tập hợp nhiều phần tử HTML
        Lưu ý: HTMLCollectionOf không phải là Array. Nó chỉ gần giống với một dạng array. Có length. Có thể truy xuất vào phần tử bằng index.
        Nếu muốn sử dụng những method, những function giành riêng cho Array thì mình phải "ép kiểu" nó về Array. 
        => Dugnf cú pháp: Array.from(HTMLCollectionOf);

    - Truy xuất bằng tên thẻ a, body, ....
    - Truy xuất bằng selector của CSS
*/

var demoId = document.getElementById("demo");
console.log(demoId);

var arrNumber = [1, 2, 3, 4];
var demoClass = document.getElementsByClassName("demo");
console.log(demoClass);

var demoClassArray = Array.from(demoClass);
    demoClassArray.push("123");
    console.log(demoClassArray);


arrNumber.push(5);
console.log(arrNumber);
// console.log(demoClass[0]);
// console.log(demoClass[1]);
// console.log("length demoClass = ", demoClass.length);
for(var index = 0; index < demoClass.length; index++) {
    console.log("Phan tu thu", index, "la: ",demoClass[index]);
}




var div = document.getElementsByTagName("div");
console.log("div = ", div);

var h1 = document.getElementsByTagName("h1");
console.log("h1 = ", h1);