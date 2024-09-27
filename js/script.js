const circle = document.querySelector('#circle')
const scoreItem = document.querySelector('#score')

// Функция старту
function start() {
    setScore(getScore())
    setClick(getClick())
    setImage()
}


// Функция задаёт localStorage айтем score со значением scoreItem
function setScore(score) {
    localStorage.setItem('score', score)

    scoreItem.textContent = score
}

function setClick (click=1) {
    localStorage.setItem('plusNum', click)

    addNumber = +click 
}


// Функция проверяет если scoreItem равно или больше 50 изменяет картинку
let nextLVL = document.createElement('div')
nextLVL.classList.add('next-lvl')
nextLVL.textContent = 'Следуйщий уровень: 50'

function setImage() {
    if(getScore() >= 50) {
        circle.setAttribute('src', './img/BAK.png')
        nextLVL.style.display = 'none'
    } else {
        circle.setAttribute('src', './img/batman.png')
        document.body.appendChild(nextLVL)
    }
}

// Функция проверяет есть ли в localStorage айтем с именем score если нету значение scoreItem будет равно 0  
function getScore() {
    return Number(localStorage.getItem('score')) ?? 0
}

function getClick() {
    return Number(localStorage.getItem('plusNum')) ?? 0
}


// Функция добавляет плюс 1 к scoreItem
let addNumber = 0

function addNum(num) {
    setScore(getScore() + num)
    setImage()
}


circle.addEventListener('click', function(event) {
    const rect = circle.getBoundingClientRect()

    const plusOne = document.createElement('div')
    plusOne.classList.add('plus-one')
    plusOne.textContent = `+${addNumber}`
    localStorage.setItem('plusNum', plusOne.textContent)
    plusOne.style.left = `${event.clientX - rect.left}px`
    plusOne.style.top = `${event.clientY - rect.top}px`

    circle.parentElement.appendChild(plusOne)

    addNum(addNumber)

    setTimeout(() => {
        plusOne.remove()
    }, 1000)
})

start()

const addPlusNumber = document.querySelector('.add-two')

addPlusNumber.addEventListener('click', function() {
    newNumber = addNumber + 1
    addNumber = newNumber
})