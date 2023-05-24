import React from 'react';
import Navbar from '../utilities/Navbar';
import Footbar from '../utilities/Footbar';

const HomePage = () => {
    return (
      <div>
        <Navbar />

        <footer> 
            <Footbar/>
        </footer>
      </div>
    );
};

export default HomePage