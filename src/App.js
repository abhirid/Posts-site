
import { useState } from 'react';
import './App.css';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';


function App() {
    const[modalIsVisible , setmodalIsVisible]=useState(false)
   
     function showModalHandler(){
      setmodalIsVisible(true)
     }    
    function hideModalHandler(){
      setmodalIsVisible(false)
    }
  
  return(
         <>
         
         <MainHeader onCreatePost={showModalHandler}/>
          <main>
              <PostList isVisible={modalIsVisible} isNotVisible={hideModalHandler}/>
          </main>
          
         
         </>
        

       
        
  )
   
  
 
 

  
  
    
  
}

export default App;
