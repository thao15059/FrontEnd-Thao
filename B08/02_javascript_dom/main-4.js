function handeClick() {
    console.log("click");
}

var colorSkinId = document.getElementById("color-skin");
var containerDiv = document.querySelector(".container");
var body = document.getElementsByTagName("body")[0];

function changeStyleColor(href) {
    // console.log(href);
    colorSkinId.setAttribute("href", href);
}


function changeStyleContainer(type) {
    var newClass = "container " + type;
    containerDiv.setAttribute("class", newClass);
    console.log(type);
}


function changeBg(fileName) {
    // console.log(fileName);
    if(fileName) {
        //Thay doi style cho body
        var valueStyle = "background-image: url('" + fileName + "')";
        
        console.log(body, fileName, valueStyle);
        // style="background-image: url('images/boxed-bg-img-02.jpg')"
        body.setAttribute("style", valueStyle)
    } else {
        //Dua body ve trang thai binh thuong.
        body.setAttribute("style", '');
    }

    // Falsy & Truthy
    // undefined, NaN, null, 0, '', false
}

/*
Tao 2 function hỗ trợ việc thêm class và xoá class -> Tự viết
-> Xử lí chuỗi


Ví dụ function thêm class(className)
Ví dụ Giá trị class cũ là "container abc"
Thêm mới vào className = "style-02" => Xét lại giá trị mới là "container abc style-02"

Ví dụ giá trị class cũ là "container abc"
Thêm mới vào className = "abc" => Không xử lí



Hàm xoá class
Ví dụ class cũ là "container abc"
Có một function removeClass(className)
Muốn Xoá className = "abc"

Phai kiểm tra xem class cũ có tồn tại "abc" hay không?
1. Nếu có -> Xử lí chuỗi, xử lí mảng để xoá thu được giá trị cuối cùng sau khi xoá là "container"
2. Nếu không có "abc" -> Thì thôi không làm gì hết.
*/
var image = document.querySelector(".class-demo");
    image.setAttribute('src', 'https://www.belightsoft.com/products/imagetricks/img/core-image-filters@2x.jpg');

function addClass(el, className) {
    var oldClass = el.getAttribute('class');
    // console.log("oldClass = ", oldClass);
    // console.log(el, className);
    if(oldClass) {
        //Khac null
        // class cũ là "abc"
        // className muốn thêm vào là "def"
        // Nối lại sẽ ra class mơi là "abc def";

        // Trước khi mà mình xét giá trị mới thì phải kiểm tra xem className này đã tồn tại trong class cũ hay chưa?
        // nếu chưa tồn tại thì ok -> Nối chuỗi bình thường
        // nếu đã tồn tại rồi thì thôi. Không thêm nữa
        if(oldClass.indexOf(className) === -1) {
            var newClass = oldClass + " " + className;
            el.setAttribute('class', newClass);
        }
    } else {
        // Bang null
        el.setAttribute('class', className);
    }
}


function removeClass(el, className) {
    /*
    Nếu nó sẵn một số class rồi => Tiến hành kiểm tra logic remove
        Nếu className có tồn tại trong classCu -> Tiến hành xử lí tiếp logic remove
            oldClass = "demo-class abc demo-abc"
            className = "abc"
            
            Tách class cũ thành array: ['demo-class', 'abc', 'demo-abc']
            Muốn xoá 'abc' -> Phải biết vị trí xuất của nó trong array là bao nhiêu? 

                ['demo-class', 'abc', 'demo-abc'].index('abc') => index = 1 => Xác định vị trí rồi thì gọi hàm xoá
                ['demo-class', 'abc', 'demo-abc'].splice(1, 1) => Return ['abc']
                Mảng gốc của mình chỉ còn ['demo-class', 'demo-abc']

                Chuyển ngược lại về chuỗi 'demo-class demo-abc' -> setAttribute là xong

        Nếu clasname không tồn tại trong class cũ -> Thì thôi.

    Nếu không có bất kì một class cũ nào cả => Thì thôi.
    */
    var oldClass = el.getAttribute('class');
    // debugger;
    if(oldClass) {
        var arrOldClass = oldClass.split(' ');
        var indexDelete = arrOldClass.indexOf(className);
        // console.log("Mảng cũ trước khi xoá = ",arrOldClass);
        if(indexDelete !== -1) {
            // Class cần xoá có tồn tại trong mảng cũ
            // Xoá một phần tử tính từ vị tí indexDelete
            arrOldClass.splice(indexDelete, 1);
            el.setAttribute('class', arrOldClass.join(" "));
            // console.log("Mảng cũ sau khi xoá = ",arrOldClass);
            // console.log("Mảng cũ sau khi xoá chuyển về chuỗi = ",arrOldClass.join(" "));
        }
    }
}


addClass(body, 'wrapper-content');
addClass(image, 'image');
addClass(image, 'demo-abc');
addClass(image, 'image');


removeClass(image, 'class-demo');
removeClass(image, 'image');
removeClass(image, 'demo-abc');
removeClass(image, 'demo-fhdjskfhskfhsk');

/*
Chuyển đổi từ một chuỗi -> Thành một mảng
    "abc def" => ['abc', 'def']
    oldClass.split(" ")

Chuyển đổi từ một mảng -> Thành chuỗi
    ['abc', 'def'] => "abc def"
    arrTest.join(" ");

Hôm trước mình đã học về 5 hàm hỗ trợ cơ bản của array
    Thêm vào đầu, thêm vào cuối, Xoá đầu, Xoá cuối. indexOf(..)

    Thêm vào giữa, xoá phần tử ở giữa mảng.

    Đối với những method hỗ trợ cho mảng => Cần phải xác định rõ là method đó nó có thay đổi array gốc của mình hay không?

    Method arr.slice(start, end) => Tạo ra một mảng mới tính từ vị trí index = start => index < end => Không làm thay đổi mảng gốc
    
    Method arr.splice(start, deleteCount) -> Vừa xoá vừa thêm
        => Xoá bao nhieu phần tử? tính từ vị trí start
        arr.splice(0, 3) => Xoá 3 phần tử tính từ vị trí index = 0 trở đi
        => Trả về một mảng bao gồm những phần tử đã xoá
        => Nó làm thay đổi mảng gốc của mình
    
    Method arr.splice(start, deleteCount, ...thêm-mới)
        Dấu ... được thể hiện là mình muốn thêm bao nhiêu kí tự cũng được
        Ví dụ
            arr.splice(0, 1, 99, 88) => Xoá 1 phần tử bắt đầu tại vị trí index = 0. Sau khi xoá xong, tại vị trí đó thêm mới vào 2 phần tử là 99, 88
            [123, 456].splice(0, 1, 99, 88) 
                -> Xoá 1 phần tử [456]
                -> Thêm [99, 88, 456]
    */

var arrNumber = [1,2,3,4,5,6,7,8,9,10];
// arrNumber.splice();

//console.log(arrNumber.slice(0, 3)); // Trả về một array con nằm trong khoảng index = 2 => index < 5

// console.log("array đã xoá",arrNumber.splice(5, 2));

// console.log("mảng cũ",arrNumber);