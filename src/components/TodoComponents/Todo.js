import React from 'react';

const Todo = props =>{
  return(
    <div>
      <h3>Todo Tasks</h3>
      <div>{props.task}</div>
  </div>
  )
};

export default Todo;