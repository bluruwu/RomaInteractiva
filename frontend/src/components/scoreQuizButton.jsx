import React from 'react';

const Button = ({ texto, onClick }) => {

  return (
    <button onClick={onClick} className={` mb-4 h-10 border relative text-white rounded-3xl shadow-xl transform transition w-full duration-300 bg-custom-rojo hover:scale-110`}>
      {texto}
    </button>
  );
}

export default Button;