import Header from './components/Header'
import Tasks from './components/Tasks'
import AddForm from './components/AddForm'
import './App.css'

import {useState} from 'react'

function App() {
const [tasks,setTask]=useState([
    {
        id:1,
        text:"Task 1",
        day:"Monday",
        reminder:true,
    },
    {
        id:2,
        text:"Task 2",
        day:"Monday",
        reminder:false,
    },

]);
const [isFormVisible,toggleForm]=useState(false)
  return (
    <div className="App">
      <Header isFormVisible={isFormVisible} toggleForm={toggleForm}/>
      {isFormVisible && <AddForm tasks={tasks} setTask={setTask} />}
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
