import Input from '@/components/atoms/Input'
import Image from 'next/image'
import React from 'react'

const Navbar2 = () => {
  return (
    <>
     <nav className="bg-[#c41e26] flex py-4 px-[90px] justify-between sticky top-0 z-10">
        <div className="flex flex-row items-center">
            <Image
            className="lg:h-[100px] lg:w-[100px] w-[50px] h-[50px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png" 
            alt="baliunited"
            width={50}
            height={50}
            />
            <div className="flex flex-col">
                <a className="text-white text-[12px] font-[400px]" href="">OFFICIAL WEBSITES OF</a>
                <a className="text-white font-bold text-2xl" href="">BALI UNITED FC</a>
            </div>
        </div>

        <div className="flex flex-col">
            <div className="flex justify-end">
                <Input placeholder={"Search Here"} name={"search"}/>
            </div>
            <div className="flex flex-row text-white gap-5 text-xs pt-7">
                <a className="hidden lg:block" href="">BASKETBALL</a>
                <a className="hover:text-black hidden lg:block" href="./buacademy/index.html">BU ACADEMY</a>
                <a className="hidden lg:block" href="">TICKET</a>
                <a className="hidden lg:block" href="">NEWS</a>
                <a className="hidden lg:block" href="">MATCH</a>
                <a className="hidden lg:block" href="">TRAINING CENTRE</a>
                <a className="hidden lg:block" href="">TEAM</a>
                <a className="hidden lg:block" href="">MEDIA</a>
                <a className="hidden lg:block" href="">CORPORATE</a>
                <box-icon name="menu" size="md" color="white" className="block lg:hidden right-0"></box-icon>
            </div>
        </div>
    </nav>   
    </>
  )
}

export default Navbar2