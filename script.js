const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

// make the function run every 0.15s
let interval = setInterval(blurring, 30)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(interval)
  }
  loadText.innerText = `${load}%`

  //   map a range of numbers to another set of numbers
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 15, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
