import React from 'react'

const Card = ({name, img, status}) => {
  return (
    <div>
        <div className='relative'>
            <img className='h-72 w-48 rounded-2xl hover:scale-110 duration-700 ease-in-out cursor-pointer shadow-lg' src={img} alt={name}></img>
        <p className='absolute bottom-4 left-4 text-sm font-medium text-white font-Merriweather no-underline leading-none'>{name}</p>
        <p className={`${status === "offline"?"absolute bottom-4 right-4  text-sm font-medium text-red-600 font-Merriweather no-underline leading-none"
        :"absolute bottom-4 right-4 text-sm font-medium text-green-600 font-Merriweather no-underline leading-none"}`}>{status}</p>
        </div>
    </div>
  )
}
export default Card;