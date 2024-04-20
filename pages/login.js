import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={styles.main}>

    <div className={styles.container}>
      <h4>Login</h4>
      <form onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">Email</label>
        <input  className={styles.input}
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        <label  className={styles.label}htmlFor="password">Mot de passe</label>
        <input className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        <button className="btn1"type="submit">Se connecter</button>
      </form>
          </div>
    </div>
  );
}
