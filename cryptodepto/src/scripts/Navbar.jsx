import React from 'react';
import './styles/Nav.css';
import './styles/NavAnimations.css';
import music from '../assets/music.mp3';
import isotipo from '../assets/isotipo.png';
import { AiFillHome } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
import { HiBookmark } from 'react-icons/hi';

const nav = () => {
return (
<div className='NavBar'>
    <div className='navL'>
    <img src={isotipo} alt="Cryptodepto" className='isotipo'/>
    <audio src={music} autoplay loop controls className='repro'></audio>
    </div>
    <div className='navR'>
    <HiBookmark className='home'/>
    <BsTelegram className='home'/>
    <AiFillHome className='home'/>
    </div>
</div>
);
};

export default nav;
