import React from "react";

const CardYoutube = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-center lg:pb-10 hidden">
        {/* <!-- CONTAINER KIRI --> */}
        <div className="flex px-2">
          <div className="lg:w-[500px] lg:h-[280px] w-[100px] h-[50px]">
            <iframe
              className="lg:w-[500px] lg:h-[250px]"
              src="https://youtu.be/vLQ46PVrazY"
              frameborder="0"
            ></iframe>
          </div>
        </div>

        {/* <!-- CONTAINER KANAN --> */}
        <div className="flex px-2">
          <div className="lg:w-[500px] lg:h-[280px] w-[100px] h-[50px]">
            <iframe
              className="lg:w-[500px] lg:h-[250px]"
              src="https://youtu.be/vLQ46PVrazY"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardYoutube;
