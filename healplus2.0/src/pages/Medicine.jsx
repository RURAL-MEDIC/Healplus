import React from 'react';
import "../styles/Medicine.css"

const Medicine = () => {
    return (
        <div className='Medicine-container'>
            <div className='recently-view'>
                <h2>Recently Viewed</h2>
            <div class="card-contaier">
            <div class="card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
              <div class="card-content">
                <h3>Aspirin</h3>
                <h5 id="price1">Price: ₹500</h5>
                
               </div>
            </div>
            </div>
            </div>
        </div>  
    );
}

export default Medicine;

