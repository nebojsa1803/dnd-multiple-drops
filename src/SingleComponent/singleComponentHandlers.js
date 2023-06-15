//when component is grabbed give it inner border,
//and since is grabbed remove component from the old place
//setTimout will make delay, not component disappearing, it happens after move
export const dragStart = (e) => {
  e.target.firstChild.style.border = '1px dotted white'
  setTimeout(() => {
    e.target.style.display = 'none'
  }, 0)
}

//when component is released, bring her back, not dispaly none
export const dragEnd = (e) => {
  e.target.firstChild.style.border = 'none'
  e.target.style.display = 'flex'
}
