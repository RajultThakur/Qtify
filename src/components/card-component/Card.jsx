import React from 'react'

function Card({image, follower, title}) {
  return (
    <div className='bg-black gap-0'>
        <div className='w-[159px]  p-2'>
            <img className='rounded-tl-lg rounded-tr-lg w-full h-[170px] object-cover' src={image} alt="not found" />
        <div className='bg-white p-2 rounded-br-lg rounded-bl-lg'>
            <p className='bg-black w-max p-1 px-2 rounded-md text-white'>
            {follower} Follows
            </p>
        </div>
        </div>
        <h3 className='text-white w-max p-2 font-semibold text-sm'>{title}</h3>
    </div>
  )
}

export default Card