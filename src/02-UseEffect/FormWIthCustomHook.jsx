import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
//import { Message } from './Message';

export const FormWithCustomHook = () => {
  const {onResetForm,onInputChange,username,email,password}=useForm({
    username: '',
    email: '',
    password:''
  });


  //const{username,email,password}=formState;


//   useEffect(() => {
//     console.log('useEffect');
//   }, [formState])
  
//   useEffect(() => {
//     console.log('useEffect');
//   }, [email])
//   useEffect(() => {
//     console.log('useEffect');
//   }, [])

  return (
    <>
      <h1>Formulario con customHook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />
       {/* {

            (username==='Diego2')&&<Message/>

       }  */}
      <input
        type="email"
        className="form-control mt-2"
        placeholder="example@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className='btn btn-primary mt-2'>Reset</button>
    </>
  );
};
