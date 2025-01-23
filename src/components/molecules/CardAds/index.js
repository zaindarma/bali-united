import Image from 'next/image'
import React from 'react'

const CardAds = ({ gambar }) => {
  return (
    <div className="h-auto w-[241px]">
        <div>
            <Image src={gambar} alt='gambar' width={100} height={100} className="h-auto w-full object-cover" />
        </div>
    </div>        
  )
}

export default CardAds