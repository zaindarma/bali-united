import FacebookLogo from '@/components/atoms/FacebookLogo'
import InstagramLogo from '@/components/atoms/InstagramLogo'
import TiktokLogo from '@/components/atoms/TiktokLogo'
import TwitterLogo from '@/components/atoms/TwitterLogo'
import YoutubeLogo from '@/components/atoms/YoutubeLogo'
import React from 'react'

const Navbar1 = () => {
  return (
    <>
     <nav className="bg-black lg:flex lg:py-6 lg:px-20 lg:justify-end lg:items-center hidden">
        <div className="text-white flex flex-row gap-3">
            <div className="flex gap-7">
                <a href="">
                    <TwitterLogo />
                </a>
                <a href="">
                    <InstagramLogo />
                </a>
                <a href="">
                    <FacebookLogo />
                </a>
                <a href="">
                    <TiktokLogo />
                </a>
                <a href="">
                    <YoutubeLogo />
                </a>
            </div>
            <div className="flex gap-3">
                <a href="">LOGIN</a>
                <a href="">|</a>
                <a href="">REGISTER</a>
            </div>
        </div>
    </nav>   
    </>
  )
}

export default Navbar1