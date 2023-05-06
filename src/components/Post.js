import React from 'react'
import classe from './Post.module.css';

export default function Post(props) {
    
  return (
    <li className={classe.post}>
       <span><i className="fa-solid fa-trash-can" onClick={(e)=>
      {
        props.delete(props.index)
      }}></i></span>
        <p className={classe.author}>{props.author}</p>
      <p className={classe.body}>{props.body}</p>

    </li>
  )
}
