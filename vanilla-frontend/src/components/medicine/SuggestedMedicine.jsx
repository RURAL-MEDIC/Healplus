import React from 'react'
import "../../styles/SuggestedMedicine.css"
import profileIcon from "../../assets/user-solid-full.svg"
import { Link } from 'react-router-dom'

export default function SuggestedMedicine() {
  return (
    <div className='SuggestedMedicine'>
        <h2>Common Medicines</h2>
        <div className="SuggestedMedicineCardContainer">
            <Link className="SuggestedMedicine-card">
                <div className="SuggestedMedicine-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt="" />
                </div>
                <div className="SuggestedMedicine-name">
                <h3>Ibuprofen</h3>
                </div>
            </Link>
            <Link className="SuggestedMedicine-card">
                <div className="SuggestedMedicine-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt="" />
                </div>
                <div className="SuggestedMedicine-name">
                <h3>Paracetamol</h3>
                </div>
            </Link>
            <Link className="SuggestedMedicine-card">
                <div className="SuggestedMedicine-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt="" />
                </div>
                <div className="SuggestedMedicine-name">
                <h3>Pan30</h3>
                </div>
            </Link>
            <Link className="SuggestedMedicine-card">
                <div className="SuggestedMedicine-icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQnRWuXWLoWOz5l_msBpBwwB83ZlWoMFPfA&s" alt="" />
                </div>
                <div className="SuggestedMedicine-name">
                <h3>Aspirin</h3>
                </div>
            </Link>
        </div>
    </div>
  )
}
