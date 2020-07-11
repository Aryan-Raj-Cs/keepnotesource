import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './note.css'

 const Note=(prop)=> {
    const [note,setNote] =useState(prop.obj)
    
   

   const deletenode=()=>{
       console.log(prop.id);
       prop.deleteiteam(prop.id);
 }

  
 const itemEvent = (event) => {
   const {name,value}=event.target;
   
     
     let obj=  {
          [name]:value
       }
          
   prop.change(obj,prop.id);


  };
 
   
    return (
 <>
<div className="notemain">
   <form>
       <input type="text" name="title" placeholder="Title" onChange={(e)=>{itemEvent(e)}}  value={prop.obj.title}   />
       <textarea  placeholder="Write A Note" name="text"  onChange={(e)=>{itemEvent(e)}} value={prop.obj.text}/>
      
       <Button onClick={deletenode} ><DeleteIcon/></Button>
     
       </form>
   
</div>
 </> 
 );
}

export default  Note;
