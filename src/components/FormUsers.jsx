import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles/formUsers.css"
const defaultValues={
  email:"",
  password:"",
  first_name:"",
  last_name:"",
  birthday:""
}
const FormUsers = ({createNewUser,updateInfo,updateUserbyId,setUpdateInfo,setFormIsClose}) => {
  const{register,handleSubmit,reset}=useForm()

  const submit=data=>{
    if(updateInfo){
      //Update
      updateUserbyId(updateInfo.id,data)
      setUpdateInfo()
    }
    else{
      createNewUser(data)
    }
    reset(defaultValues)
    setFormIsClose(true)
  }
  useEffect(() => {
    if(updateInfo){
      reset(updateInfo)
    }
    
  }, [updateInfo])
  const handleCloseForm=()=>{
    setFormIsClose(true)
  }
  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <i onClick={handleCloseForm} className="form__x fa-solid fa-circle-xmark"></i>
      <h2 className='form__tittle'>{updateInfo?"Edit User": "New User"}</h2>
      <div className='form__div'>
        <label className='form__label' htmlFor="email">Email</label>
        <input className='form__input' placeholder='Enter your Email' type="text" id='email'{...register("email")}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="password">Password</label>
        <input className='form__input' placeholder='Enter your Password' type="password" id='password'{...register("password")}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="first_name">First Name</label>
        <input className='form__input' placeholder='Enter your First Name' type="text" id='first_name' {...register("first_name")}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="last_name">Last Name</label>
        <input className='form__input' placeholder='Enter your Last Name' type="text" id='last_name'{...register("last_name")}/>
      </div>
      <div className='form__div'>
        <label className='form__label' htmlFor="birthday">Birthday</label>
        <input className='form__input'  type="date" id='birthday'{...register("birthday")}/>
      </div>
      <button className='form__btn'>{updateInfo?"Update": "Create"}</button>
    </form>
  )
}

export default FormUsers