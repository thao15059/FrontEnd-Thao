const boxEl = document.querySelector('.box')

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

function detectBoxInViewPort() {
  const t = offsetTopWithBody(boxEl)
  const x = window.scrollY
  const y = window.innerHeight
  const z = getHeightElement(boxEl)

  if (x >= t - y && x <= t + z) {
    setTimeout(function() {
      boxEl.classList.add('bounceInDown')
    }, 500)
  } else {
    console.log('Khong nhin Thay BoxEl')
  }
}

document.addEventListener("scroll", function() {
  detectBoxInViewPort()
})