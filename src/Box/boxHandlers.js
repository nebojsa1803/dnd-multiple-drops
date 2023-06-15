export const dragOver = (e) => {
  e.preventDefault()
}

export const dragEnter = (e) => {
  e.preventDefault()
  e.target.style.backgroundColor = '#e2e0ff'
}

export const dragLeave = (e) => {
  e.target.style.backgroundColor = '#c1beff'
}

export const dragDrop = (e) => {
  e.target.style.backgroundColor = '#c1beff'
}
