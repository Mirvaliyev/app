import React from 'react'
import my_logo from '../../icons/my_logo.svg'
export default function Home() {
  return (
    <div className="w-full h-full min-h-[100%] home flex justify-center p-[30px]">
      <img className='w-[calc(250px+5vmin)] drop-shadow-[0px_20px_30px_rgba(0,0,0,0.8)]' src={my_logo} />
    </div>
      )
}
