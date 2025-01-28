import Image from "next/image";
import React from "react";

const FacilitiesAcademy = () => {
  return (
    <div className="px-20 py-20 text-black">
      <h1 className="font-bold text-3xl pb-5">Facilities</h1>
      <div className="flex flex-row">
        <div>
          <Image
            className="w-[200px] h-[269px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_1.png"
            alt=""
            width={1280}
            height={1280}
          />
        </div>
        <div className="flex flex-col">
          <Image
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_3.png"
            alt=""
            width={450}
            height={100}
          />
          <Image
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_2.png"
            alt=""
            width={450}
            height={100}
          />
        </div>
        <div>
          <Image
            className="w-[200px] h-[269px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_4.png"
            alt=""
            width={1280}
            height={1280}
          />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesAcademy;
