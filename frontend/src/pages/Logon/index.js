import React, {useState} from 'react';
//Use Link instead of the tag <a> because using Link the page does not refresh
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

//Import images from the folder assets
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon(){

  const[id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('session', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile')

    }catch (err){
      alert('Fail to login')
    }

  }

    return (
      <div className="logon-container">
          <section className="form">
          <img src={ logoImg } alt="Be The Hero"/>

          <form onSubmit = {handleLogin}>
            <h1>Logon</h1>
            <input 
            value = {id}
            onChange = {e => setId(e.target.value)}
            type="text" 
            placeholder="Your ID"/>

            <button className="button" type="submit">Login</button>

            <Link className="back-link" to = "/register">
                <FiLogIn size={16} color="#E02041" />
                Subscribe
            </Link >

          </form>

          </section>

          <img src={ heroesImg } alt="Heroes"/>

      </div>   

        
    );

}


export default Logon;