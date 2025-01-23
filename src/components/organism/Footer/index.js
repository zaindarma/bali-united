import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="bg-black">
        <div className="flex flex-row justify-around py-12">
            <div className="text-white lg:w-[550px] w-[100px]">
                <Image
                className="size-[80px]"
                src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"
                alt="logo bali"
                width={80}
                height={80}
                />
                <h2 className="font-bold pt-3">Office Bali</h2>
                <p className="font-thin">Jl. Pararaton (off Sunset Road), Legian, Kuta, Bali 80361 Phone : (0361) 960 9893</p>
                <h2 className="font-bold pt-3">Office Jakarta</h2>
                <p className="font-thin">Jl. Panjang Raya No.29 11520 Jakarta Barat Daerah Khusus Ibukota Jakarta</p>
                <p className="font-thin pt-3">Contact(+628892787888)</p>
                <p className="font-thin pt-3">© 2022 Bali United</p>
            </div>
            <div className="text-white justify-center flex flex-col w-[100px]">
                <h2 className="font-bold">NEWS</h2>
                <p className="font-thin py-2">Trending</p>
                <p className="font-thin">Media</p>
            </div>
            <div className="text-white justify-center flex flex-col w-[100px]">
                <h2 className="font-bold">MATCH</h2>
                <p className="font-thin py-2">List Match</p>
                <p className="font-thin">Ranking</p>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer