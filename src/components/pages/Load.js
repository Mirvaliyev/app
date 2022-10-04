import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
export default function Load() {
    const [load, setLoad] = useState(false)
    useEffect = () => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false)
        }, 1000)
    }
    return (
        <>
            {
                load
                    ?
                    <div className='w-full h-full absolute bg-white top-0 left-0 z-20 flex justify-center items-center'>
                        <RingLoader color={'#2196f3'} loading={load} size={'150'} />
                    </div>
                    :
                    <>
                    </>
            }
        </>
    )
}
