import React from 'react';
import "../styles/medicine.css"
import CallShop from '../components/medicine/CallShop.jsx';
import SuggestedMedicine from '../components/medicine/SuggestedMedicine';
import RecentlyViewedMedicine from '../components/medicine/RecentlyViewedMedicine';

const Medicine = () => {
    return (
        <div className='Medicine'>
            {/* <div className='recently-view'>
                <h2>Recently Viewed</h2>
            <div className="card-contaier">
            <div className="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
              <div className="card-content">
                <h3>Aspirin</h3>
                <h5 id="price1">Price: ₹500</h5>
               </div>
            </div>
            </div>
            </div> */}

            {/* <EmergencyBtn/> */}
            <CallShop/>
            <SuggestedMedicine/>
            <RecentlyViewedMedicine/>
        </div>  
    );
}

export default Medicine;

