function init() {

  // ** VARIABLES

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#start')
  const scoreDisplay= document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  const timeLeft = document.querySelector('#timer')
  
  // let countdown = 60
  // let livesDisplay = 3
  // let scoreDisplay = 0
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const startingFrogPosition = 95
  let currentFrogPosition = 95
  const FrogClass = 'frog'
  
  const obstacles = [
    {
      cssClass: 'car1',
      startPosition: 80,
      currentPosition: 80,
      order: 'first',
      direction: 'right',
      timer: null
    },
    {
      cssClass: 'car1',
      startPosition: 80,
      currentPosition: 80,
      order: 'second',
      direction: 'right',
      timer: null
    },
    {
      cssClass: 'car2',
      startPosition: 79,
      currentPosition: 79,
      order: 'first',
      direction: 'left',
      timer: null
    },
    {
      cssClass: 'car2',
      startPosition: 79,
      currentPosition: 79,
      order: 'second',
      direction: 'left',
      timer: null
    },
    {
      cssClass: 'car3',
      startPosition: 59,
      currentPosition: 59,
      order: 'first',
      direction: 'left',
      timer: null
    },
    {
      cssClass: 'car3',
      startPosition: 59,
      currentPosition: 59,
      order: 'second',
      direction: 'left',
      timer: null
    },
    {
      cssClass: 'turtle1',
      startPosition: 20,
      currentPosition: 20,
      order: 'first',
      direction: 'right',
      timer: null
    },
    {
      cssClass: 'turtle1',
      startPosition: 20,
      currentPosition: 20,
      order: 'second',
      direction: 'right',
      timer: null
    },
    {
      cssClass: 'log1',
      startPosition: 19,
      currentPosition: 19,
      order: 'first',
      direction: 'left',
      timer: null
    },
    {
      cssClass: 'log1',
      startPosition: 19,
      currentPosition: 19,
      order: 'second',
      direction: 'left',
      timer: null
    }


  ]
  
  
  

  

  
  
  
// ** GRID **
// need to add background RIVER & FOILAGE!!!

  function createGrid(startingFrogPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    obstacles.forEach(obstacle => {
      if (obstacle.order === 'first') {
        addObstacle(obstacle)
      }
    })
    startMovement()
    addFrog(startingFrogPosition)
    
    
    
  
  }

  function addFrog(position) {
    cells[position].classList.add(FrogClass)
  }
  function removeFrog(position) {
    cells[position].classList.remove(FrogClass)
  }

  function addObstacle(obstacle) {
    console.log(obstacle)
    cells[obstacle.currentPosition].classList.add(obstacle.cssClass)

  }
  function removeObstacle(obstacle) {
    cells[obstacle.currentPosition].classList.remove(obstacle.cssClass)
  }



  
  
  
// ** MOVING FROG **
    function handleKeyUp(event) {
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
    // **move obstacles**
  function moveObstacles(obstacle){
    removeObstacle(obstacle)
    if (obstacle.currentPosition % width === width - 1 && obstacle.direction === 'right') {
      obstacle.currentPosition = obstacle.startPosition
      addObstacle(obstacle)
      return
    }
    if (obstacle.currentPosition % width === 0 && obstacle.direction === 'left') {
      obstacle.currentPosition = obstacle.startPosition
      addObstacle(obstacle)
      return
    }
    if (obstacle.direction === 'left') {
      obstacle.currentPosition--
      
    } else {
      obstacle.currentPosition++
    }
    addObstacle(obstacle)
  }

  function startMovement(){
    obstacles.forEach(obstacle => {
      if (obstacle.order === 'first') {
        obstacle.timer = setInterval(() => moveObstacles(obstacle), 1000)
      } else {
        setTimeout(() => {
          addObstacle(obstacle)
          obstacle.timer = setInterval(() => moveObstacles(obstacle), 1000)
            
          
        }, 3000)
      }
      
    })
  }


    // function startGame() { need to make a function that's triggered by the START button and trigers ALL the obstacles to move AND works with timer.
    
    
    
    // also move FROG on LOG on top section

 
     

    

    

    //  ** TIMER **

    // time to start decreasing when START button clicked also needs to link to start of obstacle movements

    let timeRemaining = 60
    let timerId = null
    function handleStartTimer() {
      if (timerId) {
        clearInterval(timerId)
        timerId = null
      } else {
        timerId = setInterval(() => {
          timeRemaining--
          timeLeft.innerHTML = timeRemaining
          if (timeRemaining === 0) {
            clearInterval(timerId)
          }
        }, 60000)
      }
      

    }

    startButton.addEventListener('click', handleStartTimer)
    console.log(startButton)
    
    // **COLLISIONS/SCORING**
    // 10 points added for each obstacle avoided and 100 points for reaching lilypad at the end
    // trigger FROG to return to bottom of page and new FROG to appear on lilypad if succesful
    // FROG to dissapear and everything restart in the event of collision
    // 
    // 
    
    //  **LEVELS**
    // write function that repeats game at fater speed once all lilypads are full and adds number to LEVEL (upto 5?)

    

    
    
    
  






  
  document.addEventListener('keyup', handleKeyUp)
  

  createGrid(startingFrogPosition)

}

window.addEventListener('DOMContentLoaded', init)

