import React from "react";

export default function Post() {
  return (
    <div className="w-full flex flex-col justify-center justify-items-center mb-[28px] border-b-2 border-gray-500">
      <div className="font-bold text-[28px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur
        adipisc{" "}
      </div>
      <div className="font-bold text-[18px]"> November 12, 2022 | Cat</div>
      <div className="flex flex-col space-between">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspen
        <br />
        disse ultrices gravida. Risus commodo viverra maecenas accumsan lacus
        vel facilisis. magna aliqua. Quis ipsum suspendisse ultrices gravida.{" "}
        <br />
        Risus commodo viverra maecenas accumsan lacus vel facilisis.
      </div>
      <div className="btn">
        <a href="index.html" target="_blank" className="btn1">
          <img src="img/arrow.png" alt="" />
        </a>
        <a href="index.html" target="_blank" className="btn2">
          more
        </a>
      </div>
    </div>
  );
}
