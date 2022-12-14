import React from "react";
import { useState } from "react";

export default function Footer() {
  const [email, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`);
  };

  return (
    <footer className="flex justify-around flex-wrap w-full bg-[#333333] dark:bg-slate-800 text-white h-[250px] py-7">
      <div className="flex flex-col justify-between">
        <div className="font-bold text-2xl">My blog</div>
        <div>
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
        </div>
        <div>© 2022 blog, Inc.</div>
      </div>
      <div className="flex flex-col justify-start">
        <div className="font-bold text-2xl">MEMU</div>
        <div className="flex flex-col mt-5 justify-between h-full">
          <a href="/">About us</a>
          <a href="/">Contacts</a>
          <a href="/">Tems & Condition</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
      <div className="flex flex-col justify-start">
        <div className="font-bold text-2xl">FOLLOW US</div>
        <div className="flex flex-col mt-5 h-full justify-between gap-1">
          <a href="https://www.facebook.com/" target="_blank" >Facebook</a>
          <a href="https://twitter.com/home?lang=ko" target="_blank">Twitter</a>
          <a href="https://www.instagram.com/" target="_blank">Instargram</a>
          <a href="https://github.com/" target="_blank">Github</a>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-2xl">NEW SLETTER</div>
        <div className="mt-3">Suspendisse handrerit tellus</div>

        <form className="flex rounded-lg mt-3 bg-white">
          <input
            type="text"
            value={email}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search for..."
            className="bg-transparent p-2 text-white"
          />
          <span className="h-full border-gray-700 border-[1px]" />
          <button
            type="button"
            className="p-3"
            onClick={handleSubmit}
            style={{ cursor: "pointer" }}
          >
            <img src="img/kakao.png" alt ="kakao" />
          </button>
        </form>
      </div>
    </footer>
  );
}
