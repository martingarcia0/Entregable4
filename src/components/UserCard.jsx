import React from 'react'
import "./styles/userCard.css"
const UserCard = ({user,deleteUserById,setUpdateInfo,setFormIsClose}) => {
  const handleEdit=()=>{
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  return (
    <article>
        <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user__list'>
            <li className='user__item'><span className='user__span'>Email {user.email}</span></li>
            <li className='user__item'><span className='user__span'>Birthday {user.birthday}</span></li>
        </ul>
        <footer className='user__footer'>
          <button className='user__btn' onClick={()=>deleteUserById(user.id)}>
            <i  className="user__trash fa-solid fa-trash"></i>
          </button>
          <button className='user__btn' onClick={handleEdit}>
            <i  className="user__edit fa-solid fa-pen-to-square"></i>
          </button>
        </footer>
    </article>
  )
}

export default UserCard