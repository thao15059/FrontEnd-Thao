
function offsetTopWithBody(el) {
  const domRect = el.getBoundingClientRect()
  const top = domRect.top
  const scrollY = window.scrollY

  return top + scrollY
}

function addEventForAllLinkScroll() {
  const listLinkScroll = document.querySelectorAll('[data-scroll-id]')

  for(let index = 0; index < listLinkScroll.length; index++) {
    const linkScroll = listLinkScroll[index] // Đây là thẻ <a>. Sự kiện mặc định của nó là nhảy link

    function handleClickScroll(evt) {
      evt.preventDefault() // Đây là một hàm hỗ trợ sẵn của Event để ngăn chặn sự kiện mặc định của phần tử

      const dataScrollId = linkScroll.getAttribute('data-scroll-id')
      const sectionEl = document.querySelector(dataScrollId)
      const valueScrollTop = offsetTopWithBody(sectionEl)
      
      window.scrollTo({
        top: valueScrollTop,
        behavior: "smooth"
      })
    }

    linkScroll.addEventListener('click', handleClickScroll)
  }
}


addEventForAllLinkScroll()