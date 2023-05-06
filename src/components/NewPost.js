import { useState } from 'react';
import classes from './NewPost.module.css';



function NewPost({onCancel,onAddPost}) {
  const[enteredBody, setEnteredBody]=useState('');
  const[enterAuthor,setAuthor]=useState('');
  
  function onBodyHandler(event){
      setEnteredBody(event.target.value) 
  }
  
  function onAuthorHandler(event){
    setAuthor(event.target.value) 
 }
 function submitHandler(event){
  event.preventDefault();
  const postData={
    body:enteredBody,
    author:enterAuthor
  }
  onAddPost(postData)
 onCancel()
 }
 
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyHandler} />
        
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onAuthorHandler}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>  {/*by default both button submit the form to prevent this we type button so it will not submit */}
        <button>Submit</button> {/* here type submit can be given not required as bydefault it is submit */}
      </p>
    </form>
  );
}

export default NewPost;