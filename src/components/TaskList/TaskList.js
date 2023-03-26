import React, { useState } from 'react'
import TodoCard from '../TodoCard/TodoCard';
const TaskList = (
  { 
    list,
    handleDelete,
    handleDone ,
    handleEdit
    }
  ) => {


  const [currentEdit , setCurrentEdit] = useState();

  return (
    <div>
        {list.map(task => <TodoCard 
        handleDelete={handleDelete}
        handleDone={handleDone}
        handleEdit={handleEdit}
        handleSelectCurrent={setCurrentEdit}
        iEdit={task.id === currentEdit}
        key={task.id}
        task={task} />)}
    </div>
  )
}

export default TaskList