import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

function NewIncident(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleAddNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };
        try{
         await api.post('incidents',data, {
             headers: {
                 Authorization: ongId
             }
         });
         history.push('/profile');
        }catch(err){
            alert('Fail to add new incident');
        }

    }

    return(
        <div className="new-incident-container">
         <div className="content">
            <section>
            <img src={ logoImg } alt="Be The Hero"/>
            <h1>Add New Incident</h1>
            <p>Describe the incident in details to find a hero to solve it.</p>

            <Link className="back-link" to = "/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Go back to home page
            </Link >

            </section> 
            <form onSubmit={handleAddNewIncident}>
                <input value = {title} onChange = {e => setTitle(e.target.value)} type="text" placeholder="Incident title"/>
                <textarea placeholder="Description"/>
                <input type="text" placeholder="Value"/>
                
                <button className="button" type="submit" >Subscribe</button>
            </form>
         </div>
     </div>
    );

}

export default NewIncident;