import React from "react";
import Post from "./Post";

export default function Main() {
  return (
    <section>
      <div className = "absolute left-[330px] top-[215px] dark:text-slate-50 ">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </section>
  );
}
