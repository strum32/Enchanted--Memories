import React from 'react'
import img1 from '../assets/disney-cards.jpg'
import './DisneyCreditCard.css'

export default function DisneyCreditCard() {
  return (
    <div className="CreditContainter" id='background'>
      <div className='CreditGallery'>
        < figure id="CreditGallery-Item1">
          <img id='CreditGallery-Img' src={img1} alt='Disney CreditCards' />
        </figure>
        <figure id="CreditGallery-Item2" className='height' >
          <p className='font1'>New Enchanted Premier Visa Cardmembers can earn a</p>
          <h2 className='font2'>$300 STATEMENT CREDIT</h2>
          <p className='font1'>plus 0% Promo APR on select Enchanted vacations</p>
          <h6 className='font3'>Restrictions apply</h6>
        </figure>
      </div>
    </div>
  )
}
