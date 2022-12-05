import React from "react";
import Sidebar from "../components/Sidebar";
import MobileSidebar from "../components/mobileSidebar";

export default function Layout({ children }) {
  // const hambergerHandler = () => {
  //   const sidebar = document.querySelector(".sidebar");
  //   const hamberger = document.querySelector(".hamberger");
  //   const main_content = document.querySelector(".main_content");
  //   sidebar.classList.remove("hidden");
  //   hamberger.classList.add("hidden");
  //   main_content.classList.remove("col-span-4");
  //   main_content.classList.add("col-span-3");
  // };
  // const main_content_clicked = () => {
  //   const sidebar = document.querySelector(".sidebar");
  //   const hamberger = document.querySelector(".hamberger");
  //   const main_content = document.querySelector(".main_content");
  //   sidebar.classList.add("hidden");
  //   hamberger.classList.remove("hidden");
  //   main_content.classList.add("col-span-4");
  //   main_content.classList.remove("col-span-3");
  // };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 bg-gray-200">
        {/* Sidebar */}
        <div className="hidden sm:block sidebar">
          <Sidebar />
        </div>
        {/* <content/> */}
        <div className="sm:col-span-3 col-span-4 main_content">{children}</div>
      </div>
      {/* mobile sidebar */}
      <div className="sm:hidden mt-24">
        <MobileSidebar />
      </div>
    </>
  );
}
