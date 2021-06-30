
let previousScrollValue = 0

document.addEventListener('scroll', function() {
  let currentScroll = window.scrollY

  if (currentScroll > previousScrollValue) {
    document.body.classList.add('scroll-down')
    document.body.classList.remove('scroll-up')
  }
  if (currentScroll < previousScrollValue) {
    document.body.classList.add('scroll-up')
    document.body.classList.remove('scroll-down')
  }

  // Gần chạy xong hàm này để tới lượt Scroll tiếp theo 
  //  => Lưu lại giá trị trước ngay tại vị trí này
  previousScrollValue = currentScroll
})