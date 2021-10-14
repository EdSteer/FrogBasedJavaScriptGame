function init() {

  // ** VARIABLES

  const grid = document.querySelector('.grid')
  const startButton = document.querySelector('#start')
  const scoreDisplay= document.querySelector('#score-display')
  const livesDisplay = document.querySelector('#lives-display')
  const timeLeft = document.querySelector('#timer')
  // const gameOverPage = document.querySelector('#gameOver')
  
 
  let livesRemaining = 3
  let score = 0
  

  
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
      cssClass: 'croc',
      startPosition: 19,
      currentPosition: 19,
      order: 'second',
      direction: 'left',
      timer: null
    },
    {
      cssClass: 'croc',
      startPosition: 33,
      currentPosition: 33,
      order: 'first',
      direction: 'right',
      timer: null
    },
    {
      cssClass: 'bird1',
      startPosition: 30,
      currentPosition: 30,
      order: 'second',
      direction: 'right',
      timer: null
    }



  ]

  const lilypads = [1, 4, 7]

  const rivers = [0, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39]

  const roads = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89]
  
  
  

  

  
  
  
// ** GRID **


  function createGrid(startingFrogPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
      console.log(cell)
    }
    obstacles.forEach(obstacle => {
      if (obstacle.order === 'first') {
        addObstacle(obstacle)
      }
    })

    // lilypads.forEach(lilypad => {
    //   addLily(lilypad)
    // })
    // riverAndFoilage.forEach(riverFoilage => {
    //   addriverFoilage(riverFoilage)
    // })
    addLily()
    startMovement()
    addFrog(startingFrogPosition)
    // scorePoints()
    addRiver()
    addRoad()
    
  }
  
  
  // function addLily(position) {
  //   cells[lilypad.currentPosition].classList.add(lilypad.cssClass)
  // }

  function addLily() {
    lilypads.forEach(lily => cells[lily].classList.add('lilypad'))
    }

  function addRiver() {
    rivers.forEach(river => cells[river].classList.add('river')) 
    }

  function addRoad() {
    roads.forEach(road => cells[road].classList.add('road'))
  }
    
  
  function addFrog(position) {
    cells[position].classList.add(FrogClass)
  }
  function removeFrog(position) {
    cells[position].classList.remove(FrogClass)
  }

  function addObstacle(obstacle) {    
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
    const collision = currentFrogPosition === obstacle.currentPosition
    if (collision) frogCollision()

   
    
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
  //  ** TIMER/SCORE/LIVES **

  // ** START GAME TIMER
let timeRemaining =60
let timerId = null

  function startTimer() {
    
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
      }, 1000)
    }
  }
  
   // **POINTS**
    // function scorePoints(event) {
    //   if (event.target.classList.contains('lilypad')) {
    //     event.target.clasllist.remove('frog')
    //     score += 100
    //     scoreDisplay.innerText = score
    //     return
    //   }
    // }
      
      
      // removeFrog(currentFrogPosition)
      // currentFrogPosition = startingFrogPosition
      // addFrog(currentFrogPosition)
      // score + 100
      // scoreDisplay.innerText = score
    
    
  // }
  // scorePoints()
  
  
  // **COLLISIONS**

    function frogCollision(event) {
      removeFrog(currentFrogPosition)
      currentFrogPosition = startingFrogPosition
      addFrog(currentFrogPosition)
        livesRemaining--
        livesDisplay.innerText = livesRemaining
      
    }

    // **GAMEOVER**

    

    // function gameOverPage() {
    //   if (livesDisplay === 0 || timeLeft === 0) {
    //   // go to gameOverPage???
    // }

  startButton.addEventListener('click', startTimer)
    

    

    
    
    
  






  
  document.addEventListener('keyup', handleKeyUp, frogCollision)

  // document.addEventListener('keyup', handleKeyUp, scorePoints, frogCollision, gameOverPage)
  

  createGrid(startingFrogPosition)

}

window.addEventListener('DOMContentLoaded', init)

