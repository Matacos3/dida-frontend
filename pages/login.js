import React, { useState } from 'react';
import styles from '../styles/Login.module.css';

import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //declaring router const 

  const router = useRouter()

  //setting errors
  const [emailError, setEmailError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here

    console.log("soummission du formulaire")
    //creatinsg object with user information

    const connectInfos = {
      email : email,
      password : password
    }

    console.log(connectInfos)
    router.push("/admin")
  };

  const handleBlurMail = () => {
    console.log("blur")
    //vérification de si c’est bien un mail
    if (!email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
      setEmailError(true)
    } else{
      setEmailError(false)
    }
  }

  return (
    <div className={styles.main}>

      <div className={styles.container}>
        <h4>Login</h4>
        <form onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlurMail()}
            required
          />
          <div>
          <div className={styles.mailError}>
            {emailError&&"Merci de bien vouloir rentrer une adresse mail valide "}
          </div>
          </div>
          <label className={styles.label} htmlFor="password">Mot de passe</label>
          <input className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn1" type="submit">Se connecter</button>
        </form>
      </div>
    </div>
  );
}
