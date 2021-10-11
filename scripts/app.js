function init() {

  // ** VARIABLES

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#start')
  const scoreDisplay= document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  
  // let countdown = 60
  // let livesDisplay = 3
  // let scoreDisplay = 0
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const startingFrogPosition = 95
  let currentFrogPosition = 95
  const FrogClass = 'frog'
  
  const startingCar1Position = 80
  const Car1Class = 'car1'
  let currentCar1Position = 80
  const startingCar2Position = 79
  const Car2Class = 'car2'
  let currentCar2Position = 79
  const startingCar3Position = 59
  const Car3Class = 'car3'
  let currentCar3Position = 59
  const startingTurtle1Position = 20
  const Turtle1Class = 'turtle1'
  let currentTurtle1Position = 20
  const startingLog1Position = 19
  const Log1Class = 'log1'
  let currentLog1Position = 19
  const startingLog2Position = 37
  const Log2Class = 'log2'
  let currentLog2Position = 37

  
  
  
// creating grid

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
  function removeCar1(position) {
    cells[position].classList.remove(Car1Class)
  }

  function addCar2(position) {
    cells[position].classList.add(Car2Class)
  }
  function removeCar2(position) {
    cells[position].classList.remove(Car2Class)
  }
  
  function addcar3(position) {
    cells[position].classList.add(Car3Class)
  }
  function removeCar3(position) {
    cells[position].classList.remove(Car3Class)
  }

  function addturtle1(position) {
    cells[position].classList.add(Turtle1Class)
  }
  function removeturtle1(position) {
    cells[position].classList.remove(Turtle1Class)
  }

  function addLog1(position) {
    cells[position].classList.add(Log1Class)
  }
  function removeLog1(position) {
    cells[position].classList.remove(Log1Class)
  }  

  function addLog2(position) {
    cells[position].classList.add(Log2Class)
  }
  function removeLog2(position) {
    cells[position].classList.remove(Log2Class)
  }  

  
  
// ** MOVING FROG **
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
//  ** Moving Obstacles**

    //   function movingObstacle() {
    //   const obstacleTimer = setInterval(() => {
    //     removeLog2(startingLog2Position)
    //     addLog2(currentLog2Position)
    //     removeLog2(currentLog2Position)
    //     if (currentLog2Position % width !== width -1) {
    //       currentLog2Position += 1
    //       addLog2(currentLog2Position)
    //     } else {
    //       removeLog2(currentLog2Position)
    //       addLog2(startingLog2Position)
    //     }

    //   }, 250)
    // }

    // function addingRemovingObstacle() {
    //   removeLog2(startingLog2Position)
    //   addLog2(currentLog2Position)
    //   counter++
    //   if ????? {
    //     removeLog2(currentLog2Position)
    //     currentLog2Position += 1
    //     addLog2(currentLog2Position)
    //   } else {
    //     removeLog2(currentLog2Position)
    //     addLog2(startingLog2Position)
    //     clearInterval(repeat)
    //   }
    // }

    
    

    // startButton.addEventListener('click', startButton)

    addFrog(currentFrogPosition)
    addLog2(currentLog2Position)
    
    
  }







  document.addEventListener('keyup', handleKeyUp)
  // start.addEventListener('click', movingObstacle)

  createGrid(startingFrogPosition)

}

window.addEventListener('DOMContentLoaded', init)
