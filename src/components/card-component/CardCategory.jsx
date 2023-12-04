import React from 'react'
import Card from './Card'

function CardCategory({albumsData, category}) {
  return (
    <>
    <div className="p-3 text-2xl font-semibold bg-black text-white">
        <h1>{category}</h1>
      </div>
      <div className="mt-0 p-2 flex gap-1 bg-black flex-wrap items-center">
        {albumsData.length>0 ? albumsData.map((data, idx) => {
          return (
            <Card key = {idx} image = {data.image} title = {data.title} follower={data.follows}/>
          )
        }) : "loading..."}
        
      </div>
      </>
  )
}

export default CardCategory