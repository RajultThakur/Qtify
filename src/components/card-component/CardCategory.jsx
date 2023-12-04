import React from 'react'
import Card from './Card'
import Buttons from './Buttons'

function CardCategory({albumsData, category, genres, setGenres}) {
  return (
    <>
    <div className="p-3 text-2xl font-semibold flex items-center gap-3 bg-black text-white">
        <h1 onClick={()=>setGenres("all")} className={`cursor-pointer ${genres==="all" && "underline text-indigo-500"}`}>{category}</h1>
        {category === "Songs" && 
        <>
        {["Pop","Jazz", "Blues", "Rock"].map(type => {return <Buttons setGenres = {setGenres} type = {type} genres = {genres}/>})}
        </>}
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