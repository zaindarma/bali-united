import CardPlayers from "@/components/molecules/CardPlayers";
import React from "react";

const Players = () => {
  return (
    <>
      <div className="flex flex-row justify-center py-5 gap-5 pb-20">
        {/* <!-- CONTAINER 1 --> */}
        <CardPlayers
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43c8d0102b/privat-mbarga-penyerang-sayap-10.png"
          }
        />
        {/* <!-- CONTAINER 2 --> */}
        <CardPlayers
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43ca39cb12/rahmat-penyerang-sayap-91.png"
          }
        />
        {/* <!-- CONTAINER 3 --> */}
        <CardPlayers
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43ca39cb12/rahmat-penyerang-sayap-91.png"
          }
        />
        {/* <!-- CONTAINER 4 --> */}
        <CardPlayers
          gambar={
            "https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/player/photo_profile/2024/Aug/08/66b43ca39cb12/rahmat-penyerang-sayap-91.png"
          }
        />
      </div>
    </>
  );
};

export default Players;
