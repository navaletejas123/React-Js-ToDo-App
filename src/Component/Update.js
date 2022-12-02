import React, { useEffect, useState } from 'react'
import { useLocation , useNavigate} from 'react-router-dom'
import {patchTodo} from '../MiddleWare/ToDoApi'

function Update() {
  const location = useLocation();
  const el = location.state

  useEffect(() => {
    setTask({ _id: el._id, taskName: el.taskName })
  }, [])

  const [task, setTask] = useState({
    _id: "",
    taskName: ""
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await patchTodo(task);
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
          <h1 className='text-center'>Update Task</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={task.taskName} onChange={(e) => { setTask({ ...task, taskName: e.target.value }) }} className="form-control" placeholder='enter task' />
            <input className='btn btn-primary my-2 d-block m-auto' type="submit" value="Update" />
          </form>
        </div>


        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default Update
