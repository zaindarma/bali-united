import Image from "next/image";
import React from "react";

const AchievementAcademy = () => {
  return (
    <>
      <div className="px-[100px] py-20">
        <div className="flex justify-between gap-10 ">
          <div className="flex items-center">
            <Image
              src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/piala.png"
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="text-black w-[535px] flex flex-col gap-3 font-thin">
            <h1>
              Here are the age groups of Bali United Youth and their
              achievements:
            </h1>
            <li>
              Bali United U12 was formed in 2023 with 26 players from Bali,
              Java, NTB, NTT, Sulawesi to Papua. The achievements that have been
              made are 1st place in Bali United Mataram Cup 2023.
            </li>
            <li>
              Bali United U13 was formed in 2019 with 30 players from the
              islands of Bali, Java, NTB, NTT, Sulawesi to Papua. Their
              achievements include 1st place in Soeratin U13 Regional Bali in
              2019 and 3rd place in Soeratin U13 Regional Bali in 2023.
            </li>
            <li>
              Bali United U15 was formed in 2018 with 30 players from Bali,
              Java, NTB, NTT, Sulawesi to Papua. Their achievements include 2nd
              place in the Bali Regional Soeratin U15 Cup in 2023 and 3rd place
              in the Bali Regional Soeratin U15 Cup in 2018.
            </li>
            <li>
              Bali United U16 was formed in 2018 with 31 players from Bali,
              Java, NTB, NTT, Sulawesi to Papua. The achievements made are as
              2nd place (Runner Up) Elite Pro Academy (EPA) League 1 2018.
            </li>
            <li>
              Bali United U17 was formed in 2018 with 30 players from Bali,
              Java, NTB, NTT, Sulawesi to Papua. Their achievements include 1st
              place in the Soeratin U17 Regional Bali Cup in 2018; 4th place in
              the Soeratin U17 Regional Bali Cup in 2019, and Semifinalist in
              the Nusantara Open in 2023
            </li>
            <li>
              Bali United U18 was formed in 2019 with 30 players from the
              islands of Bali, Java, NTB, NTT, Sulawesi to Papua. The
              achievements made are as 4th Place EPA League 1 U18 in 2019, and
              1st Champion (Champions) EPA League 1 U18 in 2021.
            </li>
            <li>
              Bali United U19 was formed in 2017 with 30 players from Bali,
              Java, NTB, NTT, and Sulawesi to Papua. The achievement that was
              achieved was as the 3rd Champion of the U19 League 1 in 2017.
            </li>
            <li>
              Bali United U20 was formed in 2019 with 31 players from Bali,
              Java, NTB, NTT, Sulawesi to Papua. No achievements have been made
              by the U20 age group, but some of the players who graduated from
              this team have been active at the professional level.
            </li>
            <li>
              Bali United U21, was formed in 2016 with a total of 30 players
              from the islands of Bali, Java, NTB, NTT, Sulawesi, and Papua.
              Achievements achieved as 2nd Place in the 2016 Torabika Soccer
              Championship U21.
            </li>
            <li>
              From the series of age groups formed by Bali United Youth along
              with the achievements presented to the Island of the Gods, several
              names also have the opportunity to enter the senior contract
              professional level.
            </li>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center gap-5">
        <div>
          <Image
            className="w-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/achievements_doc_1.png"
            alt=" "
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            className="w-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/achievements_doc_2.png"
            alt=" "
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            className="w-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/achievements_doc_3.png"
            alt=" "
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-5 py-5">
        <div>
          <Image
            className="w-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/achievements_doc_4.png"
            alt=" "
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            className="w-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/achievements_doc_5.png"
            alt=" "
            width={100}
            height={100}
          />
        </div>
        <div>
          <Image
            className="w-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/achievements_doc_6.png"
            alt=" "
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default AchievementAcademy;
