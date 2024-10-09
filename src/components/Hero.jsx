import React from 'react'
import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='hero_section flex justify-between p-7'>
      <div className='hero_text_section w-1/2'>
        <p className='guarantee_paragraph'>
            100% well-tutoring guarantee
        </p>
        <p className='heading'>
            we provide unique moral and academic excellence
        </p>
        <p first_school_intro>
        At our school, we redefine excellence,
seamlessly intertwining academic distinction with unwavering moral values.
Enroll your child in a community where each student's journey is crafted with precision, fostering a holistic growth that extends beyond textbooks to shape compassionate, ethical leaders of tomorrow.
        </p> 
    </div>
      <div className='hero_images_section grid gap-4 grid-cols-2 grid-rows-2'>
       <span className='hero_image_1'> <img src={HeroImage} alt="Hero Image 2"  className='w-40 h-40 rounded-xl'/></span>
       <span className='hero_image_2'> <img src={HeroImage} alt="Hero Image 3"  className='w-40 h-40 rounded-full'/></span>
       <span className='hero_image_3'> <img src={HeroImage} alt="Hero Image 1"  className='w-40 h-40  rounded-xl' /></span>
       <span className='hero_image_4'> <img src={HeroImage} alt="Hero Image 4"  className='w-40 h-40 rounded-tl-[70px]'/></span>
      </div>
    </div>
  )
}

export default Hero
