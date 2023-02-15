"use client";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiCar } from "react-icons/bi";
import {FiOctagon} from 'react-icons/fi'
import {
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiOutlineCog,
} from "react-icons/hi";
const menuItems = [
  { id: 1, label: "Home", icon: BiCar, link: "/" },
  { id: 2, label: "Settings", icon: HiOutlineCog, link: "/" },
];
export default function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const [isCollaped, setCollapsible] = useState(true);
  const wrapperClasses = classNames(
    "flex flex-col justify-between h-screen px-4 pt-8 pb-4 bg-gray-400 ",
    {
      ["w-80"]: !toggle,
      ["w-20"]: toggle,
    }
  );
  const colapseClasses = classNames(
    "p-4 rounded bg-white-200 absolute right-0",
    {
      "rotate-180": toggle,
    }
  );
  const myImgLoader = () => {
    return `https://www.clickdealer.co.uk/wp-content/uploads/2020/02/ClickDealer_Logo_Colour.png`;
  };
  const onMouseOver = () => {
    setCollapsible(!isCollaped);
  };
  const handleSidebarToggle = () => {
    setToggle(!toggle);
  };
  return (
    <aside
      className={wrapperClasses}
      // onMouseEnter={onMouseOver}
      // onMouseLeave={onMouseOver}
      style={{ transition: " width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4 pl-1 ">
            {toggle ? (
             ""
            ) : (
              <Image
                loader={myImgLoader}
                src="https://www.clickdealer.co.uk/wp-content/uploads/2020/02/ClickDealer_Logo_Colour.png"
                alt={""}
                width={200}
                height={200}
              />
            )}
            <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hiddle: toggle,
              })}
            ></span>
          </div>
          {!isCollaped ? (
            <button className={colapseClasses} onClick={handleSidebarToggle}>
          <HiChevronDoubleRight />  
            </button>
          ) : (
            <button className={colapseClasses} onClick={handleSidebarToggle}>
                <HiChevronDoubleLeft />
            </button>
          )}
        </div>
        <div className="flex flex-col items-center mt-24">
          {menuItems.map(({ icon: Icon, ...menu }, index) => {
            return (
              <div className="" key={index}>
                <Link href={menu.link}>
                  <div className="flex items-center w-full h-full px-3 py-4">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggle && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </aside>
  );
}
function useMemo(arg0: () => any, arg1: any[]) {
  throw new Error("Function not implemented.");
}
