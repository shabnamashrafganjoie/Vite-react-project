import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaHeart } from "react-icons/lia";
import { LogoImage } from "@/components/ui/Images";
import { IoHomeOutline } from "react-icons/io5";


function Header() {
  return (
    <header className="bg-gray-100 flex items-center justify-between px-8 h-[60px]">
      
      <div className="flex-shrink-0">
        <LogoImage className="w-[80%] h-[60px] object-contain" />
      </div>

      <div className="flex-1 text-center">
        <h1 className="font-Dana text-base md:text-lg">فروشگاه خوشحالی فروشی</h1>
      </div>

      <div className="flex items-center space-x-4 rtl:space-x-reverse">
      <IoHomeOutline className="w-6 h-6 text-pink-500 "/>
      <div className="border-l border-gray-400 h-6"></div>

        <LiaHeart className="w-6 h-6 fill-pink-500" />
        <div className="border-l border-gray-400 h-6"></div>
        <AiOutlineShoppingCart className="w-6 h-6 fill-pink-500" />

      </div>

    </header>
  );
}

export default Header;
