import React from 'react';
import CallDocNAmbulance from '../pages/CallDocNAmbulance';
import "../styles/Home.css";
import LatestNews from '../components/Sections/LatestNews';
import EmergencyBtn from '../components/Common/EmergencyBtn';
import Features from '../components/Sections/Features';
import SlideShow from '../components/Sections/SlideShow';

const Home = () => {
    return (
        <div id='Home'>
            <LatestNews/>
            <CallDocNAmbulance/>
            <EmergencyBtn/>
            <Features/>
            <SlideShow/>
        </div>
    );
}

export default Home;
