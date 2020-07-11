import React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import  CreateNote from "./CreateNote.js"
import Note from './Note.js'


function App() {
  const [total, setTotal] = useState([]);
  const add=(note)=>{
    setTotal((data)=>{
      if(note.title.length>0 && note.text.length>0)
     return [...data,note];
     else{
       return [...data];
     }

  })
  }


  const ondelete=(id)=>{
   
    setTotal((total)=>{
        
  let newt= total.filter((val,index)=>{
         if(id==index){
          return false;
         }
         else{
             return true;
         }
      })
      //console.log(newt)
      return newt;
    })
  
   }


   const edit=(obj,id)=>{
   alert(obj,id)
  }

  return (
    <div>
      
      <Header/>
      <CreateNote pass={add}/>
<div className="mainflex">

{

total.map((obj,index)=>{
   
console.log(obj)
return <Note  key={index} id={index} deleteiteam={ondelete} obj={obj} change={edit} />;
})

}
</div>

    </div>
  );
}

export default App;
