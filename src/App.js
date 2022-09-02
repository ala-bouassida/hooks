import React, { useState } from 'react' ;

 const App = () => {
 
  const [todo, setTodo] = useState ([
    {
      id: Math.random(),
      task: "learn ReactJs",
      isDone: false
    },
    {
      id: Math.random(),
      task: "learn Redux",
      isDone: false
    },
    {
      id: Math.random(),
      task: "learn Express Js",
      isDone: false
    },
  ])

  const handleDelete = (id) => {
    setTodo(
      todo.filter((el) => el.id !=id )
    )
  };

  const handleComplete = (id) => {
    setTodo(
      todo.map((el) => el.id === id? {...el,isDone: !el.isDone} : el)
    )
  }

  return (
    <div style={{textAlign:"center"}}>
     {todo.map((el) =>(
      <div id='div'>
      <p>{el.id}</p>
      <h2>{el.task}</h2>
      <button onClick={()=> handleDelete(el.id)}>Delete task</button>
      <button onClick={()=> handleComplete(el.id)}>Task completed</button>
      </div>
     ))}
    </div>
  )
}
export default  App ;