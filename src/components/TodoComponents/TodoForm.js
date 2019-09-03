import React from 'react';

const TodoForm = props =>{
  return(
    <form>
      <input placeholder="add task" onChange={props.updateTodo} />
      <button>Add Task</button>
      <button>Clear Completed</button>
    </form>
  );
};

export default TodoForm;