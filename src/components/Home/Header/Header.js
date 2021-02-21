import React from 'react';
import Filter from '../Filter/Filter';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <Filter/>
        </div>
    );
};

export default Header;