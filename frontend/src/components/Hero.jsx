import React from 'react'
import {assets} from "../assets/frontend_assets/assets"

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-blue-950 '>
            {/* Hero left side */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#09003c]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#13075b]'></p>
                        <p className='font-medium text-sm md:text-base'>Our Best Sellers</p>
                    </div>
                    <h1 className='prata-regular text-3xl lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>Shop Now</p>
                            <p className='w-8 md:w-11 h-[1px]  bg-[#13075b]'></p>
                    </div>
                </div>
            </div>
            {/* Hero Right Side */}
            <img src={assets.hero_img} alt="hero" className='w-full sm:w-1/2'/>
    </div>
  )
}

export default Hero