import React, { useState } from 'react'
import Post from './Post'
import classe from './PostList.module.css';
import NewPost from './NewPost';
import Modal from './Modal';


export default function PostList({isVisible,isNotVisible}) {

 //et modelContent; //undefinded null
 //f(modalIsVisible){
 // modelContent=
 //   <Modal onClosed={hideModalHandler}>
 // <NewPost onBodyChange={onBodyHandler} 
 //          onAuthorChange={onAuthorHandler}/>
 //  </Modal>
 // };
 const[posts,setPosts]=useState([]);
 function addPostHandler(postData){
  setPosts([postData, ...posts])  //any existing posts arent lost we use spread opertor to spread our existing post into this new array
 
 // if new state depend on old state use function form for updating state you get the old state automatically
  //new post as first element  in this array existing post comes after
 }
 const deletItem=(index)=>{
  // const updatedItem =posts.filter((elem,i)=>{
  //   return i !== index;
  // })
  // setPosts(updatedItem);
  
  let newList=[...posts];
  newList.splice(index,1)
  setPosts([...newList])
 }

  
  return (
    <>
    {/*modelContent/*/}
    {/*modalIsVisible ? (
    <Modal onClosed={hideModalHandler}>
    <NewPost onBodyChange={onBodyHandler} 
             onAuthorChange={onAuthorHandler}/>
    </Modal>) : false*/}
     {isVisible && ( <Modal onClosed={isNotVisible}>
    <NewPost onCancel={isNotVisible} onAddPost={addPostHandler}/>
     </Modal>)}
    {posts.length > 0 && (
           <ul className={classe.posts}>
           {posts.map((post,index)=><Post key={post.body} index={index} author={post.author} body={post.body} delete={deletItem}/>)}
          

               </ul>
    ) }
    {posts.length === 0 &&(
      <div style={{textAlign:'center',color:'white'}}>
        <h2>There are no posts yet.</h2>
        <p>Starting adding some!</p>
      </div>
    )

    }
    
    </>
  )
  }
