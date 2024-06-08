
import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Axios.post('http://localhost:5000/login', {
        email,
        password
      });
      console.log(response.data);
      setMessage(response.data); 
    } catch (error) {
      console.error(error);
      setMessage("Error occurred. Please try again."); 
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f0f0f0' }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>BOOK THE TICKET</h1>
      <form style={{ width: '300px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
        <input style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }} type="email" placeholder="EMAIL_ADDRESS" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <br /><br />
        <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
        <input style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px' }} type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <input style={{ width: 'calc(100% - 20px)', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '3px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }} name="Register" type="submit" value="register" />
      </form>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>{message}</div> 
    </div>
  );
}

export default App;
