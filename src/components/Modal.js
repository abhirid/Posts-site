import React from 'react'
import classes from './Modal.module.css'

export default function Modal({children, onClosed}) {
    //open default is true so "open" prop  is requried by default dialog element to make sure its visible
    //   here props.children can be used but {} 
  return (
    <>
    <div className={classes.backdrop} onClick={onClosed}/> {/*this is background */}
    <dialog open className={classes.modal}>{children}</dialog> 
    
    
    </>
    
    
  )
}
