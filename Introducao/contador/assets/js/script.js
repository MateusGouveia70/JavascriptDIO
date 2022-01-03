var currentNumberWrap = document.getElementById('currentNumber')
var currentNumber = 0

document.getElementById('subtrair').addEventListener('click', decrement)

document.getElementById('adicionar').addEventListener('click', increment)

function increment() {
  if (currentNumber < 10) {
    currentNumber = currentNumber + 1
    currentNumberWrap.innerHTML = currentNumber
  }

  if (currentNumber >= 0) {
    document.getElementById('currentNumber').style.color = 'black'
  }
}

function decrement() {
  if (currentNumber > -10) {
    currentNumber = currentNumber - 1
    currentNumberWrap.innerHTML = currentNumber
  }

  if (currentNumber < 0) {
    document.getElementById('currentNumber').style.color = 'red'
  }
}
