import React from 'react'
import Button from './Button'

function HeroSection() {
  return (
    <div className='flex items-center justify-center flex-col py-20'>
        <div className='text-center'>
            <h1 className='text-2xl md:text-4xl mb-1 md:mb-3 text-sky-600 font-semibold
            dark:text-sky-500
            '>Hi, this is Ruggery</h1>
            <p className='text-md md:text-xl mb-3 text-gray-700 dark:text-gray-300'
            > 
            	Front End Developer Jr
            </p>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 '>
            <Button href={"#formation"}>Formation</Button>
            <Button href={"#works"}>Projects</Button>
            <Button href={"#about"}>Skills</Button>
            <Button href={"#about"}>About me</Button>
            </div>
        </div>
    </div>
  )
}

export default HeroSection