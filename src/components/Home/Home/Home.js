import React from 'react';
import BrandPartners from '../BrandPartners/BrandPartners';
import Client from '../Client/Client';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Works from '../Works/Works';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <main>
            <div className="header-bg">
            <Header></Header>
            </div>
            <div>
                <BrandPartners></BrandPartners>
            </div>
            <div>
                <Service></Service>
            </div>
            <div>
                <Works></Works>
            </div>
            <div>
                <Client></Client>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </main>
    );
};

export default Home;