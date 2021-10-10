function init() {

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#start')
  const scoreDisplay= document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')

  let gameTimer
  let livesRemaining = 3
  let score = 0
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const startingFrogPosition = 95
  let currentFrogPosition = 95
  const FrogClass = 'frog'
  
  const startingCar1Position = 80
  const Car1Class = 'car1'
  const startingCar2Position = 79
  const Car2Class = 'car2'
  const startingCar3Position = 59
  const Car3Class = 'car3'
  const startingTurtle1Position = 20
  const Turtle1Class = 'turtle1'
  const startingLog1Position = 19
  const Log1Class = 'log1'
  const startingLog2Position = 39
  const Log2Class = 'log2'

  
  
  


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
    addcar3(startingCar3Position)
    addturtle1(startingTurtle1Position)
    addLog1(startingLog1Position)
    addLog2(startingLog2Position)
    
    
  
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
  
  function addcar3(position) {
    cells[position].classList.add(Car3Class)
  }

  function addturtle1(position) {
    cells[position].classList.add(Turtle1Class)
  }

  function addLog1(position) {
    cells[position].classList.add(Log1Class)
  }

  function addLog2(position) {
    cells[position].classList.add(Log2Class)
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

    
    function moveCarRight() {
      carRight.forEach((car, i) => {
        if (car === 80) { 
          cells[car].classList.remove('car1')
          carRight[i] -= (width - 1)
          cells[car -= (width - 1)].classList.add('car1')
        } else {
          cells[car].classList.remove('car1')
          carRight[i] += 1
          cells[car += 1].classList.add('car1')
          
        }
      })
    }

    addFrog(currentFrogPosition)
    moveCarRight(carRight)
    
  }







  document.addEventListener('keyup', handleKeyUp)

  createGrid(startingFrogPosition)

}

window.addEventListener('DOMContentLoaded', init)
