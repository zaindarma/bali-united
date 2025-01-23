import Image from 'next/image'
import React from 'react'

const CardPhoto = ({ gambar, title, date, desc}) => {
  return (
    <>
            <div className="flex mt-[30px] px-4">
                <div className="lg:w-[500px] lg:h-[280px] relative">
                    <a href="#"><Image className="w-full h-full object-cover" src={gambar}
                            alt="" width={100} height={100}/></a>
                    <div className="absolute bg-black bg-opacity-80 text-white bottom-0 px-3 py-3 h-1/2">
                        <h1 className="font-extrabold text-xl">{title}</h1>
                        <p className="py-1 font-thin">{date}</p>
                        <p className="font-thin">{desc}</p>
                    </div>
                </div>
            </div>  
    </>
  )
}

export default CardPhoto