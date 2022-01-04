import {useEffect, useState} from 'react'

function AddForm({tasks,setTask}) {


const [formState,setFormState]=useState(
    {
        id:0,
        text:"",
        day:"",
        reminder:true,
    }
)


const add=(e)=>{
    e.preventDefault()
    //console.log(formState)
    const newId=tasks.length==0?0:Math.max(...tasks.map((t)=>t.id))+1
    setTask([...tasks,{...formState,id:newId}])

}
    return (
        <form>
           <div><input className="input" type="text" placeholder="Task" onChange={(e)=>setFormState({...formState,text:e.target.value})}/></div>
           <div><input className="input" type="text" placeholder="Day" onChange={(e)=>setFormState({...formState,day:e.target.value})}/></div>
           <div><label>Reminder</label><input checked type="checkbox" onChange={(e)=>setFormState({...formState,reminder:e.target.checked})}/></div>
           <div><input className="submit" type="submit" onClick={add}/></div>


        </form>

    );
  }
  
  export default AddForm;
  