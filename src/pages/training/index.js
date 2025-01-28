import MediaPartner from "@/components/molecules/MediaPartner";
import Sponsor from "@/components/molecules/Sponsor";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Navbar from "@/components/organism/Navbar";
import Image from "next/image";
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";
import Button from "@/components/atoms/Button";

const Training = () => {
  return (
    <>
      <Navbar />
      <Header src={"/home"} src2={"/training"} title={"Training Centre"} />
      <section>
        <Image
          className="w-full h-full"
          src={"/training.jpg"}
          alt=""
          width={1980}
          height={1280}
        />
      </section>

      <section className="bg-white">
        <div className="flex flex-row justify-around text-black py-10 px-20">
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="flex text-center text-4xl w-[400px] text-red-700 font-bold">
              BALI UNITED TRAINING CENTER
            </h1>
            <p className="flex font-thin text-sm w-[419px]">
              The only Training Center on the Island of the Gods, Bali,
              Indonesia, with a breathtaking view of Purnama Beach. Similar to
              Kapten I Wayan Dipta Stadium, the field at Bali United Training
              Center also features hybrid grass of the Zoysia Matrella type,
              identical to the turf at the home base of Real Madrid Football
              Club, Santiago Bernabeu Stadium, Spain. Several world football
              stars like Sebastian Veron and Jesse Lingard have visited and
              tested this Training Center field, which also boasts comprehensive
              facilities.
            </p>
          </div>
          <hr className="border-l-2 h-[200px] my-10" />
          <div className="flex flex-col justify-center gap-5">
            <Image
              src={
                "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/bali_united.png"
              }
              alt=""
              width={80}
              height={80}
            />
            <div className="flex flex-row items-center gap-3">
              <MdOutlineEmail size={30} />
              <p className="font-thin text-sm">trainingcenter@baliutd.com</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <LuPhone size={30} />
              <p className="font-thin text-sm">+62 881-1008-888</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <GrLocation size={30} />
              <p className="font-thin text-sm">
                Jl. Baypass IB Mantra, Pantai Purnama, Sukawati, Gianyar, Bali
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative">
          <Image
            src={
              "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/images/training_center/bu_tc_overview.png"
            }
            alt=""
            width={1280}
            height={1280}
          />
          <div className="absolute inset-0 flex items-center justify-center text-white flex-col gap-5">
            <h1 className="text-[42px] font-bold">
              BALI UNITED TRAINING CENTER
            </h1>
            <h4 className="text-2xl font-thin">OVERVIEW</h4>
          </div>
        </div>

        <div className="bg-white">
          <h2 className="font-bold text-red-800 text-2xl flex justify-center py-10">
            GALLERY
          </h2>
        </div>

        <div className="bg-white">
          {/* CONTAINER 1 */}
          <div className="flex flex-row justify-center gap-6">
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/jesse_EWEW2533.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                <p className="">Jesse Lingard</p>
              </div>
            </div>
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/juan_EWEW1369.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                Juan Sebastian Veron
              </div>
            </div>
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/indonesia_20221128173734_EWEW8955_3.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                Indonesia National Football Team
              </div>
            </div>
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/argentina_EWEW1046.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                Argentina National Football Team
              </div>
            </div>
          </div>
          {/* CONTAINER 2 */}
          <div className="flex flex-row justify-center gap-6 pt-5">
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/usa_EWEW0049.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                USA National Football Team
              </div>
            </div>
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/canada_EWEW0263.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                Canada National Football Team
              </div>
            </div>
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/mexico_EWEW1237.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                Mexico National Football Team
              </div>
            </div>
            <div className="w-[250px] h-[300px] relative">
              <Image
                className="w-full h-full object-cover"
                src={
                  "https://unitedcreative.oss-ap-southeast-5.aliyuncs.com//BALIUTD/assets/tc_gallery/japan_EWEW0189.jpg"
                }
                alt=""
                width={1280}
                height={1280}
              />
              <div class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white font-semibold text-sm z-10">
                Japan National Football Team
              </div>
            </div>
          </div>
          <div className="flex justify-center py-10 pb-20">
            <Button buttonClassname={"text-white"} title={"Load More"} />
          </div>
        </div>
      </section>
      <Sponsor />
      <MediaPartner />
      <Footer />
    </>
  );
};

export default Training;
