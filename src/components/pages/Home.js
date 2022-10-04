import React from 'react'
import my_logo from '../../icons/my_logo.svg'
export default function Home() {
  return (
    <div className="w-full h-screen min-h-[100vh] home flex justify-center overflow-y-scroll border-[2px] border-red-0 p-[60px]">
      <img className='w-[calc(250px+5vmin)] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.8)]' src={my_logo} />
    </div>
      )
}
