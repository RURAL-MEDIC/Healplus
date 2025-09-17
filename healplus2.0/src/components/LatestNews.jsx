import React from 'react';
import '../styles/LatestNews.css';

const LatestNews = () => {
    return (
        <div className='LatestNews'>
            <marquee behavior="infinite" direction="">Latest Info Here</marquee>
        </div>
    );
}

export default LatestNews;
