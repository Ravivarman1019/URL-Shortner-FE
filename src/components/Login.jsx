import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const loginUser = {
      email,
      password
    };

    try {
      const res = await axios.post('/api/auth/login', loginUser);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
