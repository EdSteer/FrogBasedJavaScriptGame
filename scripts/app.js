function init() {

  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const startingFrogPosition = 95
  let currentFrogPosition = 95
  const FrogClass = 'frog'

  const startingCar1Position = 80
  let currentCar1Position = 80
  const Car1Class = 'car1'

  const startingCar2Position = 69
  let currentCar2Position = 69
  const Car2Class = 'car2'
  


  function createGrid(startingFrogPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrog(startingFrogPosition)
    addCar1(startingCar1Position)
    addCar2(startingCar2Position)
  
  }

  function addFrog(position) {
    cells[position].classList.add(FrogClass)
  }

  function removeFrog(position) {
    cells[position].classList.remove(FrogClass)
  }

  function addCar1(position) {
    cells[position].classList.add(Car1Class)
      }

  function addCar2(position) {
    cells[position].classList.add(Car2Class)
      }

  function handleKeyUp(event) {
    console.log('position before key', currentFrogPosition)
    const key = event.keyCode
    removeFrog(currentFrogPosition)

    if (key === 39 && currentFrogPosition % width !== width - 1) {
      console.log('RIGHT')
      currentFrogPosition++
    } else if (key === 37 && currentFrogPosition % width !== 0) {
      console.log('LEFT')
      currentFrogPosition--
    } else if (key === 38 && currentFrogPosition >= width) {
      console.log('UP')
      currentFrogPosition -= width
    } else if (key === 40 && currentFrogPosition + width <= width * width - 1) {
      console.log('DOWN')
      currentFrogPosition += width
    } else {
      console.log('INVALID KEY')
    }

    addFrog(currentFrogPosition)
  }







  document.addEventListener('keyup', handleKeyUp)

  createGrid(startingFrogPosition)

}

window.addEventListener('DOMContentLoaded', init)
