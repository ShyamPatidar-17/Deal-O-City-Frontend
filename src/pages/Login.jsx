import React, { useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmitHandler = async (event) => {
    event.preventDefault();


    try {

   if(currentState==='Sign up')
   {
    const response = await axios.post(backendUrl+"/api/user/register",{name,email,password})
    if(response.data.success)
    {
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
    }
    else{
      toast.error(response.data.message)
    }
   }

   else{
     const response = await axios.post(backendUrl+"/api/user/login",{email,password})
    if(response.data.success)
    {
      setToken(response.data.token)
      localStorage.setItem('token',response.data.token)
    }
    else{
      toast.error(response.data.message)
    }
   }
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }


  };

  useEffect(()=>{
    if(token)
    {
      navigate('/')
    }
  },[token])


  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === 'Sign up' && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter your Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Enter your Email"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Enter Password"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === 'Login' ? (
          <p className="cursor-pointer" onClick={() => setCurrentState('Sign up')}>
            Create Account
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => setCurrentState('Login')}>
            Login
          </p>
        )}
      </div>

      <button className="bg-black text-white font-light px-8 py-2 mt-4 hover:bg-green-500">
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
