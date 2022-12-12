import React from "react";

export default function Post() {
  return (
    <div id="post">
      <div className="title">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,consectetur
        adipisc{" "}
      </div>
      <div className="date"> November 12, 2022 | Cat</div>
      <div className="text">
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
          <img src="img/arrow.png" />
        </a>
        <a href="index.html" target="_blank" className="btn2">
          more
        </a>
      </div>
    </div>
  );
}
