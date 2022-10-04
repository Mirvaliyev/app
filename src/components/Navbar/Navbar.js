import React, { useState, useEffect, useRef } from 'react'
import my_logo from '../../icons/my_logo.svg'
import i_about from '../../icons/about.svg'
import i_works from '../../icons/works.svg'
import i_partners from '../../icons/partners.svg'
import i_contact from '../../icons/contact.svg'
import { Link } from 'react-router-dom';
export default function Navbar() {
  // const [menu,setMenu]=useState([true,false,false,false,false])
  const item_click_Menu = (e) => {
  }
  return (
    <div className="relative w-full h-full md:overflow-y-scroll">
      <ul className='flex md:block h-full w-full'>
        <Link className='menu_item w-1/5 md:min-h-[80px] min-w-[50px] h-auto md:h-1/5 md:w-auto border-r-[1px] md:border-r-[0px] md:border-b-[1px] border-b-[0px] border-gray-400 cursor-pointer transition-all flex flex-col justify-center items-center md:bg-gradient-to-r bg-gradient-to-b from-gray-400 via-white hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 to-gray-400 md:p-[15px]' to={'/'}><img className='w-[30px] min-w-[25px] icon' src={my_logo} /></Link>
        <Link className='menu_item w-1/5 md:min-h-[80px] min-w-[50px] h-auto md:h-1/5 md:w-auto border-r-[1px] md:border-r-[0px] md:border-b-[1px] border-b-[0px] border-gray-400 cursor-pointer transition-all flex flex-col justify-center items-center md:bg-gradient-to-r bg-gradient-to-b from-gray-400 via-white hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 to-gray-400 md:p-[15px]' to={'/about'}><img className='w-[30px] min-w-[25px] icon' src={i_about} /><span className=' text-[#222] font-semibold uppercase text-sm hidden md:block mt-[10px]' >About</span></Link>
        <Link className='menu_item w-1/5 md:min-h-[80px] min-w-[50px] h-auto md:h-1/5 md:w-auto border-r-[1px] md:border-r-[0px] md:border-b-[1px] border-b-[0px] border-gray-400 cursor-pointer transition-all flex flex-col justify-center items-center md:bg-gradient-to-r bg-gradient-to-b from-gray-400 via-white hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 to-gray-400 md:p-[15px]' to={'/works'}><img className='w-[30px] min-w-[25px] icon' src={i_works} /><span className=' text-[#222] font-semibold uppercase text-sm hidden md:block mt-[10px]' >Works</span></Link>
        <Link className='menu_item w-1/5 md:min-h-[80px] min-w-[50px] h-auto md:h-1/5 md:w-auto border-r-[1px] md:border-r-[0px] md:border-b-[1px] border-b-[0px] border-gray-400 cursor-pointer transition-all flex flex-col justify-center items-center md:bg-gradient-to-r bg-gradient-to-b from-gray-400 via-white hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 to-gray-400 md:p-[15px]' to={'/partners'}><img className='w-[30px] min-w-[25px] icon' src={i_partners} /><span className=' text-[#222] font-semibold uppercase text-sm hidden md:block mt-[10px]' >Partners</span></Link>
        <Link className='menu_item w-1/5 md:min-h-[80px] min-w-[50px] h-auto md:h-1/5 md:w-auto border-r-[1px] md:border-r-[0px] md:border-b-[1px] border-b-[0px] border-gray-400 cursor-pointer transition-all flex flex-col justify-center items-center md:bg-gradient-to-r bg-gradient-to-b from-gray-400 via-white hover:from-gray-500 hover:via-gray-300 hover:to-gray-500 to-gray-400 md:p-[15px]' to={'/contact'}><img className='w-[25px] min-w-[25px] icon' src={i_contact} /><span className=' text-[#222] font-semibold uppercase text-sm hidden md:block mt-[10px]' >Contact</span></Link>
      </ul>
    </div>
  )
}
