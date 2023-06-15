import React, { useRef } from 'react'
import { dragStart, dragEnd } from './singleComponentHandlers'
import styles from './SingleComponent.module.css'

const SingleComponent = ({ setCurrentComponent, numeric }) => {
  const singleComponentRef = useRef(null)
  //singleRef will take html of grabbed component that will be passed to parent using setState

  return (
    <div
      className={styles.container}
      ref={singleComponentRef}
      tabIndex='1'
      draggable
      onDragStart={(e) => {
        dragStart(e)
        //onDragStart take html of selected component, intention is to be append as html div in Box
        setCurrentComponent({
          singleComponentRef: singleComponentRef.current,
        })
      }}
      onDragEnd={dragEnd}
    >
      <div className={styles.content}>
        <h4>Name</h4>
        <h5 className={styles.numeric}>{numeric}</h5>
      </div>
    </div>
  )
}

export default SingleComponent
