import React from 'react'
import { Image } from 'react-bootstrap'
import Aos from "aos"
import { useEffect } from 'react'
import img1 from '../assets/Animal1.jpg'
import img2 from '../assets/Animal2.jpg'
import img3 from '../assets/Animal3.jpg'
import img4 from '../assets/Animal4.jpg'
import img5 from '../assets/Animal5.webp'
import './AnimalKingdom.css'
import AllPhotos from '../components/AllPhotos'

export default function AnimalKingdom() {
  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);
  
  return (
<div>
  <div className="AnimalContainter" id='background' >
      <hr className='line' />
      <AllPhotos/>
    <div className='AnimalGallery'>
      <figure id="AnimalGallery-Item1" data-aos="fade-right">
            <Image id='AnimalGallery-Img' src={img1} alt='' fluid />
      </figure>
      <figure id="AnimalGallery-Item2" data-aos="fade-left">
        <h1 className='center'>The Oasis</h1> 
        <p className='text'>The Oasis is the park's logistic equivalent to Main Street U.S.A. and provides the transition from the park's entrance to the world of animals. The main paths feature animal exhibits and dense vegetation and trees lead deeper into the park and then onto Discovery Island. Between the parking lot and the Oasis sits a Rainforest Cafe, which can be entered from both inside and outside the ticketed area</p>
      </figure>
      <figure id="AnimalGallery-Item3" data-aos="fade-left">
        <Image id='AnimalGallery-Img' src={img2} alt='' fluid />
      </figure>
      <figure id="AnimalGallery-Item4" data-aos="fade-right">
        <h1 className='center'>Pandora – The World of Avatar</h1> 
        <p className='text'>Pandora – The World of Avatar is themed to the fictional alien exoplanetary moon, Pandora. The land's marquee attraction is Avatar Flight of Passage, a 3D flying simulator that allows guests to fly on a banshee across the Pandoran landscape.Another attraction, the Na'vi River Journey, places guests aboard a boat ride through Pandora's bioluminescent rainforests</p>
      </figure>
      <figure id="AnimalGallery-Item5" data-aos="fade-right">
        <Image id='AnimalGallery-Img' src={img3} alt='' fluid/>
      </figure>
      <figure id="AnimalGallery-Item6" data-aos="fade-left">
        <h1 className='center'>Discovery Island</h1> 
        <p className='text'>Discovery Island is located at the center of the park, and is an island within the park's Discovery River waterway. It serves as the "central hub" connecting the other sections of the park by bridges, with the exception of Rafiki's Planet Watch. </p>
      </figure>
      <figure id="AnimalGallery-Item7" data-aos="fade-left">
        <Image id='AnimalGallery-Img' src={img4} alt='' fluid/>
      </figure>
      <figure id="AnimalGallery-Item8" data-aos="fade-right">
        <h1 className='center'>Rafiki's Planet Watch</h1> 
        <p className='text'>Rafiki's Planet Watch is the only section of the park not connected to Discovery Island; it connects only to Africa. Guests board the 3 ft (914 mm) narrow gauge Wildlife Express Train for the short trip to and from the area, which consists of three sub-areas. Guests first encounter Habitat Habit!, where they can see cotton-top tamarins and learn about the efforts to protect these endangered primates in their natural homes. Along the way, guests can also learn how to provide animal habitats in and around their own homes.</p>
      </figure>
      <figure id="AnimalGallery-Item9" data-aos="fade-right">
        <Image id='AnimalGallery-Img' src={img5} alt='' fluid/>
      </figure>
      <figure id="AnimalGallery-Item10" data-aos="fade-left">
        <h1 className='center'>Dino Land U.S.A</h1> 
        <p className='text'>Dino Land U.S.A. is themed around dinosaurs and other extinct prehistoric life. The area is anchored by the Dino Institute, a fictitious palaeontological facility which is home to Dinosaur, a dark thrill ride. Just outside the institute is "Dino-Sue", a casting of a Tyrannosaurus rex fossil that is the most complete yet found. At the nearby Boneyard, there is a multi-leveled playground area with a Columbian mammoth fossil to be uncovered and a cast skeleton of a Brachiosaurus.</p>
      </figure>
    </div>
  </div>
</div>
  )
}
