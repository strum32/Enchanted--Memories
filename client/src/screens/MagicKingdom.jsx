import React from 'react'
import { Image } from 'react-bootstrap'
import img1 from '../assets/magic1.webp'
import img2 from '../assets/magic3.jpg'
import img3 from '../assets/magic4.jpg'
import img4 from '../assets/magic2.jpg'
import img5 from '../assets/magic5.jpg'
import img6 from '../assets/magic6.webp'
import './MagicKingdom.css'

export default function MagicKingdom() {
  return (
<div>
  <div className="MagicContainter" id='background'>
    <div className='MagicGallery'>
      <figure id="MagicGallery-Item1">
        <Image  id='MagicGallery-Img' src={img1} alt='Tomorrow Land' fluid /> 
      </figure>
      <figure id="MagicGallery-Item2">
        <p>Welcome to Tomorrowland an intergalactic city. Our futurisitic theme park will encompass every childs imagination of rockets, UFOs, and robots. Walt Disney said "Tomorrow can be a wonderful age. Our scientists today are opening the door of the Space Age to achievements that will benefit our children and generations to come". The Tomorrowland attractions have been designed to give you an opportunity to participate in adventures that are a living blueprint of our future. Classic attractions include Space Mountain, Walt Disney's Carousel of Progress, Astro Orbiter, Tomorrowland Transit Authority PeopleMover and the Tomorrowland Speedway</p>
      </figure>
      <figure id="MagicGallery-Item3">
        <Image id='MagicGallery-Img' src={img2} alt='Fantasy Land' fluid />
      </figure>
      <figure id="MagicGallery-Item4">
        <p>Welcome to Fantasyland a carnival based theme park. Step into your own fantasy, be who you want, and make your dreams a reality. In the words of Walt Disney: "Fantasyland is dedicated to the young at heart and to those who believe that when you wish upon a star, your dreams come true." Attractions include It's a Small World, Peter Pan's Flight, The Many Adventures of Winnie the Pooh, Mickey's PhilharMagic, Prince Charming Regal Carrousel, and Mad Tea Party. </p>
      </figure>
      <figure id="MagicGallery-Item5">
        <Image id='MagicGallery-Img' src={img3} alt='Adventure Land' fluid/>
      </figure>
      <figure id="MagicGallery-Item6">
        <p>Welcome to Adventureland this park represents the mystery of exploring foreign lands. It is themed to resemble the remote jungles in Africa, Asia, the Middle East, South America and the South Pacific, with an extension resembling a Caribbean town square. It contains classic attractions such as Pirates of the Caribbean, Jungle Cruise, Walt Disney's Enchanted Tiki Room, Swiss Family Treehouse, and The Magic Carpets of Aladdin.</p>
      </figure>
      <figure id="MagicGallery-Item7">
        <Image id='MagicGallery-Img' src={img4} alt='Frontier Land' fluid/>
      </figure>
      <figure id="MagicGallery-Item8">
      <p>In Frontierland guests can relive the American Old West, from the romanticized cowboys and Native Americans, to exploring the mysteries of the Rivers of America. It contains classic attractions such as Big Thunder Mountain Railroad, Splash Mountain, and the Country Bear Jamboree. The land also contains shops such as Big Al's, Frontier Trading Post, Prairie Outpost and Supply, Briar Patch, and Splashdown Photos. So put on your cowboy hat, shine your boots, and saddle up, because your are in Frontierland</p>
      </figure>
      <figure id="MagicGallery-Item9">
        <Image id='MagicGallery-Img' src={img5} alt='Main Street U.S.A' fluid/>
      </figure>
      <figure id="MagicGallery-Item10">
        <p>Main Street is lined with shops selling merchandise and food. The decor is early-20th century small-town America, inspired by Walt Disney's childhood and the film Lady and the Tramp.</p>
      </figure>
      <figure id="MagicGallery-Item11">
        <Image id='MagicGallery-Img' src={img6} alt='Liberty Square' fluid/>
      </figure>
      <figure id="MagicGallery-Item12">
        <p>Liberty Square is inspired by a colonial American town set during the American Revolutionary War. The Liberty Belle Riverboat travels down the park's Rivers of America. Liberty Square is home to such attractions as the Haunted Mansion and The Hall of Presidents.</p>
      </figure>
    </div>
  </div>
</div>
  )
}
