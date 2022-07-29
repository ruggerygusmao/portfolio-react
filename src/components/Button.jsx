import React from 'react'

const button = ({children, href}) => {
  return (
    <a  href={href} 
                className='inline-block px-7 py-3 border 
                border-transparent text-base font-medium rounded-md 
              text-white bg-sky-600 hover:bg-sky-700 md:text-md
            '>
            {children}
          </a>
  )
}

export default button