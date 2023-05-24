import React from 'react';
import logo from '../media/logo.png'

const Footbar = () => {
  return (
    <footer className="bg-black  py-8 fixed bottom-0 w-full">
    <div className="flex justify-between mx-20">
        <div className=' font-regular font-text'> 
            <p className='text-white text-center'> Sobre nosotros </p>
            <p className='text-white'> github.com/bluruwu/romainteractiva </p>
        </div>
        <div>
            <p className='text-white text-center'> Contáctanos </p>
            <p className='text-white'> romainteractiva@gmail.com </p>
        </div>
    </div>
    </footer>
  );
};

export default Footbar