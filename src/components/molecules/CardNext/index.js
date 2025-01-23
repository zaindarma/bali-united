import Image from 'next/image'
import React from 'react'

const CardNext = ({ tim1, tim2, stadion, gambar1, gambar2 }) => {
  return (
    <>
<div className="bg-white w-[336px] h-[300px]">
                <div className="bg-black h-[124px] flex flex-col items-center text-white py-4">
                    <h2 className="font-bold">NEXT MATCH</h2>
                    <div className="flex flex-row justify-around gap-8">
                        <h2 className="text-3xl font-bold text-center">1 <br/><span className="text-[12px] text-nowrap">DAYS</span></h2>
                        <span className="text-3xl font-bold text-center">:</span>
                        <h2 className="text-3xl font-bold text-center">19 <br/><span className="text-[12px] text-nowrap">HOURS</span></h2>
                        <span className="text-3xl font-bold">:</span>
                        <h2 className="text-3xl font-bold text-center">15 <br/><span className="text-[12px] text-nowrap">MINUTES</span></h2>
                    </div>
                </div>
                <div>
                    <div className="flex flex-row justify-around items-center px-8 pt-10">
                        <div className="flex flex-col justify-center items-center gap-3">
                            <Image className="w-16" src={gambar1} alt="" width={100} height={100} />
                            <h3 className="font-thin text-black">{tim1}</h3>
                        </div>
                        <h3 className="font-bold text-[20px] text-black">VS</h3>
                        <div className="flex flex-col justify-center items-center gap-3">
                            <Image className="w-16" src={gambar2} alt="" width={100} height={100}/>
                            <h3 className="font-thin text-black">{tim2}</h3>
                        </div>
                    </div>
                    <div className="pt-[50px] px-[80px]">
                        <h3 className="text-center font-thin pb-10 text-black">{stadion}</h3>
                    </div>
                </div>
            </div>
    </>
  )
}

export default CardNext