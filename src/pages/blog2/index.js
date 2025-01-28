import MediaPartner from "@/components/molecules/MediaPartner";
import Sponsor from "@/components/molecules/Sponsor";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Navbar from "@/components/organism/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog2 = () => {
  return (
    <>
      <Navbar />
      <Header src={"/home"} src2={"#"} title={"Blog"} />
      <section class="w-full h-full flex justify-center px-[130px] bg-gray-100 text-black">
        <div class="flex flex-col items-center bg-white pb-20">
          <Image
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/27/67976db802f35/whatsapp-image-2025-01-27-at-16-56-49-_x400.jpeg?token=6a9190c86c7d2fa9ffb92076f90ac5df"
            alt=""
            width={1280}
            height={1280}
          />
          <div class="flex flex-col justify-center">
            <h1 class="w-[500px] text-4xl font-bold pt-10">
              HASIL SERDADU TRIDATU MUDA DI LAGA PERDANA BABAK 8 BESAR EPA LIGA
              1 MUSIM INI!
            </h1>
            <p class="text-left font-thin py-10">19 January 2025, 19:13 +08</p>
            <hr />
            <div class="flex flex-col gap-5 pt-10 text-sm pb-[100px]">
              <p class="text-left font-thin w-[550px]">
                Tiga tim Bali United Youth baru saja menuntaskan laga perdana
                mereka di babak 8 besar Elite Pro Academy (EPA) Liga 1 2024/25.
              </p>
              <p class="text-left font-thin w-[550px]">
                Ketiga tim tersebut adalah Bali United U16, Bali United U18 dan
                Bali United U20 yang kompak lolos ke fase kedua musim ini.
              </p>
              <p class="text-left font-thin w-[550px]">
                Dua tim terakhir menjalani laga tandang sementara tim pertama
                melakoni laga kandang hari Sabtu (18/1) kemarin.
              </p>
              <p class="text-left font-thin w-[550px]">
                Hasilnya, Bali United U16 berhasil menang 1-0 atas tamunya
                Persita U16.
              </p>
              <p class="text-left font-thin w-[550px]">
                Sementara Bali United U18 harus mengakui kemenangan 2-1 Semen
                Padang FC selaku tuan rumah.
              </p>
              <p class="text-left font-thin w-[550px]">
                Dan Bali United U20 berhasil menahan imbang tanpa gol tuan rumah
                Persib Bandung U20.
              </p>
              <p class="text-left font-thin w-[550px]">
                Pelatih kepala Bali United U16, Sandhika Pratama bersyukur atas
                raihan poin pertama anak asuhnya di babak 8 besar ini yang
                menunjukkan hasil positif.
              </p>
              <p class="text-left font-thin w-[550px]">
                Alhamdullilah, kami bersyukur bisa meraih tiga poin pertama di
                babak 8 besar. Kami menyadari tim yang lolos fase ini adalah
                yang terbaik sehingga saya mengingatkan para pemain untuk
                memiliki keyakinan dan mental menganggap semua pertandingan di
                babak ini adalah partai final, ujar Coach Sandhika.
              </p>
              <p class="text-left font-thin w-[550px]">
                Pekan berikutnya, Bali United U16 akan bertandang ke markas
                Persebaya Surabaya U16.{" "}
              </p>
              <p class="text-left font-thin w-[550px]">
                Sementara Bali United U18 akan menjamu PSS Sleman U18 dan Bali
                United U20 melawan Dewa United U20 di Bali United Training
                Center.{" "}
              </p>
              <p class="text-left font-thin w-[550px]">
                Ketiga laga ini akan berlangsung hari Jumat (24/1) mendatang.
              </p>
              <p class="text-left font-thin w-[550px]">
                Selamat berjuang Serdadu Tridatu Muda!***
              </p>
            </div>
            <hr />
            <h1 class="font-bold text-lg py-10">Related Article</h1>

            <div class="flex flex-row gap-5">
              {/* <!-- CONTAINER 1 --> */}
              <div class="h-auto w-[241px] bg-white shadow-xl">
                <Link href={"#"}>
                  <Image
                    class="h-[180px] w-full object-cover"
                    src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/19/678ce16bb6502/img-20250119-wa0015-1-_x400.jpg?token=138a90bc4e5f035e415ec5af4b4f709d"
                    alt=""
                    width={1280}
                    height={1280}
                  />
                </Link>
                <div class="px-3 py-3">
                  <h1 class="font-bold text-2xl">
                    MILIKI KENANGAN JUARA LIGA 1 2019 DI PADANG, BALI UNITED...
                  </h1>
                  <p class="pt-2 font-thin text-[16px]">
                    Laga pekan ke-19 BRI Liga 1 2024/25 hari Senin (20/1) besok
                    akan mempertemukan Semen Padang FC menjamu Bali United FC
                  </p>
                </div>
                <div class="px-3 py-3 text-gray-400 font-thin">
                  <p>20 Hours | News</p>
                </div>
              </div>
              {/* <!-- CONTAINER 2 --> */}
              <div class="h-auto w-[241px] bg-white shadow-xl">
                <Link href={"#"}>
                  <Image
                    class="h-[180px] w-full object-cover"
                    src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b8b4af32a2/img-20250118-wa0023-_x400.jpg?token=0e5582d1170433f797a237fd29f60d30"
                    alt=""
                    width={1280}
                    height={1280}
                  />
                </Link>
                <div class="px-3 py-3">
                  <h1 class="font-bold text-2xl">
                    PUJIAN JAIMERSON KE TECO, DARI PELATIH...
                  </h1>
                  <p class="pt-2 font-thin text-[16px]">
                    Kehadiran Jaimerson da Silva Xavier ke klub Bali United FC
                    mempertemukan kembali bek Brasil ini dengan Stefano Cugurra.
                  </p>
                </div>
                <div class="px-3 py-3 text-gray-400 font-thin">
                  <p>20 Hours | News</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sponsor />
      <MediaPartner />
      <Footer />
    </>
  );
};

export default Blog2;
