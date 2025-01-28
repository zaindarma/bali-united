import CardLeague from "@/components/molecules/CardLeague";
import CardNext from "@/components/molecules/CardNext";
import CardPrevious from "@/components/molecules/CardPrevious";
import React from "react";

const CardMatch = () => {
  return (
    <div className="flex lg:flex-row justify-center flex-col">
      {/* <!-- CONTAINER 1 --> */}
      <CardPrevious
        title={"PREVIOUS MATCH"}
        tim1={"BALI UNITED FC"}
        gambar1={
          "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"
        }
        skor1={"1"}
        tim2={"Persik Kediri"}
        gambar2={
          "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/662784bcaa992/logo-persik-kediri.png"
        }
        skor2={"3"}
        stadion={"Stadion Kapten I Wayan Dipta BRI Liga 1 2024/2025"}
      />
      {/* <!-- CONTAINER 2 --> */}
      <CardNext
        gambar1={
          "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"
        }
        gambar2={
          "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/6627814d18406/semen-padang.png"
        }
        tim1={"BALI UNITED FC"}
        tim2={"Semen Padang"}
        stadion={"Stadion Haji Agus Salim BRI LIGA 1 2024/2025"}
      />
      {/* <!-- CONTAINER 3 --> */}
      <CardLeague
        gambar1={
          "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/66277d5ecd935/persib-bandung-min-1.png"
        }
        tim1={"Persib Bandung"}
        p1={"19"}
        gd1={"16"}
        pts1={"40"}
        gambar2={
          "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/6627840845d95/logo-persebaya-surabaya.png"
        }
        tim2={"Persebaya Surabaya"}
        p2={"19"}
        gd2={"5"}
        pts2={"37"}
        gambar3={
          "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/6627804cdc9da/persija-jakarta.png"
        }
        tim3={"Persija Jakarta"}
        p3={"19"}
        gd3={"12"}
        pts3={"37"}
        gambar4={
          "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/club/logo_url/2024/Apr/23/66278508a26b5/dewa-united-fc.png"
        }
        tim4={"Dewa United FC"}
        p4={"19"}
        gd4={"14"}
        pts4={"31"}
        gambar5={
          "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"
        }
        tim5={"BALI UNITED FC"}
        p5={"19"}
        gd5={"11"}
        pts5={"31"}
      />
    </div>
  );
};

export default CardMatch;
