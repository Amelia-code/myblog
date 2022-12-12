import React from "react";

export default function Sidebar() {
  return (
    <div className="flex flex-col text-[12px] text-[#dadada] bg-[#333333] dark:bg-slate-800 dark:border-slate-500 w-[200px] p-[20px]">
      <img src="img/yumi.png" alt="catimg" />
      <div className="text-[20px] font-bold"> Miyu </div>
      <div className="text-[12px] mt-2">
        I love 귀멸의 칼날! 원피스 에이스와 결혼하고싶은데 죽었어용 ㅠ
      </div>
      <hr className="my-2" />
      <div className="flex">
        <img className="mr-1 w-4 h-4" src="img/ping2.png" alt="장소아이콘" />
        <p>Seoul, Republic of Korea</p>
      </div>
      <div className="flex mt-3">
        <img className="mr-1 w-4 h-4" src="img/link.png" alt="블로그링크" />
        <a href="index.html" target="_blank">
          {" "}
          https://blog.com/{" "}
        </a>
      </div>
      <hr className="my-2" />
      <div>
        <ul className="flex gap-2">
          <li>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <img className="w-4 h-4" src="img/github.png" alt="깃허브" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <img className="w-4 h-4" src="img/tetter.png" alt="트위터" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <img className="w-4 h-4" src="img/youtube.png" alt="유튜브" />
            </a>
          </li>
          <li>
            <a href="index.html" target="_blank">
              <img className="w-4 h-4" src="img/share.png" alt="공유아이콘" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
