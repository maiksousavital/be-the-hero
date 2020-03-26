import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

function Register(){
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');
    const history = useHistory();

   async function handleRegister(e){
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };
       try{
        const response = await api.post('ongs', data);
        alert(`Your id ${response.data.id}`)
        history.push('/');

       }catch (err){
           alert('Error');
       }
    }

    return(
     <div className="register-container">
         <div className="content">
            <section>
            <img src={ logoImg } alt="Be The Hero"/>
            <h1>Register</h1>
            <p>Register and help people to find incidents of their ONG.</p>

            <Link className="back-link" to = "/">
                <FiArrowLeft size={16} color="#E02041" />
                I don't have an account
            </Link >

            </section> 
            <form onSubmit={ handleRegister }>
                <input 
                value = {name} 
                onChange = {e => setName(e.target.value)} 
                type="text" 
                placeholder="ONG Name"/>

                <input 
                value = {email} 
                onChange = {e => setEmail(e.target.value)} 
                type="email" 
                placeholder="Email"/>

                <input 
                value = {whatsapp} 
                onChange = {e => setWhatsapp(e.target.value)} 
                type="text" 
                placeholder="Whatsapp"/>

                <div className="input-group">
                  <input 
                  value = {city} 
                  onChange = {e => setCity(e.target.value)} 
                  type="text" 
                  placeholder="City"/>

                  <input 
                  value = {uf} 
                  onChange = {e => setUf(e.target.value)} 
                  type="text" 
                  placeholder="Uf" style = {{ width: 80 }}/>
                </div>
                <button className="button" type="submit" >Subscribe</button>
            </form>
         </div>
     </div>
    );

}

export default Register;