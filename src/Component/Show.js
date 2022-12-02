import React, { useEffect, useState } from 'react'
import { BsPen, BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { deleteTodo, getTodo } from '../MiddleWare/ToDoApi';

function Show() {
  const [task, setTask] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    try {
      const data = await getTodo();
      setTask(data);
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleEdit = (el) => {
    navigate('/update', { state: el })
  }

  const handleDelete = async (_id) =>{
    const data = await deleteTodo(_id);
    alert(data)
    getData();
  }

  return (
    <div className="container">
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>task name</th>
          </tr>
        </thead>
        <tbody>
          {
            task.map((el) => (
              <tr key={el._id}>
                <td>{el.taskName}</td>
                <td>
                  <button className='btn btn-primary mx-3' onClick={() => { handleEdit(el) }}><BsPen className='fs-5' /></button>
                  <button className='btn btn-danger' onClick={()=>{handleDelete(el._id)}}><BsTrash className='fs-5' /></button>
                </td>
              </tr>

            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Show
