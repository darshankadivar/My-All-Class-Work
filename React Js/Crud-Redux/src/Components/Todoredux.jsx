import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addData, deleteData, updateData } from '../Fetucher/TodoSlice';

const Todoredux = () => {
    const [formData, setFormData] = useState ({})
    const [editIndex, setEditEndex] =useState(null)

    const disPatch = useDispatch()

    const Data = useSelector((state) => {
        return state.todokey.Data
    })

    const handleChanges = ((e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    })


  const handleAddData = ((e) => {
    e.preventDefault();

    if (editIndex == null) {
      let obj = { id: Date.now(), ...formData }
      disPatch(addData(obj))
      setRecord([...record,obj])
    } else {
      disPatch(updateData({ id: editIndex, formData }))
    }

    setEditEndex(null)
    setFormData({
      name: "",
      subject: ""
    })
  })

    const handleDelete = ((id) => {
        disPatch(deleteData(id))
    })

    const handleEdit = ((id) => {
        let singleData = Data.find((item) => item.id == id)
        setFormData({
            name : singleData.name,
            subject : singleData.subject
        })
        setEditEndex(id)
    })
  return (
    <div>
      <h1>CRUD REDUX</h1>

      <form onSubmit={handleAddData}>
        <input type="text" name='name' value={formData.name} placeholder='Enter Name' onChange={handleChanges} />
        <input type="text" name='subject' value={formData.subject} placeholder='Enter Subject' onChange={handleChanges} />
        <button type='submit'>{editIndex == null ? "Add Data" : "Update Data"}</button>
      </form>

      {
        Data.map((e,i)=> {
            return <ul key={i}>
                <li>{i+1}</li>
                <li>{e.id}</li>
                <li>{e.name}</li>
                <li>{e.subject}</li>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
                <button onClick={() => handleEdit(e.id)}>Edit</button>
            </ul>
        })
      }
    </div>
  )
}

export default Todoredux
