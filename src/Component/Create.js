import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { postTodo } from '../MiddleWare/ToDoApi';

function Create() {
  const [task, setTask] = useState({
    taskName: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    try {
      e.preventDefault();
      const data = await postTodo(task)
      alert(data)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3"></div>


        <div className="col-md-6 card shadow-lg rounded p-2">
          <h1 className='text-center'>Add Task</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => { setTask({ ...task, taskName: e.target.value }) }} className="form-control" placeholder='enter task' />
            <input className='btn btn-primary my-2 d-block m-auto' type="submit" value="save"  />
          </form>
        </div>


        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default Create
