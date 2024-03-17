  import { DndContext, closestCorners } from '@dnd-kit/core'
import './App.css'
import { useState } from 'react'
 import { Cards } from './components/cards/Cards';
import { arrayMove } from '@dnd-kit/sortable';
 
export default function App() {
  const [tasks,setTasks]=useState([
    {id:1, title:"Im the first element"},
{id:2, title:"Im the second element"},
{id:3, title:"Im the third element"},
{id:4, title:"Im the forth element"},]);

const getTaskPos =id => tasks.findIndex(task=> task.id === id)

const handleDragEnd = (event) =>{
  const {active, over} = event;
   if (active.id ===over.id) return;
   setTasks((task) =>{
    const originalPos= getTaskPos(active.id);
    const newPos = getTaskPos(over.id);
    return arrayMove(task,originalPos, newPos);
   })
   
}

 
  return (
     <div>
      <h1 className="text-xl m-4 text-center">Welcome</h1>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
          
          <Cards task={tasks} ></Cards>
       </DndContext>
     </div>
  )
}

 