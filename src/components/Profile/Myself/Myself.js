import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Myself.css';
import picture from './profile picture.jpg';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api'
});

const Myself = (props) => {

  const [data, setData] = useState({});

  useEffect(() => {

    const fetch = async () => {
      var profile = await axios.get('http://localhost:5000/api/myself/123ABC');
      setData(profile.data);
      console.log(profile.data);
    };

    fetch();
  }, []);

  let Info = (
  <div className="myself-descrip">
  <h3>{data.fullName}</h3>
  <p>{data.description}</p>
  </div>
  )
  
  return (
<div className="myself card w-50">
  <div className="card-header">
      <img className="myself-picture border border-dark" src={picture} alt="" />

        {Info}
      
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