import MediaPartner from "@/components/molecules/MediaPartner";
import Sponsor from "@/components/molecules/Sponsor";
import BlogContent from "@/components/organism/BlogContent";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Navbar from "@/components/organism/Navbar";
import RelatedArticle from "@/components/organism/RelatedArticle";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <>
      <Navbar />
      <Header src={"/home"} src2={"#"} title={"Blog"} />
      <section class="w-full h-full flex justify-center px-[130px] bg-gray-100 text-black">
        <div class="flex flex-col items-center bg-white pb-20">
          <BlogContent
            gambar={
              "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/25/67948ae089380/img-20250125-wa0006-1280x590.jpg?token=c3c14247804dc11d08708ada103d8048"
            }
            date={"25 January 2025"}
            desc={
              "Pasukan Bali United Youth yang terdiri dari tiga kelompok usia baru saja menuntaskan laga pekan kedua babak 8 besar Elite Pro Academy (EPA) Liga 1 2024/25. Ketiga tim tersebut adalah Bali United U16, Bali United U18 dan Bali United U20. Tim pertama yang disebutkan harus menjalani laga tandang ke markas Persebaya Surabaya U16. Sementara dua tim lainnya melakoni laga kandang di Bali United Training Center, Gianyar. Bali United U18 menjamu PSS Sleman dan Bali United U20 melawan Dewa United U20. Hasilnya, Bali United U16 harus mengakui keunggulan tuan rumah dengan skor 2-1. Lalu untuk Bali United U18 ditahan imbang tamunya dengan skor 1-1 dengan PSS Sleman. Dan Bali United U20 kalah tipis 0-1 dari tamunya Dewa United U20. Pekan berikutnya akan dilaksanakan pada hari Kamis (30/1) mendatang. Bali United U16 akan menjalani laga tandang ke markas Persis Solo. Begitu juga Bali United U20 yang akan bertolak ke Marimoi, Tidore melawan Malut United U20. Sementara Bali United U18 akan kembali melakoni laga kandang menjamu PSM Makassar U18 di Bali United Training Center, Gianyar.***"
            }
            time={"13:55"}
            title={
              "HASIL EPA LIGA 1 PEKAN KEDUA, TIGA TIM GAGAL RAIH HASIL MAKSIMAL!"
            }
          />

          <RelatedArticle
            descBlog1={
              "Laga pekan ke-19 BRI Liga 1 2024/25 hari Senin (20/1) besok akan mempertemukan Semen Padang FC menjamu Bali United FC"
            }
            descBlog2={
              "Kehadiran Jaimerson da Silva Xavier ke klub Bali United FC mempertemukan kembali bek Brasil ini dengan Stefano Cugurra."
            }
            gambarBlog1={
              "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/25/67948ae089380/img-20250125-wa0006-_x400.jpg?token=9c840d5dfc19be4e3cb4d762730cdb46"
            }
            gambarBlog2={
              "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/23/67920f8c80dff/whatsapp-image-2025-01-23-at-17-44-11-_x400.jpeg?token=23b1166d4e0e3992c3f654131e365586"
            }
            titleBlog1={
              "MILIKI KENANGAN JUARA LIGA 1 2019 DI PADANG, BALI UNITED..."
            }
            titleBlog2={"PUJIAN JAIMERSON KE TECO, DARI PELATIH..."}
          />
        </div>
        y
      </section>
      <Sponsor />
      <MediaPartner />
      <Footer />
    </>
  );
};

export default Blog;
