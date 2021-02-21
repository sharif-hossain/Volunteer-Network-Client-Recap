import React from 'react';
import Events from '../Events/Events';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className="mx-5">
            <Header/>
            <Events></Events>
        </div>
    );
};

export default Home;