import React from 'react'
import '../styles/CallDocNAmbulance.css'

export default function CallDocNAmbulance() {
  return (
    <div className='CallDocNAmbulance'>
        <button class="ambulance">
          <div>📞</div>
          <p>Call an Ambulance</p>
        </button>
        <button class="ambulance">
          <div>🩺</div>
          <p>Consult <br />Doctor</p>
        </button>
    </div>
  )
}
