import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const { username, firstName, lastName, email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      username,
      firstName,
      lastName,
      email,
      password
    };

    try {
      const res = await axios.post('/api/auth/register', newUser);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <form onSubmit={e => onSubmit(e)}>
      <input type="text" name="username" value={username} onChange={e => onChange(e)} placeholder="Username" required />
      <input type="text" name="firstName" value={firstName} onChange={e => onChange(e)} placeholder="First Name" required />
      <input type="text" name="lastName" value={lastName} onChange={e => onChange(e)} placeholder="Last Name" required />
      <input type="email" name="email" value={email} onChange={e => onChange(e)} placeholder="Email" required />
      <input type="password" name="password" value={password} onChange={e => onChange(e)} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
