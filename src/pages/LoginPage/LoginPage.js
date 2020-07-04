import React, { useState } from 'react';

import './LoginPage.scss';

const LoginPage = () => {
  const [fields, setFields] = useState({
    name: '',
    password: ''
  });

  const onChange = (e) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(`name: ${fields.name}, passwords: ${fields.password}`);
  }

  return (
    <div className='login-page'>
      <h1 className='login-page__title'>Note Keeper</h1>
      <form className='login-page__form' onSubmit={ onSubmit }>
        <h2 className='login-page__form-title'>Authorization</h2>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text' 
          id='name' 
          name='name' 
          placeholder='Albert Einstein'
          className='login-page__input'
          onChange={ onChange }
        />
        <label htmlFor='password'>Password:</label>
        <input 
          type='password' 
          id='password' 
          name='password'
          className='login-page__input'
          onChange={ onChange } 
        />
        <button type='submit' className='login-page__btn'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;