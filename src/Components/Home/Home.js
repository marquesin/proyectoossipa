import React from 'react';
import "./Home.css"
import Header from '../Header/Header';
import Banner from './Banner/Banner';
import Contactenos from './Contactenos/Contactenos';


export default function Home() {
    return (
        <main>
           <Header/>
           <Banner/>
           <Contactenos/>
        </main>
    )
}
