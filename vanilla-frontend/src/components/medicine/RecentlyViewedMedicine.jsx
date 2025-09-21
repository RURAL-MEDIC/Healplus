import React from 'react'
import "../../styles/RecentlyViewedMedicine.css"

export default function RecentlyViewedMedicine() {
  return (
    <div className='RecentlyViewedMedicine'>
        <h2>Recently Viewed</h2>
        <div className="RecentMedicinecard-container">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
                <div className="card-content">
                    <h3>Vitamin Tablet</h3>
                    <p id="price1">Price: ₹500</p>
                </div>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
                <div className="card-content">
                    <h3>Calcium Tablet</h3>
                    <p id="price1">Price: ₹500</p>
                </div>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
                <div className="card-content">
                    <h3>Pan30</h3>
                    <p id="price1">Price: ₹500</p>
                </div>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
                <div className="card-content">
                    <h3>Paracetamol</h3>
                    <p id="price1">Price: ₹500</p>
                </div>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt=""/>
                <div className="card-content">
                    <h3>Aspirin</h3>
                    <p id="price1">Price: ₹500</p>
                </div>
            </div>
        </div>
    </div>
  )
}
