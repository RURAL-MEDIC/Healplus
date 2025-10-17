import React from 'react'
import '../styles/Profilepic.css'

const Profilepic = ({img, size=64, alt}) => {
  const sizeValue = typeof size === 'number' ? `${size}px` : `${Number(size)}px`;
  return (
    <div className='profile-pic'>
      {img && <img src={img} style={{width: sizeValue, height: sizeValue}} alt={`${alt} pic`} />}
    </div>
  )
}

export default Profilepic
