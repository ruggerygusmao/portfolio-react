import React from 'react'

const Image = ({link, alt}) => {
  return (
    <div>
        <img src={link} alt={alt} className="w-10 mb-5" />
    </div>
  )
}

export default Image