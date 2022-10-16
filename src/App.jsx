
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
const baseURL = 'http://144.126.218.162:9000'
function App() {
 
  const [users, setUsers] = useState()
  //Pasar info de UserCard a Form User
  const [updateInfo, setUpdateInfo] = useState()
  const getAllUsers=()=>{
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res=>setUsers(res.data))
      .catch(err=>console.log(err))
  }
  const [formIsClose, setFormIsClose] = useState(true)
  useEffect(() => {
    getAllUsers()
  }, [])
  const createNewUser=data=>{
    const URL=`${baseURL}/users/`
    axios.post(URL,data)
      .then(res=>{
        console.log(res.data)
        getAllUsers()
      })
      .catch(err=>console.log(err))
  }
  ///Para Eliminar un Usuario
  const deleteUserById=id=>{
    const URL=`${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res=>{
        console.log(res.data)
        getAllUsers()
      })
      .then(err=>console.log(err))
  }
///ACtualizar Usuario
const updateUserbyId=(id,data)=>{
  const URL=`${baseURL}/users/${id}/`
  axios.patch(URL,data)
    .then(res=>{
      console.log(res.data)
      getAllUsers()
    })
    .catch(err=>console.log(err))
}
const handleOpenForm=()=>{
  setFormIsClose(false)
}
  return (
    <div className="App">
      <div className='App__container-title'>
        <h1 className='App__title'>Users CRUD</h1>
        <button onClick={handleOpenForm} className='App__btn'>Create a New User</button>
      </div>
      <div className={`form-container ${formIsClose && "disable__form"}`}>
          <FormUsers createNewUser={createNewUser}
          updateInfo={updateInfo}
          setUpdateInfo={setUpdateInfo}
          updateUserbyId={updateUserbyId}
          setFormIsClose={setFormIsClose}
          />
      </div>
      <div className='users-container'>
          {
            users?.map(user=>(
              <UserCard 
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              updateUserbyId={updateUserbyId}
              setFormIsClose={setFormIsClose}/>
            ))
          }
      </div>
    </div>
  )
}

export default App
