import Button from "@/components/atoms/Button";
import Footer from "@/components/organism/Footer";
import Navbar from "@/components/organism/Navbar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuAcademy = () => {
  return (
    <>
      <Navbar />
      <section className="w-full h-full flex justify-center text-black">
        <div>
          <div className="relative">
            <Image
              className="w-[1280px] h-[480px]"
              src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/home_banner.png"
              alt=""
              width={100}
              height={100}
            />
            <div className="absolute bottom-0 pl-[100px] flex flex-col gap-5 pb-5">
              <p className="font-thin text-3xl">
                We are opening our academy to the public
              </p>
              <h1 className="font-bold text-4xl">
                Be A Part Of Bali United Academy
              </h1>
              <p className="font-thin text-3xl">Open For Boys And Girls,</p>
              <p className="font-thin text-3xl">Start From Under-8 Age Group</p>
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSf7DjxQ_hkoUsEqtWjE9P99u9mJW3MEhTprHR-ju7mmnB_Uwg/viewform"
                }
                target="_blank"
              >
                <Button
                  buttonClassname={"text-white rounded-lg font-thin text-lg"}
                  title={"Join Us"}
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full flex justify-center text-black">
        <div className="relative">
          <Image
            className="w-[1280px] h-[480px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/training_center/EWEW4348.jpg"
            alt=""
            width={100}
            height={100}
          />
          <div className="absolute top-0 pl-[100px] pt-[100px]">
            <h1 className="text-black font-bold text-3xl pb-3">
              Terms & Condition
            </h1>
            <li className="text-sm pl-5">
              Bali United Academy will be open for the U-8 age category
            </li>
            <li className="text-sm pl-5">Classes will start in March 2024.</li>
            <li className="text-sm pl-5">
              Training sessions will be held twice a week.
            </li>
            <li className="text-sm pl-5">
              Each student will receive 2 jerseys for training and 1 football to
              take home.
            </li>
            <li className="text-sm pl-5">
              Registration is open from now until March 2024, get a special
              registration fee of Rp 1.5 million.
            </li>
            <li className="text-sm pl-5">
              Agreeing to a monthly fee of Rp 500,000
            </li>
            <p className="pt-3">*terms & condition apply</p>
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-white text-black">
        <div className="px-[100px] py-20">
          <h1 className="font-bold text-3xl pb-5">About</h1>
          <div className="flex justify-between gap-10">
            <div className="text-black w-[535px]">
              <p className="font-thin">
                Bali United Youth is an age group football development program
                which is an original generation of Bali United FC. Bali United
                Youth has been established together with Bali United FC since
                2015. The existence of Bali United Youth is the answer to the
                problem of developing local talented young players in Bali. The
                existence of Bali United Youth is the beginning of the
                regeneration of young talents to go to the professional level
                from Bali for the Indonesian national team. In addition to being
                a home for young talents from Bali, several young talents from
                outside Bali also underwent the process with Bali United Youth.
                Among them are from Java, West Nusa Tenggara, East Nusa
                Tenggara, Sulawesi, and Papua. this happens because Bali has a
                professional football club that is quite promising in the
                future.
              </p>
            </div>
            <div className="text-black w-[535px]">
              <p className="font-thin">
                Approaching its 9th year, Bali United Youth has different age
                groups following the competition held by PSSI and the
                competition operator, PT LIB every year. From all age groups,
                Bali United Youth has made many achievements in various age
                group competitions that are participated every year. The players
                who started to shine with Bali United FC include Made Andhika
                Wijaya, Kadek Agung Widnyana Putra, Komang Tri Arta Wiguna, Made
                Tito Wiratama, Kadek Arel Priyatna, Rahmat Arjuna, I Gede Sunu
                Jyesta Wibawa, I Gede Agus Mahendra, Rakasurya Handika, Komang
                Aryantara, and I Nyoman Adi Wirya Tama. Many players who
                graduated from Bali United Youth have gone on to new careers
                with professional careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative">
          <Image
            className="lgw-[1280px] h-[360px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/intro_banner.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="absolute top-0 pl-[100px] pt-[80px] text-white flex flex-col gap-5">
            <h1 className="font-bold text-3xl pb-3">Bali United Academy</h1>
            <p className="font-light lg:w-[400px]">
              Bali-based soccer education managed by professional clubs and the
              best facilities in Bali.
            </p>
            <p className="font-light lg:w-[400px]">
              In planning programming, implementation, supervision and
              evaluation of coaching using sports science and related
              disciplines.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-full flex justify-center text-black">
        <div className="relative">
          <Image
            className="w-[1280px] h-[450px]"
            src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/visi_misi_banner.png"
            alt=""
            width={100}
            height={100}
          />
          <div className="absolute top-0 pl-[100px] pt-[80px] flex flex-col gap-14">
            <div className="flex flex-col gap-4">
              <h1 className="text-black font-bold text-3xl">Vision</h1>
              <p className="lg:w-[360px] pt-3 font-thin">
                To bring a next level of standard in football development for
                youth to become professional players.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-black font-bold text-3xl">Mission</h1>
              <p className="lg:w-[360px] pt-3 font-thin">
                To become a football academy that can bring Indonesia talented
                youth to the world level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full bg-white">
        <div className="px-[100px] py-20">
          <div className="flex justify-between gap-10 ">
            <div className="flex items-center">
              <Image
                src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/piala.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="text-black w-[535px] flex flex-col gap-3 font-thin">
              <h1>
                Here are the age groups of Bali United Youth and their
                achievements:
              </h1>
              <li>
                Bali United U12 was formed in 2023 with 26 players from Bali,
                Java, NTB, NTT, Sulawesi to Papua. The achievements that have
                been made are 1st place in Bali United Mataram Cup 2023.
              </li>
              <li>
                Bali United U13 was formed in 2019 with 30 players from the
                islands of Bali, Java, NTB, NTT, Sulawesi to Papua. Their
                achievements include 1st place in Soeratin U13 Regional Bali in
                2019 and 3rd place in Soeratin U13 Regional Bali in 2023.
              </li>
              <li>
                Bali United U15 was formed in 2018 with 30 players from Bali,
                Java, NTB, NTT, Sulawesi to Papua. Their achievements include
                2nd place in the Bali Regional Soeratin U15 Cup in 2023 and 3rd
                place in the Bali Regional Soeratin U15 Cup in 2018.
              </li>
              <li>
                Bali United U16 was formed in 2018 with 31 players from Bali,
                Java, NTB, NTT, Sulawesi to Papua. The achievements made are as
                2nd place (Runner Up) Elite Pro Academy (EPA) League 1 2018.
              </li>
              <li>
                Bali United U17 was formed in 2018 with 30 players from Bali,
                Java, NTB, NTT, Sulawesi to Papua. Their achievements include
                1st place in the Soeratin U17 Regional Bali Cup in 2018; 4th
                place in the Soeratin U17 Regional Bali Cup in 2019, and
                Semifinalist in the Nusantara Open in 2023
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
                Java, NTB, NTT, Sulawesi to Papua. No achievements have been
                made by the U20 age group, but some of the players who graduated
                from this team have been active at the professional level.
              </li>
              <li>
                Bali United U21, was formed in 2016 with a total of 30 players
                from the islands of Bali, Java, NTB, NTT, Sulawesi, and Papua.
                Achievements achieved as 2nd Place in the 2016 Torabika Soccer
                Championship U21.
              </li>
              <li>
                From the series of age groups formed by Bali United Youth along
                with the achievements presented to the Island of the Gods,
                several names also have the opportunity to enter the senior
                contract professional level.
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

        <div className="px-20 py-20 text-black">
          <h1 className="font-bold text-3xl pb-5">Facilities</h1>
          <div className="flex flex-row">
            <div>
              <Image
                className="w-[200px] h-[269px]"
                src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_1.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col">
              <Image
                src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_3.png"
                alt=""
                width={100}
                height={100}
              />
              <Image
                src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_2.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div>
              <Image
                className="w-[200px] h-[269px]"
                src="https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/buacademy/facilities_4.png"
                alt=""
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BuAcademy;
