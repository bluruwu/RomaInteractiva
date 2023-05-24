import React from 'react';
import Navbar from '../utilities/Navbar';
import Button from '../components/lessonButton';


const HomePage = () => {

  const Title = () => {
    return (
      <div className="relative h-80">
        <img
          className="absolute inset-0 w-full h-full object-cover brightness-50"
          src={process.env.PUBLIC_URL + '/images/fondo.jpg'}
          alt="Imagen de fondo"
        />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="font-bold text-4xl text-white">¡Bienvenido a nuestra página sobre la gloriosa cultura Romana!</h1>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      {Title()}
      <main className='flex flex-col gap-y-20 m-12'>
        <section >
          <h1 className='font-bold text-3xl text-black'> Etapas</h1>
          <div className='flex justify-center gap-x-24 mt-8'>
            <Button image={'images/monarquia.jpeg'} onClick={console.log('jeje')} buttonText={'La Monarquía'} number={4} />
            <Button image={'images/republica.jpg'} onClick={console.log('jeje')} buttonText={'La República'} number={2} />
            <Button image={'images/imperio.jpg'} onClick={console.log('jeje')} buttonText={'El Imperio'} number={5} />
          </div>
        </section>
        <section>
          <h1 className='font-bold text-3xl text-black'> Los Romanos</h1>
          <div className='flex justify-center gap-x-24 mt-8'>
            <Button image={'images/julio.png'} onClick={console.log('jeje')} buttonText={'Personajes'} number={3} />
            <Button image={'images/coliseo.jpg'} onClick={console.log('jeje')} buttonText={'Arquitectura'} number={4} />
            <Button image={'images/cultura.jpg'} onClick={console.log('jeje')} buttonText={'Cultura'} number={1} />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage