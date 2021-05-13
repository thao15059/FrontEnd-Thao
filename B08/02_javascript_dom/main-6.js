var dropdownList = Array.from(document.querySelectorAll('.dropdown'));
// console.log(dropdownList);


// debugger
dropdownList.forEach(
    function(el, idx) {
        var btn = el.querySelector('.btn');
        // console.log(btn);
        // console.log("arrayGoc = ", arrayGoc);
        btn.addEventListener('click', 
            function(event) {
                if(el.classList.value.indexOf('open') === -1) {
                    el.classList.add('open');
                } else {
                    el.classList.remove('open');
                }
                
                /*
                Nếu phần tử "el" đã tồn tại class 'open' rồi -> Tiến hành remove (xoá)
                Ngược lại nếu phần tử "el" chưa có class 'open' -> Thêm vào
                */
            }
        );

    }
)


// for (let index = 0; index < dropdownList.length; index++) {
//     var value = dropdownList[index];
//     callBackFn(value, index);
// }
// function callBackFn(el, index) {
//     console.log("abc = ", abc);
//     console.log("def = ", def);
// }


/**
child -> con
parent -> cha
sibling -> anh chi em -> chung parent

 */


var container = document.querySelector('.container');
console.log(container.parentElement.parentElement.querySelector("#demo"));
console.log(container.parentElement.parentElement.querySelector("#demo").nextElementSibling);
console.log(container.parentElement.parentElement.querySelector("#demo").nextSibling);
console.log(container.parentElement.parentElement.querySelector("#demo").previousElementSibling);
console.log(container.parentElement.parentElement.querySelector("#demo").previousElementSibling.parentElement);

var h1 = document.querySelector("h1");
console.log("h1 = ", h1);
console.log("get text cua phan tu h1 = ", h1.innerText); //get gia tri text cua h1
h1.innerText = '<p>Javascript Dom edit</p>'; // set gia tri moi
console.log("get text cua phan tu h1 = ", h1.innerText); //get gia tri text cua h1


h1.innerHTML = 'Javascript Dom edit';