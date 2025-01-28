import Image from "next/image";
import React from "react";

const MediaPartner = () => {
  return (
    <>
      <h2 className="bg-white text-black font-extrabold text-xl justify-center flex pt-8 pb-6">
        OUR MEDIA PARTNERS
      </h2>

      <div className="flex flex-col h-auto bg-white px-20">
        <div className="flex flex-row items-center py-3 justify-center">
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a093c18efe/tribun-bali-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a099f94af1/radar-bali-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a09c2003d8/skor-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0a1fd52c0/antara-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0a447353b/bali-tribune-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0a58ac269/nirwana-tv-hover.png"
            alt=""
            width={100}
            height={100}
          />
        </div>

        <div className="flex flex-row gap-2 items-center py-3 justify-center">
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/Jul/28/64c3577ceeb6c/bufm-logo-1.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0aa24fb2a/oz-radio.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0abbaf5f4/gema-merdeka-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0ad64f8c4/sonora-hover.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="w-1/6 h-auto"
            src="https://baliutd.oss-ap-southeast-5.aliyuncs.com//files/uploads/sponsor/attachment/2023/May/09/645a0aee4b938/fbi-hover.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default MediaPartner;
