import React from 'react'
import { Image } from 'react-bootstrap'
import Aos from "aos"
import { useEffect } from 'react'
import img1 from '../assets/magic1.webp'
import img2 from '../assets/magic3.jpg'
import img3 from '../assets/magic4.jpg'
import img4 from '../assets/magic2.jpg'
import img5 from '../assets/magic5.jpg'
import './MagicKingdom.css'
import AllPhotos from '../components/AllPhotos'

export default function MagicKingdom() {
  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);

  return (
<div>
  <div className="MagicContainter" id='background'>
      <AllPhotos/>  
    <div className='MagicGallery'>
      <figure id="MagicGallery-Item1" data-aos="fade-right">
        <Image  id='MagicGallery-Img' src={img1} alt='Tomorrow Land' fluid /> 
      </figure>
      <figure id="MagicGallery-Item2" data-aos='fade-left'>
        <h1 className='center'>Tomorrow Land</h1> 
        <p className="text2">Welcome to Tomorrowland an intergalactic city. Our futurisitic theme park will encompass every childs imagination of rockets, UFOs, and robots. The Tomorrowland attractions have been designed to give you an opportunity to participate in adventures that are a living blueprint of our future. Classic attractions include Space Mountain, Walt Disney's Carousel of Progress, Astro Orbiter, Tomorrowland Transit Authority, PeopleMover, and Tomorrowland Speedway</p>
      </figure>
      <figure id="MagicGallery-Item3" data-aos="fade-left">
        <Image id='MagicGallery-Img' src={img2} alt='Fantasy Land' fluid />
      </figure>
      <figure id="MagicGallery-Item4" data-aos='fade-right'>
        <h1 className='center'>Fantasy Land</h1> 
        <p className="text2">Welcome to Fantasyland a carnival based theme park. Step into your own fantasy, be who you want, and make your dreams a reality. Fantasyland is dedicated to the young at heart and to those who believe that when you wish upon a star, your dreams come true. Attractions include It's a Small World, Peter Pan's Flight, and Mickey's PhilharMagic . </p>
      </figure>
      <figure id="MagicGallery-Item5" data-aos="fade-right">
        <Image id='MagicGallery-Img' src={img3} alt='Adventure Land' fluid/>
      </figure>
      <figure id="MagicGallery-Item6" data-aos='fade-left'>
        <h1 className='center'>Adeventure Land</h1> 
        <p className="text2">Welcome to Adventureland this park represents the mystery of exploring foreign lands. It is themed to resemble the remote jungles in Africa, resembling a Caribbean town square. It contains classic attractions such as Pirates of the Caribbean, Jungle Cruise, Walt Disney's Enchanted Tiki Room, Swiss Family Treehouse, and The Magic Carpets of Aladdin.</p>
      </figure>
      <figure id="MagicGallery-Item7" data-aos="fade-left">
        <Image id='MagicGallery-Img' src={img4} alt='Frontier Land' fluid/>
      </figure>
      <figure id="MagicGallery-Item8" data-aos='fade-right'>
        <h1 className='center'>Frontier Land</h1> 
        <p className="text2">In Frontierland guests can relive the American Old West. It contains classic attractions such as Big Thunder Mountain Railroad, Splash Mountain, and the Country Bear Jamboree. So put on your cowboy hat, shine your boots, and saddle up, because you are in Frontierland</p>
      </figure>
      <figure id="MagicGallery-Item9" data-aos="fade-right">
        <Image id='MagicGallery-Img' src={img5} alt='Main Street U.S.A' fluid/>
      </figure>
      <figure id="MagicGallery-Item10" data-aos='fade-left'>
        <h1 className='center'>Main Street</h1> 
        <p className="text2">Main Street is lined with shops selling merchandise and food. The decor is early-20th century small-town America, inspired by Walt Disney's childhood and the film Lady and the Tramp.</p>
      </figure>
    </div>
  </div>
</div>
  )
}
