import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Diego',
    email: 'diego@google.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
       {

            (username==='Diego2')&&<Message/>

       } 
      <input
        type="email"
        className="form-control mt-2"
        placeholder="diego@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
