
const progressScrollEl = document.querySelector('.progress-scroll .progress-bar')

document.addEventListener('scroll', function(){
  const heightBody = document.body.getBoundingClientRect().height
  const heightWindow = window.innerHeight

  const heightTotal = heightBody - heightWindow
  const percent = Math.ceil((window.scrollY / heightTotal) * 100)

  progressScrollEl.style.width = percent + `%`;
})