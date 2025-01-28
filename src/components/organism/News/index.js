import Card from "@/components/molecules/Card";
import CardAds from "@/components/molecules/CardAds";
import CardBig from "@/components/molecules/CardBig";
import CardPhoto from "@/components/molecules/CardPhoto";
import TitleSection from "@/components/molecules/TitleSection";
import React from "react";

const News = () => {
  return (
    <>
      <TitleSection title={"News"} titleSectionClassname={"text-red-800"} />

      <div className="flex lg:flex-row justify-center flex-col items-center">
        {/* <!-- CONTAINER KIRI --> */}
        <CardBig
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/19/678cec4f290ef/img-20250119-wa0018-_x400.jpg?token=692142c029ec5cdb0725d8c8ef76ff8e"
          }
          title={"HASIL SERDADU TRIDATU MUDA DI LAGA PERDANA..."}
          desc={
            "Tiga tim Bali United Youth baru saja menuntaskan laga perdana..."
          }
          time={"20 Hours | News"}
        />
        {/* <!-- CONTAINER KANAN --> */}
        <CardPhoto
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/27/67976db802f35/whatsapp-image-2025-01-27-at-16-56-49-_x400.jpeg?token=6a9190c86c7d2fa9ffb92076f90ac5df"
          }
          title={
            "TIGA PEMAIN ANYAR DEBUT LAWAN SEMEN PADANG, PUJIAN TECO POSITIF..."
          }
          date={"21 January 2025"}
          desc={
            "Tiga pemain anyar putaran kedua Bali United FC berhasil tampil..."
          }
        />
      </div>

      {/* <!-- CARD ATAS --> */}
      <div className="flex lg:flex-row justify-center py-5 gap-5 flex-col items-center">
        {/* <!-- CONTAINER 1 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/27/67977d6d9d25f/fotojet-5-1280x590.jpg?token=8639fbed02a6d8c034e247115aa2a33b"
          }
          title={"MILIKI KENANGAN JUARA LIGA 1 2019 DI PADANG, BALI UNITED..."}
          desc={
            "Laga pekan ke-19 BRI Liga 1 2024/25 hari Senin (20/1) besok akan mempertemukan Semen Padang FC menjamu Bali United FC"
          }
          time={"19 Hours | News"}
        />
        {/* <!-- CONTAINER 2 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b8b4af32a2/img-20250118-wa0023-_x400.jpg?token=0e5582d1170433f797a237fd29f60d30"
          }
          title={"PUJIAN JAIMERSON KE TECO, DARI PELATIH..."}
          desc={
            "Kehadiran Jaimerson da Silva Xavier ke klub Bali United FC mempertemukan kembali bek Brasil ini dengan Stefano Cugurra."
          }
          time={"20 Hours | News"}
        />
        {/* <!-- CONTAINER 3 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b8aecb453b/img-20250118-wa0025-_x400.jpg?token=c5b2d86f417196093b4ecd90ade720ee"
          }
          title={"ALASAN DAN TARGET JAIMERSON XAVIER PASCA..."}
          desc={
            "Pemain asing baru Bali United FC, Jaimerson da Silva Xavier menjelaskan perihal dirinya menerima pinangan Serdadu Tridatu."
          }
          time={"20 Hours | News"}
        />
        {/* <!-- CONTAINER 4 --> */}
        <CardAds gambar="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/newslistads/attachment/2023/Nov/30/65680fa8b96e4/900x300pxl-682x228.png?token=8680dae1eda677969ef9f36e2c6807e4" />
      </div>

      {/* <!-- CARD BAWAH --> */}
      <div className="flex lg:flex-row justify-center pb-20 gap-5 flex-col items-center">
        {/* <!-- CONTAINER 1 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/18/678b5a2d6e42a/img-20250116-wa0012-_x400.jpg?token=a45bb6d55344d861aec98b1453538adf"
          }
          title={"BEK BERPENGALAMAN DI LIGA 1, JAIMERSON..."}
          desc={
            "Bali United FC resmi mendatangkan bek berpengalaman di Liga 1 untuk memperkuat putaran kedua BRI Liga 1 2024/2025"
          }
          time={"20 Hours | News"}
        />
        {/* <!-- CONTAINER 2 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/17/678a12072855d/whatsapp-image-2025-01-17-at-15-51-02-_x400.jpeg?token=ee6916ba0afb5ce34cac19de8b518663"
          }
          title={"ALASAN HINGGA TARGET AGUNG MANNAN BERSAMA..."}
          desc={
            "Bali United FC akhirnya mengumumkan Agung Mannan sebagai bagian dari Serdadu Tridatu pada putaran kedua BRI Liga 1 2024/25 ini."
          }
          time={"20 Hours | News"}
        />
        {/* <!-- CONTAINER 3 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/17/6789fb0b58458/whatsapp-image-2025-01-16-at-18-11-05-1-_x400.jpeg?token=36a87887267073a7ce6e9574363ca80f"
          }
          title={"SWASTI PRAPTA, AGUNG MANNAN RESMI BERSERAGAM..."}
          desc={
            "Bali United resmi memperkenalkan pemain baru mereka di bursa penutupan putaran kedua BRI Liga 1 2024/25."
          }
          time={"20 Hours | News"}
        />
        {/* <!-- CONTAINER 4 --> */}
        <Card
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/news/image/2025/Jan/16/67890f0a24b9e/whatsapp-image-2025-01-16-at-18-09-24-_x400.jpeg?token=a782f68efe6b31c6700ea3635caca88e"
          }
          title={"AGUS MAHENDRA JALANI MASA PEMINJAMAN KE..."}
          desc={
            "Bali United resmi melepas sementara Gede Agus Mahendra yang akan menjalani masa peminjaman ke klub Liga 2 musim ini."
          }
          time={"20 Hours | News"}
        />
      </div>
    </>
  );
};

export default News;
