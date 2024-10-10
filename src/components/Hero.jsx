import React from 'react'
import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='flex justify-between p-7'>
      <div className='w-1/2'>
        <p className='uppercase font-poppins'>
            100% well-tutoring guarantee
        </p>
        <p className=' capitalize font-titalium text-4xl'>
            we provide<br/> <b>Unique moral</b> <br/>and academic excellence
        </p><br/>
        <p className='font-poppins'>
        At our school, we redefine excellence,
seamlessly intertwining academic distinction with unwavering moral values.
Enroll your child in a community where each student's journey is crafted with precision, fostering a holistic growth that extends beyond textbooks to shape compassionate, ethical leaders of tomorrow.
        </p> 
<br/>
        <div className=" flex">
        <button className="flex gap-1 text-sm bg-secondary items-center p-2 px-4 rounded-full text-primary  mr-2 border-none">
              Learn More
            </button>
            <button className="flex gap-1 text-sm bg-secondary items-center p-2 px-4 rounded-full text-primary mr-2 border-none">Join Us</button>
        </div>
    </div>
      <div className='grid gap-4 grid-cols-2 grid-rows-2'>
       <span> <img src={HeroImage} alt="Hero Image 2"  className='w-40 h-40 rounded-xl'/></span>
       <span > <img src={HeroImage} alt="Hero Image 3"  className='w-40 h-40 rounded-full'/></span>
       <span> <img src={HeroImage} alt="Hero Image 1"  className='w-40 h-40  rounded-xl' /></span>
       <span> <img src={HeroImage} alt="Hero Image 4"  className='w-40 h-40 rounded-tl-[70px]'/></span>
      </div>
    </div>
  )
}

export default Hero
