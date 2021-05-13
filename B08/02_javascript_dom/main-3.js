var img = "https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg";



var image = document.querySelector(".class-demo");

// Thay doi thuoc tinh co san. GET - Lấy dữ liệu, lấy thông tin / SET - Thiết lập dữ liệu mới, thiết lập thông tin mới

//SET
image.setAttribute("src", img);
image.setAttribute("alt", "This is a image");
image.setAttribute("width", 300);
image.setAttribute("title", "Tieu de cua hinh anh");

//GET
var elDataTitle = Array.from(document.querySelectorAll("[data-title]"));

var temp = '';
// debugger;
for(var index = 0; index < elDataTitle.length; index++) {
    // console.log(elDataTitle[index], index);
    temp = temp + elDataTitle[index].getAttribute("data-title") + " ";
}
console.log("temp = ", temp); // Bị dư một khoảng trắng cuối cùng

// Khi set giá trị data-title mới cho #demo -> trim()
document.getElementById("demo").setAttribute("data-title", temp.trim());
console.log(elDataTitle);



console.log("truy xuat thuoc tinh cach 2", image.src);
console.log("truy xuat thuoc tinh cach 2", image.getAttribute("src"));


console.log("class cua phan tu img = ", image.getAttribute("class"));

/*
Code trong Javascript sẽ có 2 trường hợp được thực thi
1. Chay ngay từ đầu khi load lại trang 
2. Chạy ngay khi nhận một tương tác từ người dùng (Nhấn chuột click, rê chuột)
*/