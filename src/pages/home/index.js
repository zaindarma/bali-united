import Card from '@/components/molecules/Card'
import CardAds from '@/components/molecules/CardAds'
import CardBig from '@/components/molecules/CardBig'
import CardLeague from '@/components/molecules/CardLeague'
import CardNext from '@/components/molecules/CardNext'
import CardPhoto from '@/components/molecules/CardPhoto'
import CardPrevious from '@/components/molecules/CardPrevious'
import Navbar1 from '@/components/organism/Navbar1'
import Navbar2 from '@/components/organism/Navbar2'
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <section className="w-full h-full flex justify-center">
        <img src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/banner/image/2024/Aug/08/66b480f14d548/banner-website-bufc.png" alt="" />
    </section>

    <section className="bg-gray-200 mt-[-124px]">
        <div className="flex lg:flex-row justify-center flex-col">
            {/* <!-- CONTAINER 1 --> */}
            <CardPrevious title={"PREVIOUS MATCH"} tim1={"BALI UNITED FC"} gambar1={"https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"} skor1={"1"} tim2={"Persik Kediri"} gambar2={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/662784bcaa992/logo-persik-kediri.png"} skor2={"3"} stadion={"Stadion Kapten I Wayan Dipta BRI Liga 1 2024/2025"}/>
            {/* <!-- CONTAINER 2 --> */}
            <CardNext gambar1={"https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"} gambar2={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/6627814d18406/semen-padang.png"} tim1={"BALI UNITED FC"} tim2={"Semen Padang"} stadion={"Stadion Haji Agus Salim BRI LIGA 1 2024/2025"}/>
            {/* <!-- CONTAINER 3 --> */}
            <div className="bg-gray-50 w-[335px] h-auto text-black">
                <h2 className="font-bold py-4 pl-5">STANDINGS BRI LIGA 1 2024/2025</h2>
                <table className="text-[16px] font-thin">
                    <thead>
                        <tr className="font-thin">
                            <td className="px-3 py-3">#</td>
                            <td className="px-3 py-3">TEAM</td>
                            <td className="px-3 py-3">P</td>
                            <td className="px-3 py-3">GD</td>
                            <td className="px-3 py-3">Pts</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-3 py-3 text-red-800 font-bold">1</td>
                            <td className="px-3 py-3">
                                <div className="flex flex-row  items-center">
                                    <div className="size-4">
                                        <img src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/66277d5ecd935/persib-bandung-min-1.png" alt="" />
                                    </div>
                                    <div className="font-thin">
                                        <p>Persib Bandung</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-3">19</td>
                            <td className="px-3 py-3">16</td>
                            <td className="px-3 py-3">40</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3 text-red-800 font-bold">2</td>
                            <td className="px-3 py-3">
                                <div className="flex flex-row items-center">
                                    <div className="size-6">
                                        <img src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/6627840845d95/logo-persebaya-surabaya.png" alt="" />
                                    </div>
                                    <div className="font-thin">
                                        <p>Persebaya Surabaya</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-3">19</td>
                            <td className="px-3 py-3">5</td>
                            <td className="px-3 py-3">37</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3 text-red-800 font-bold">3</td>
                            <td className="px-3 py-3">
                                <div className="flex flex-row  items-center">
                                    <div className="size-4">
                                        <img src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/6627804cdc9da/persija-jakarta.png" alt="" />
                                    </div>
                                    <div className="font-thin">
                                        <p>Persija Jakarta</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-3">19</td>
                            <td className="px-3 py-3">12</td>
                            <td className="px-3 py-3">37</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3 text-red-800 font-bold">4</td>
                            <td className="px-3 py-3">
                                <div className="flex flex-row  items-center">
                                    <div className="size-4">
                                        <img src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/662784235de20/psm-makassar-2017.png" alt="" />
                                    </div>
                                    <div className="font-thin">
                                        <p>PSM Makassar</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-3">19</td>
                            <td className="px-3 py-3">9</td>
                            <td className="px-3 py-3">31</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3 text-red-800 font-bold">5</td>
                            <td className="px-3 py-3">
                                <div className="flex flex-row  items-center">
                                    <div className="size-5">
                                        <img src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/662784bcaa992/logo-persik-kediri.png" alt="" />
                                    </div>
                                    <div className="font-thin">
                                        <p>Persik Kediri</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-3">19</td>
                            <td className="px-3 py-3">4</td>
                            <td className="px-3 py-3">31</td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3">
                                <p>...</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-3 py-3 text-red-800 font-bold">9</td>
                            <td className="px-3 py-3">
                                <div className="flex flex-row  items-center">
                                    <div className="size-7">
                                        <img src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png" alt="" />
                                    </div>
                                    <div className="text-red-800 font-bold">
                                        <p>BALI UNITED FC</p>
                                    </div>
                                </div>
                            </td>
                            <td className="px-3 py-3 text-red-800 font-bold">18</td>
                            <td className="px-3 py-3 text-red-800 font-bold">7</td>
                            <td className="px-3 py-3 text-red-800 font-bold">28</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text-red-800 font-thin underline text-center py-6">See the standings</h2>
            </div>
        </div>

        <div className="flex flex-row pl-[127px] mt-[80px] gap-5 items-center">
            <h1 className="font-bold text-[20px] text-black">NEWS</h1>
            <h2 className="opacity-10 text-black">|</h2>
            <h1 className="text-red-700">See More</h1>
        </div>

        <div className="flex lg:flex-row justify-center flex-col items-center">
            {/* <!-- CONTAINER KIRI --> */}
            <CardBig
            gambar={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/19/678cec4f290ef/img-20250119-wa0018-_x400.jpg?token=692142c029ec5cdb0725d8c8ef76ff8e"}
            title={"HASIL SERDADU TRIDATU MUDA DI LAGA PERDANA..."}
            desc={"Tiga tim Bali United Youth baru saja menuntaskan laga perdana..."}
            time={"20 Hours | News"}
            />
            {/* <!-- CONTAINER KANAN --> */}
            <CardPhoto
            gambar={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/21/678f06ed80ce7/whatsapp-image-2025-01-20-at-18-53-46-_x400.jpeg?token=1fd516ae8574b4238a71cd4ef6951039"}
            title={"TIGA PEMAIN ANYAR DEBUT LAWAN SEMEN PADANG, PUJIAN TECO POSITIF..."}
            date={"21 January 2025"}
            desc={"Tiga pemain anyar putaran kedua Bali United FC berhasil tampil..."}
            />
        </div>

        {/* <!-- CARD ATAS --> */}
        <div className="flex lg:flex-row justify-center py-5 gap-5 flex-col items-center">
            {/* <!-- CONTAINER 1 --> */}
            <Card gambar={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/19/678ce16bb6502/img-20250119-wa0015-1-_x400.jpg?token=138a90bc4e5f035e415ec5af4b4f709d"} title={"MILIKI KENANGAN JUARA LIGA 1 2019 DI..."} desc={"Laga pekan ke-19 BRI Liga 1 2024/25 hari Senin (20/1) besok akan mempertemukan Semen Padang FC menjamu Bali United FC"} time={"19 Hours | News"} />
            {/* <!-- CONTAINER 2 --> */}
            <Card gambar={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b8b4af32a2/img-20250118-wa0023-_x400.jpg?token=0e5582d1170433f797a237fd29f60d30"} title={"PUJIAN JAIMERSON KE TECO, DARI PELATIH..."} desc={"Kehadiran Jaimerson da Silva Xavier ke klub Bali United FC mempertemukan kembali bek Brasil ini dengan Stefano Cugurra."} time={"20 Hours | News"}/>
            {/* <!-- CONTAINER 3 --> */}
            <Card gambar={"https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b8aecb453b/img-20250118-wa0025-_x400.jpg?token=c5b2d86f417196093b4ecd90ade720ee"} title={"ALASAN DAN TARGET JAIMERSON XAVIER PASCA..."} desc={"Pemain asing baru Bali United FC, Jaimerson da Silva Xavier menjelaskan perihal dirinya menerima pinangan Serdadu Tridatu."} time={"20 Hours | News"}/>
            {/* <!-- CONTAINER 4 --> */}
            <CardAds gambar="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/newslistads/attachment/2023/Nov/30/65680fa8b96e4/900x300pxl-682x228.png?token=8680dae1eda677969ef9f36e2c6807e4"/>
        </div>

        {/* <!-- CARD BAWAH --> */}
        <div className="flex lg:flex-row justify-center pb-20 gap-5 flex-col items-center">
            {/* <!-- CONTAINER 1 --> */}
            <div className="h-auto w-[241px] bg-white text-black">
                <div>
                    <img className="h-[180px] w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b5a2d6e42a/img-20250116-wa0012-_x400.jpg?token=a45bb6d55344d861aec98b1453538adf" alt="" />
                </div>
                <div className="px-3 py-3">
                    <h1 className="font-bold text-2xl">BEK BERPENGALAMAN DI LIGA 1, JAIMERSON...</h1>
                    <p className="pt-2 font-thin text-[16px]">Bali United FC resmi mendatangkan bek berpengalaman di Liga 1 untuk memperkuat putaran kedua BRI Liga 1 2024/25. </p>
                </div>
                <div className="px-3 py-3 text-gray-400 font-thin items-end">
                    <p>20 Hours | News</p>
                </div>
            </div>
            {/* <!-- CONTAINER 2 --> */}
            <div className="h-auto w-[241px] bg-white text-black">
                <div>
                    <img className="h-[180px] w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/17/678a12072855d/whatsapp-image-2025-01-17-at-15-51-02-_x400.jpeg?token=ee6916ba0afb5ce34cac19de8b518663" alt="" />
                </div>
                <div className="px-3 py-3">
                    <h1 className="font-bold text-2xl">ALASAN HINGGA TARGET AGUNG MANNAN BERSAMA...</h1>
                    <p className="pt-2 font-thin text-[16px]">Bali United FC akhirnya mengumumkan Agung Mannan sebagai bagian dari Serdadu Tridatu pada putaran kedua BRI Liga 1 2024/25 ini.</p>
                </div>
                <div className="px-3 py-3 text-gray-400 font-thin">
                    <p>20 Hours | News</p>
                </div>
            </div>
            {/* <!-- CONTAINER 3 --> */}
            <div className="h-auto w-[241px] bg-white text-black">
                <div>
                    <img className="h-[180px] w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/17/6789fb0b58458/whatsapp-image-2025-01-16-at-18-11-05-1-_x400.jpeg?token=36a87887267073a7ce6e9574363ca80f" alt="" />
                </div>
                <div className="px-3 py-3">
                    <h1 className="font-bold text-2xl">SWASTI PRAPTA, AGUNG MANNAN RESMI BERSERAGAM...</h1>
                    <p className="pt-2 font-thin text-[16px]">Bali United resmi memperkenalkan pemain baru mereka di bursa penutupan putaran kedua BRI Liga 1 2024/25.</p>
                </div>
                <div className="px-3 py-3 text-gray-400 font-thin">
                    <p>20 Hours | News</p>
                </div>
            </div>
            {/* <!-- CONTAINER 4 --> */}
            <div className="h-auto w-[241px] bg-white text-black">
                <div>
                    <img className="h-[180px] w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/16/67890f0a24b9e/whatsapp-image-2025-01-16-at-18-09-24-_x400.jpeg?token=a782f68efe6b31c6700ea3635caca88e" alt="" />
                </div>
                <div className="px-3 py-3">
                    <h1 className="font-bold text-2xl">AGUS MAHENDRA JALANI MASA PEMINJAMAN KE...</h1>
                    <p className="pt-2 font-thin text-[16px]">Bali United resmi melepas sementara Gede Agus Mahendra yang akan menjalani masa peminjaman ke klub Liga 2 musim ini.</p>
                </div>
                <div className="px-3 py-3 text-gray-400 font-thin">
                    <p>20 Hours | News</p>
                </div>
            </div>
        </div>

    </section>

    <section className="bg-gray-950">
        <div className="flex flex-row pl-[127px] pt-10 pb-5 gap-5 items-center  text-white">
            <h1 className="font-bold text-[20px]">PHOTOS</h1>
            <h2 className="">|</h2>
            <h1 className="">See More</h1>
        </div>

        <div className="w-[360px] h-auto lg:pl-[127px]">
            <div className="w-[244px] h-[280px] relative">
                <img className="w-full h-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/gallerycategory/image/2024/Apr/03/660d1d3c64292/bufcweb-300x_.jpg?token=00c2725dd516734e5c3747a433707de4" alt="" />
                <div className="absolute bg-black bg-opacity-80 text-white bottom-0 px-5 py-5 h-1/2">
                    <p className="font-thin pb-2">21 January 2025</p>
                    <h1 className="font-extrabold text-xl">BALI UNITED VS PERSIJA</h1>
                </div>
            </div>
        </div>

        <div className="lg:flex lg:flex-row lg:pl-[127px] lg:pt-12 lg:pb-5 lg:gap-5 lg:items-center hidden text-white">
            <h1 className="font-bold text-[20px]">VIDEOS</h1>
            <h2 className="">|</h2>
            <h1 className="">See More</h1>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-center lg:pb-10 hidden">
            {/* <!-- CONTAINER KIRI --> */}
            <div className="flex px-2">
                <div className="lg:w-[500px] lg:h-[280px] w-[100px] h-[50px]">
                    <iframe className="lg:w-[500px] lg:h-[250px]" src="https://youtu.be/vLQ46PVrazY" frameborder="0"></iframe>
                </div>
            </div>

            {/* <!-- CONTAINER KANAN --> */}
            <div className="flex px-2">
                <div className="lg:w-[500px] lg:h-[280px] w-[100px] h-[50px]">
                    <iframe className="lg:w-[500px] lg:h-[250px]" src="https://youtu.be/vLQ46PVrazY" frameborder="0"></iframe>
                </div>
            </div>
        </div>

    </section>

    <section className="bg-gray-100">
        <div className="flex justify-center pt-20">
            <img src="./src/background.jpg" alt="" />
        </div>

        <div className="flex flex-row pl-[127px] pt-12 pb-5 gap-5 items-center  text-black">
            <h1 className="font-bold text-[20px]">PLAYERS</h1>
            <h2 className="">|</h2>
            <h1 className="text-red-700">See More</h1>
        </div>

        {/* <!-- CARD PLAYER --> */}
        <div className="flex flex-row justify-center py-5 gap-5 pb-20">
            {/* <!-- CONTAINER 1 --> */}
            <div className="h-[360px] w-[236px] bg-red-100 flex">
                <div className="relative">
                    <img className="h-full w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43c8d0102b/privat-mbarga-penyerang-sayap-10.png" alt="" />
                </div>
            </div>
            {/* <!-- CONTAINER 2 --> */}
            <div className="h-[360px] w-[236px] bg-red-100 flex">
                <div>
                    <img className="h-full w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43ca39cb12/rahmat-penyerang-sayap-91.png" alt="" />
                </div>
            </div>
            {/* <!-- CONTAINER 3 --> */}
            <div className="h-[360px] w-[236px] bg-red-100 flex">
                <div>
                    <img className="h-full w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43cca1d3b6/ricky-fajrin-saputera-bek-sayap-24.png" alt="" />
                </div>
            </div>
            {/* <!-- CONTAINER 4 --> */}
            <div className="h-[360px] w-[236px] bg-red-100 flex">
                <div>
                    <img className="h-full w-full object-cover" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43b9f564a4/kadek-agung-widnyana-putra-gelandang-tengah-18.png" alt="" />
                </div>
            </div>
        </div>
    </section>

    <section className="bg-white pb-20">
        {/* <!-- SPONSOR --> */}
        <h2 className="text-black font-extrabold text-xl justify-center flex pt-20 pb-6">SPONSORED BY</h2>

        <div className="flex flex-col h-auto bg-white px-10">
            <div className="flex flex-row gap-10 justify-center items-center">
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/6459e52005506/indofood.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Mar/01/65e1986b2d5ce/logo-bank-ina-2024-warna.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bae1a53e299/logo-sponsor-2024-16-1-1.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bae1be7ce38/logo-sponsor-2024-03-1-1.png" alt="" />
            </div>
            <div className="flex flex-row gap-10 py-3 items-center justify-center">
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Aug/28/64ec48753666f/kukubima-1.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Jul/12/64ae448141660/mandiri-services.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Jul/12/64ae4448b1d34/mandiri-contractor.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/6459e6b8d841f/cbn-hover.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/6459e6d69edb2/indomie-hover.png" alt="" />
            </div>
            <div className="flex flex-row gap-10 items-center py-3 justify-center">
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/6459e7fd98227/specs-hover.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad6d9496f8/logo-sponsor-2024-17.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad78e4a702/logo-sponsor-2024-06.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/6459ea1bbbc6e/ycab.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad826845fe/logo-sponsor-2024-11.png" alt="" />
            </div>
            <div className="flex flex-row gap-10 items-center py-3 justify-center">
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad88f5e7ab/logo-sponsor-2024-12.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad8c2c4b67/logo-sponsor-2024-13.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad8f35aed2/logo-sponsor-2024-18.png" alt="" />
            </div>
            <div className="flex flex-row gap-10 items-center py-3 justify-center">
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Aug/28/64ec4910bc6b2/guinness-bola-1.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Sep/20/66ed27e7a3303/logo-cedea-2024-rgb.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/13/66bad9ac7bf97/logo-sponsor-2024-20.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Jul/12/64ae526dec10a/socios.png" alt="" />
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/6459ead8c6440/bebek-hover.png" alt="" />
            </div>
            <div className="flex justify-center flex-row gap-10 items-center py-3">
                <img className="lg:w-1/6 h-auto w-[32px]" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2024/Aug/14/66bc4960d5e6b/megatix-clean.png" alt="" />
            </div>
        </div>

        <h2 className="text-black font-extrabold text-xl justify-center flex pt-8 pb-6">OUR MEDIA PARTNERS</h2>

        <div className="flex flex-col h-auto bg-white px-20">
            <div className="flex flex-row items-center py-3 justify-center">
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a093c18efe/tribun-bali-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a099f94af1/radar-bali-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a09c2003d8/skor-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0a1fd52c0/antara-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0a447353b/bali-tribune-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0a58ac269/nirwana-tv-hover.png" alt="" />
            </div>

            <div className="flex flex-row gap-2 items-center py-3 justify-center">
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Jul/28/64c3577ceeb6c/bufm-logo-1.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0aa24fb2a/oz-radio.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0abbaf5f4/gema-merdeka-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0ad64f8c4/sonora-hover.png" alt="" />
                <img className="w-1/6 h-auto" src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0aee4b938/fbi-hover.png" alt="" />
            </div>
        </div>

    </section>
    </>
  )
}

export default HomePage