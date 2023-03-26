import React, { useState } from 'react';
import classes from './todocard.module.css';

const TodoCard = ({ 
  task, 
  handleDelete,
  handleDone,
  handleEdit,
  handleSelectCurrent,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [isDone, setIsDone] = useState(false);

  const handleSave = () => {
    handleEdit({
      ...task,
      title: newTitle,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewTitle(task.title);
    setIsEditing(false);
  };

  const handleDoneClick = () => {
    setIsDone(!isDone);
    handleDone(task.id);
  };

  if (isEditing) {
    return (
      <div>
        <input 
          name='edit'
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={classes.todoCard}>
      <h5>
        <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      </h5>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDoneClick}>{isDone ? 'Undone' : 'Done'}</button>
      <button onClick={() => handleDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TodoCard;