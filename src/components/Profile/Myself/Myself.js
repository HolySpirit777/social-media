import React from 'react';
import './Myself.css';
import picture from './profile picture.jpg';

const Myself = (props) => {
    return (
<div class="myself card w-50">
  <div class="card-header">
      <img className="myself-picture border border-dark" src={picture} alt="" />

      <div className="myself-descrip">
      <h3>Wilson Junior Toribio Hernandez</h3>
      <p>Mi vision es cambiar al mundo con DIOS dentro de mi.</p>
      </div>

      
  </div>
  <div class="card-body">
    <h5 class="card-title">Biography</h5>
    <p class="card-text">Naci el 12 de Diciembre de 1994, en un barrio llamado Buenos Aires, barrio
    de personas pobres y donde habian delicuentes y todo tipo de personas. Mi vida empieza en ese lugar
    mi vision de la vida se vio en ese ambiente si saber el inmenso mundo que existia el cual era mas
    diverso y complejo.</p>
  </div>
</div>
    )
}

export default Myself;