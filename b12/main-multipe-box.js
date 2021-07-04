const listBoxEl = document.querySelectorAll('.box')

function offsetTopWithBody(el) {
  const domRect = el.getBoundingClientRect()
  const top = domRect.top
  const scrollY = window.scrollY

  return top + scrollY
}

function getHeightElement(el) {
  const domRect = el.getBoundingClientRect()
  const height = domRect.height
  return height
}

function detectMultiBoxsInViewPort() {
  for (let index = 0; index < listBoxEl.length; index++) {
    const boxEl = listBoxEl[index];
    
    const t = offsetTopWithBody(boxEl)
    const x = window.scrollY
    const y = window.innerHeight
    const z = getHeightElement(boxEl)

    const marginBoxWithViewPort = (y - z) / 2
    // t <= x + marginBoxWithViewPort
    // t >= x + marginBoxWithViewPort

    if (x >= t - y && x <= t + z) {
      
      // t + 200 >= x + marginBoxWithViewPort
      // x <= t + 200 - marginBoxWithViewPort
      // -----
      // t - 200 <= x + marginBoxWithViewPort
      // x >= t - 200 - marginBoxWithViewPort
      // console.log('x = ', x, t - marginBoxWithViewPort, 't = ', t)

      if (x <= t - marginBoxWithViewPort + 200 && x >= t - marginBoxWithViewPort - 200) {
        boxEl.classList.add('rollIn')
      }

      // Giả sử giá trị t = 1000
      // Nếu lý tưởng nằm giữa trung tâm -> x + marginBoxWithViewPort === t
      //  -> Không nên so sánh tuyệt đối -> Vì user dùng scroll khác nhau (Nhanh chậm khác nhau)
      //  -> Lấy khoảng chấp nhận được
      //  800 ------- 1200 là khoảng chấp nhận được. Coi như phần tử đã ở giữa màn hình
    } else {
      // console.log('Khong nhin Thay BoxEl')
    }
  }
}


document.addEventListener("scroll", function() {
  detectMultiBoxsInViewPort()
})


// Khi User Scroll tới điểm giữa màn hình thì sẽ chạy hiệu ứng