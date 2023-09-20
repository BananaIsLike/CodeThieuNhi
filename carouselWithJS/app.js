var slider = document.querySelector('.slider')
var dots = document.querySelectorAll('.dot')
var nextBtn = document.querySelector('.next')
var prevBtn = document.querySelector('.prev')
var dotsLength = dots.length

var index = 0
dots[index].classList.add('dot-active')

function indexUp() {
    index++
    if(0 < index && index < dotsLength) {
        dots[index].classList.add('dot-active')
        dots[index - 1].classList.remove('dot-active')
    } else if(index = dotsLength){
        index = 0
        dots[index].classList.add('dot-active')
        dots[dotsLength - 1].classList.remove('dot-active')
    }
    slider.style.transform = `translateX(calc(-600px * ${index}))`
}

function indexDown() {
    index--
    if(0 <= index && index < dotsLength) {
        dots[index].classList.add('dot-active')
        dots[index + 1].classList.remove('dot-active')
    } else if(index < 0){
        index = dotsLength -1
        dots[index].classList.add('dot-active')
        dots[0].classList.remove('dot-active')
    }
    slider.style.transform = `translateX(calc(-600px * ${index}))`
}

nextBtn.addEventListener('click', () =>{ indexUp() })

prevBtn.addEventListener('click', () =>{ indexDown() })

function autoNext() {
    setTimeout(() => {
        indexUp()
        autoNext()
    }, 3000)
}

autoNext()





