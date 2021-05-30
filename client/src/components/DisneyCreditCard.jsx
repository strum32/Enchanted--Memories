import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../assets/DisneyCreditCards.jpg'

export default function DisneyCreditCard() {
  return (
    <div className="CreditContainter" id='background'>
      <div className='CreditGallery'>
        < figure id="CreditGallery-Item1">
          <Image id='CreditGallery-Img' src={img1} alt='Disney Credit Cards' fluid/>
        </figure>
        <figure id="CreditGallery-Item2" className='height' >
          <p className='font-Credit'>New Enchanted Premier Visa Cardmembers can earn a</p>
          <h2 className='font2-Credit'>$300 STATEMENT CREDIT</h2>
          <p className='font-Credit'>plus 0% Promo APR on select Enchanted vacations</p>
          <h6 className='font3-Credit'>Restrictions apply</h6>
        </figure>
      </div>
    </div>
  )
}
