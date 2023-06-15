import React, { useRef } from 'react'
import { dragDrop, dragEnter, dragLeave, dragOver } from './boxHandlers'
import styles from './Box.module.css'

const div = document.createElement('div')
//this variable will be used in append method as second argument

//Box will take html of current component as prop, and append it to box on drop
//or bring component back to parent on leave
const Box = ({ currentComponent }) => {
  const boxRef = useRef(null)
  //boxRef - in Box component SingleComponent will be dropped on drop
  //or grabbed component will be back to parent on leave

  return (
    <div
      className={styles.box}
      ref={boxRef}
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={(e) => {
        dragLeave(e)
        //if grabbed component will not finish in Box, then will stay in parent
        boxRef.current.parentElement.append(
          currentComponent.singleComponentRef,
          div
        )
      }}
      onDrop={(e) => {
        dragDrop(e)
        //append grabbed component to Box
        boxRef.current.append(currentComponent.singleComponentRef, div)
      }}
    ></div>
  )
}

export default Box
