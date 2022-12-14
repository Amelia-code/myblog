import React from "react";

export default function Post() {
  return (
    <div className="w-full flex flex-col justify-center justify-items-center mb-[28px] border-b-2 border-gray-500">
      <div className="font-semibold text-[28px]">
      [#1] 12.23 패치노트 (수정)
      </div>
      <div className="font-semibold text-[18px]  pb-[5px]"> December 14, 2022 | The League of Legends</div>
      <div className="flex flex-col space-between leading-5  font-medium ">
      올해의 마지막 패치, 12.23 패치가 도착했습니다!
      무작위 총력전과 프리시즌 적용 이후 패치에 오신 것을 환영합니다! 이번 주에는 칼바람 나락에 적용할 몇 가지 대규모 변경사항이 <br/> 있습니다. 
      바로 서리 정거장과 다리 수리 그리고 조경 공사입니다. 그러니 무료로 입장할 수 있는 리그 오브 레전드의 첫 무작위 총력전 격전을 꼭 즐겨보세요!  
      또한 이번 패치에서는 <br/> 몇 가지 프리시즌 후속 업데이트를 통해 고전하고 있는 몇몇 탱커를 돕고 
      지나치게 강한 모습을 보여주는 모데카이저 같은 정글러의 위력을 하향했으며 짜릿한 제리 업데이트도 준비<br/> 했습니다.
      </div>
      <div className="flex pb-[10px]">
        <a href="https://www.leagueoflegends.com/ko-kr/news/game-updates/patch-12-23-notes/" target="_blank" className="flex flex-row  border-[2px] pl-[15px] mt-[6px] pt-[1px] pb-[3px] rounded-2xl border-gray-400 text-gray-700 dark:text-slate-50" > more 
        <img src="img/Layer1.png"  className = "mr-[10px] ml-1" alt="" /> </a>
      </div>
    </div>
  );
}
