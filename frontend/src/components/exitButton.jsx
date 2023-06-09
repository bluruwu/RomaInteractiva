import React from 'react';

const ExitButton = ({ onClick }) => {

    return (
        <button className="bg-custom-rojo text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

    );
}

export default ExitButton;