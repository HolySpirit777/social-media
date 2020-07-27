import React, { useEffect } from 'react';
import axios from 'axios';

import './Myself.css';
import picture from './profile picture.jpg';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const Myself = (props) => {

  useEffect(() => {
    const fetch = async () => {
      const profile = await instance('/myself/asasfasfasf');
    }

    fetch();
  }, []);
  
  return (
<div className="myself card w-50">
  <div className="card-header">
      <img className="myself-picture border border-dark" src={picture} alt="" />

      <div className="myself-descrip">
      <h3>Wilson Junior Toribio Hernandez</h3>
      <p>Mi vision es cambiar al mundo con DIOS dentro de mi.</p>
      </div>

      
  </div>
  <div className="card-body">
    <h5 className="card-title">Biography</h5>
    <p className="card-text">Naci el 12 de Diciembre de 1994, en un barrio llamado Buenos Aires, barrio
    de personas pobres y donde habian delicuentes y todo tipo de personas. Mi vida empieza en ese lugar
    mi vision de la vida se vio en ese ambiente si saber el inmenso mundo que existia el cual era mas
    diverso y complejo. <br/><br/>
    
    Despues conoci que el mundo es algo interesante donde los limites te los pones tu y la expresion misma
    de la complejidad es algo definido en la limitacion.
    </p>
  </div>
</div>
    )
}

export default Myself;