import React from 'react'
import { Image } from 'react-bootstrap'
import './HollywoodStudios.css'
import img1 from '../assets/holly1.jpg'
import img2 from '../assets/holly2.jpg'
import img3 from '../assets/holly3.jpg'
import img4 from '../assets/holly4.jpg'
import img6 from '../assets/holly6.jpg'

export default function HollywoodStudios() {
  return (
<div>
  <div className="HollyContainter" id='background'>
    <div className='HollyGallery'>
      <figure id="HollyGallery-Item1">
        <Image  id='HollyGallery-Img' src={img1} alt='Toy Story land' fluid /> 
      </figure>
      <figure id="HollyGallery-Item2">
        <p>Toy Story Land is inspired by Pixar's Toy Story series. Come join Andy and play with his toys for the day. Enjoy reliving your favorite movies and ride our new attractions. The attractions include Toy Story Mania, Slinky Dog Dash, and Alien Swirling Saucers. </p>
      </figure>
      <figure id="HollyGallery-Item3">
        <Image id='HollyGallery-Img' src={img2} alt='Star Wars: Galaxys Edge' fluid />
      </figure>
      <figure id="HollyGallery-Item4">
        <p>Star Wars: Galaxy's Edge is set within the Star Wars universe, at the Black Spire Outpost village on the remote frontier planet of Batuu. Build a light saber, become a Jedi and defend your planet against the First Order. Attractions include Star Wars: Rise of the Resistance, and Millennium Falcon: Smugglers Run.</p>
      </figure>
      <figure id="HollyGallery-Item5">
        <Image id='HollyGallery-Img' src={img3} alt='Echo Lake' fluid/>
      </figure>
      <figure id="HollyGallery-Item6">
        <p>Echo Lake includes three major attractions based on characters and films created by George Lucas. Star Tours – The Adventures Continue, The Jedi Training: Trials of the Temple, The live-action Indiana Jones Epic Stunt Spectacular! re-enacts various scenes from Steven Spielberg's Raiders of the Lost Ark</p>
      </figure>
      <figure id="HollyGallery-Item7">
        <Image id='HollyGallery-Img' src={img4} alt='Grand Avenue' fluid/>
      </figure>
      <figure id="HollyGallery-Item8">
      <p>Grand Avenue is themed as a gentrified historic district inspired by the real location of the same name in downtown Los Angeles. The area is anchored by Muppet Vision 3D, a 4D film attraction starring the Muppets from Jim Henson's The Muppet Show, that is presented at the Grand Arts Theatre within the avenue's Grand Park. Grand Avenue is also home to PizzeRizzo a Brooklyn-style pizza restaurant owned by Rizzo the Rat—Mama Melrose's Ristorante Italiano, and BaseLine Tap House, a modern California-styled pub.</p>
      </figure>
      <figure id="HollyGallery-Item11">
        <Image id='HollyGallery-Img' src={img6} alt='Sunset Boulevard' fluid/>
      </figure>
      <figure id="HollyGallery-Item12">
        <p>Sunset Boulevard was the first expansion of the park, opening in July 1994. The focal point of Sunset Boulevard is The Twilight Zone Tower of Terror. Located nearby is Rock 'n' Roller Coaster Starring Aerosmith, themed to the music of Aerosmith, with three inversions and a high-speed launch. Along this strio you will be able to find food and shops.</p>
      </figure>
    </div>
  </div>
</div>
  )
}
