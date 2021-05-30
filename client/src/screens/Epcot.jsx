import React from 'react'
import { Image } from 'react-bootstrap'
import Aos from "aos"
import { useEffect } from 'react'
import img1 from '../assets/Epcot1.jpg'
import img2 from '../assets/Epcot2.webp'
import img3 from '../assets/Epcot3.jpg'
import img4 from '../assets/Epcot4.jpg'
import img5 from '../assets/Epcot5.jpg'
import img6 from '../assets/Epcot6.jpg'
import img7 from '../assets/Epcot7.jpg'
import img8 from '../assets/Epcot8.jpg'
import img9 from '../assets/Epcot9.jpg'
import img10 from '../assets/Epcot10.jpg'
import AllPhotos from '../components/AllPhotos';
import '../App.css'

export default function Epcot() {
  useEffect(() => {
    Aos.init({duration: 2000 });
  }, []);

  return (
  <div>
    <div className="EpcotContainter" id='background'>
        <AllPhotos/>
      <div className='EpcotGallery'>
      <figure id="EpcotGallery-Item1" data-aos="fade-right">
        <Image  id='EpcotGallery-Img' src={img1} alt='Toy Story land' fluid /> 
      </figure>
      <figure id="EpcotGallery-Item2" data-aos="fade-left">
        <h1 className='center-Epcot'>Canada</h1> 
        <p className='text-Epcot'>Enjoy a little slice of Canada ehh. The Canada Pavilion is designed to remind guests of Canada's outdoors. It includes a canyon, a waterfall, gardens, a pool with fountains, and totem poles. Further in to the pavilion, a small thoroughfare is designed to represent the British and French influences and heritage through its buildings.</p>
      </figure>
      <figure id="EpcotGallery-Item3" data-aos="fade-left">
        <Image id='EpcotGallery-Img' src={img2} alt='Star Wars: Galaxys Edge' fluid />
      </figure>
      <figure id="EpcotGallery-Item4" data-aos="fade-right">
        <h1 className='center-Epcot'>Morocco</h1> 
        <p className='text-Epcot'>The Morocco Pavilion, designed to look like a Moroccan city with a realistic Minaret. Guests of the pavilion gain insight on the lifestyle and culture of the Moroccan people through the Gallery of Arts and History. The Fes House shows guests the typical Moroccan house. The courtyard hosts entertainment, including a belly dancing show in the evening.</p>
      </figure>
      <figure id="EpcotGallery-Item5" data-aos="fade-right">
        <Image id='EpcotGallery-Img' src={img3} alt='Echo Lake' />
      </figure>
      <figure id="EpcotGallery-Item6" data-aos="fade-left">
        <h1 className='center-Epcot'>Japan</h1> 
        <p className='text-Epcot'>The Japan Pavilion is made up of buildings surrounding a courtyard. The entrance to the courtyard features a Japanese Pagoda. A torii gate decorates the water in front of the pavilion. The area is filled with Japanese pools and gardens. At the end of the courtyard is the gate to a Japanese castle, including a moat, which leads into a display of Japanese culture.</p>
      </figure>
      <figure id="EpcotGallery-Item7" data-aos="fade-left">
        <Image id='EpcotGallery-Img' src={img4} alt='Grand Avenue' fluid/>
      </figure>
      <figure id="EpcotGallery-Item8" data-aos="fade-right">
        <h1 className='center-Epcot'>Mexico</h1> 
        <p className='text-Epcot'>The Mexico Pavilion resembles a Mesoamerican pyramid with steps leading to entrance doors. Visitors enter through a gallery display of Mexican artwork. The central indoor area of the pavilion is themed as an outdoor twilight-lit Mexican village and marketplace. At the edge of the plaza, a restaurant, overlooks an indoor lagoon with a themed backdrop of another pyramid and a smoldering volcano.</p>
      </figure>
      <figure id="EpcotGallery-Item9" data-aos="fade-right">
        <Image id='EpcotGallery-Img' src={img5} alt='Animation Courtyard' fluid/>
      </figure>
      <figure id="EpcotGallery-Item10" data-aos="fade-left">
        <h1 className='center-Epcot'>France</h1> 
        <p className='text-Epcot'>Oui Oui I would like some more wine. The France Pavilion is themed to look like a Parisienne neighborhood with a pool and fountains and with a view of the Eiffel Tower in the distance. Most of the shops on the streets are actual shops selling French goods such as Guerlain perfume.</p>
      </figure>
      <figure id="EpcotGallery-Item11" data-aos="fade-left">
        <Image id='EpcotGallery-Img' src={img6} alt='Sunset Boulevard' fluid/>
      </figure>
      <figure id="EpcotGallery-Item12" data-aos="fade-right">
        <h1 className='center-Epcot'>Germany</h1> 
        <p className='text-Epcot'>The Germany Pavilion is designed to look like a German town, but with architecture from different eras and regions. The Platz (square) is decorated with a statue of St. George and a clock tower. The pavilion also has numerous small shops selling German goods. Now grab a lager and enjoy a giant pretzels.</p>
      </figure>
      <figure id="EpcotGallery-Item13" data-aos="fade-right">
        <Image id='EpcotGallery-Img' src={img7} alt='Sunset Boulevard' fluid/>
      </figure>
      <figure id="EpcotGallery-Item14" data-aos="fade-left">
        <h1 className='center-Epcot'>Norway</h1> 
        <p className='text-Epcot'>Norway Pavilion is designed to look like a Norwegian village. The village includes a detailed reproduction of Stave church, and Restaurant Akershus, resembles its namesake in Oslo. The exhibit showcases 4 styles of Norwegian architecture: Setesdal-style, Bergen-style, Oslo-style and Ålesund-style.</p>
      </figure>
      <figure id="EpcotGallery-Item15" data-aos="fade-left">
        <Image id='EpcotGallery-Img' src={img8} alt='Sunset Boulevard' fluid/>
      </figure>
      <figure id="EpcotGallery-Item16" data-aos="fade-right">
        <h1 className='center-Epcot'>United Kingdom</h1> 
        <p className='text-Epcot'>All hail the Queen. The United Kingdom Pavilion, designed to look like a stereotypical British village, has English gardens including a hedge maze and a band stand. The shops sell British items such as tea, biscuits toys, clothing, sports apparel and Beatles merchandise.</p>
      </figure>
      <figure id="EpcotGallery-Item17" data-aos="fade-right">
        <Image id='EpcotGallery-Img' src={img9} alt='Sunset Boulevard' fluid/>
      </figure>
      <figure id="EpcotGallery-Item18" data-aos="fade-left">
        <h1 className='center-Epcot'>China</h1> 
        <p className='text-Epcot'>Visitors enter the China Pavilion through a large Chinese gate. The courtyard is dominated by a replica of the Temple of Heaven, which contains the entrance to "Reflections of China", a Circle-Vision 360° movie exploring China's history, as well as a museum. The courtyard is bordered by shops and two Chinese restaurants.</p>
      </figure>
      <figure id="EpcotGallery-Item19" data-aos="fade-left">
        <Image id='EpcotGallery-Img' src={img10} alt='Sunset Boulevard' fluid/>
      </figure>
      <figure id="EpcotGallery-Item20" data-aos="fade-right">
        <h1 className='center-Epcot'>Italy</h1> 
        <p className='text-Epcot'>Welcome to Italy. The Italy Pavilion features a plaza surrounded by a collection of buildings evocative of Venetian, Florentine, and Roman architecture. There are also small shops selling Italian goods, such as candy, household items, perfumes, and wine.</p>
      </figure>
      </div>
    </div>
  </div>
  )
}
