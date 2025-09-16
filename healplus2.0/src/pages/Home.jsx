import React from 'react';
import CallDocNAmbulance from '../components/CallDocNAmbulance';
import "../styles/Home.css";
import LatestNews from '../components/LatestNews';
import EmergencyBtn from '../components/EmergencyBtn';
import Features from '../components/Features';

const Home = () => {
    return (
        <div id='Home'>
            <LatestNews/>
            <CallDocNAmbulance/>
            <EmergencyBtn/>
            <Features/>
        </div>
    );
}

export default Home;
