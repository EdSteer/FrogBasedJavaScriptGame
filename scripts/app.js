function init() {

  const grid = document.querySelector('.grid')
  
  const width = 10
  const cellCount = width * width
  const cells = []

  const startingFrogPosition = 0
  let currentFrogPosition = 0
  const FrogClass = 'frog'

  function createGrid(startingFrogPosition) {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    addFrog(startingFrogPosition)
  }

  function addFrog(position) {
    cells[position].classList.add(FrogClass)
  }

  function removeFrog(position) {
    cells[position].classList.remove(FrogClass)
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
