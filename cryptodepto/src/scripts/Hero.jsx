import React from 'react';
import './styles/Hero.css';
import './styles/HeroAnimations.css';
import Suelo from '../assets/suelo2.png';
import Euno from '../assets/euno.png';
import Edos from '../assets/edos.png';
import Etres from '../assets/etres.png';
import Ecuatro from '../assets/ecinco.png';

const hero = () => {
  return (
<div>
    <img src={Suelo} className="suelo" alt='Suelo'/>
    <img src={Euno} className="edificiouno" alt='edificio'/>
    <img src={Edos} className="edificiodos" alt='edificio'/>
    <img src={Etres} className="edificiotres" alt='edificio'/>
    <img src={Ecuatro} className="edificiocuatro" alt='edificio'/>
</div>
  );
};

export default hero;
