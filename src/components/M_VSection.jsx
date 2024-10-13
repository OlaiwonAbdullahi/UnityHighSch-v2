import React from 'react'
import { BiFlag } from 'react-icons/bi'
import { BiBullseye } from 'react-icons/bi'
import { BiDiamond } from 'react-icons/bi'
import { BiFile } from 'react-icons/bi'

const M_VSection = () => {
  return (
    <div>
    <div className='flex w-full px-7 lg:justify-around p-7  '>
      <div className='w-1/5 text-center bg-primary font-poppins p-8 rounded-md shadow-sm'>
          <div className='flex justify-center'><BiBullseye className='text-2xl'/></div>
        <h3 className='font-poppins font-semibold uppercase text-center'>our mission</h3>
        To educate all students to the highest levels of academic achievement, to enable them to reach their potential, and to prepare them to become productive members of society.
      </div>
      <div className='w-1/5 text-center bg-primary font-poppins p-8 rounded-md shadow-sm'>
      <div className='flex justify-center'><BiFlag  className='text-2xl'/></div>
<h3 className='font-poppins font-semibold uppercase text-center'>our vision</h3>
Empowering students to reach their full potential through innovative education, fostering creativity, and nurturing a culture of lifelong learning.
      </div>
      <div className='w-1/5 text-center bg-primary font-poppins  p-8 rounded-md shadow-sm'>
      <div className='flex justify-center'><BiDiamond  className='text-2xl'/></div>
<h3 className='font-poppins font-semibold uppercase text-center'>core value</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus ex, dictum eu pretium vel, ullamcorper quis augue. In hac habitasse platea dictumst.
      </div>
      <div className='w-1/5 text-center bg-primary font-poppins  p-8 rounded-md shadow-sm '>
      <div className='flex justify-center'><BiFile  className='text-2xl'/></div>
   <h3 className='font-poppins font-semibold uppercase text-center'>curriculum</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus ex, dictum eu pretium vel, ullamcorper quis augue. In hac habitasse platea dictumst.
      </div>
    </div>
    </div>
  )
}

export default M_VSection
