import React from 'react'
import { Search } from 'lucide-react';
function SearchBar() {
  return (
    <div className='flex items-center gap-0'>
        <input className='px-2 py-[6px] rounded-tl-md rounded-bl-md outline-none' type="text" placeholder='Search any song' name="" id="" />
        <button className='bg-white border-l px-2 py-2 rounded-tr-md rounded-br-md'><Search size={20}/></button>
    </div>
  )
}

export default SearchBar