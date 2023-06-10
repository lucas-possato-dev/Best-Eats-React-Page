import { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSafeFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp, MdFavorite } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={20} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Search for foods"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 gap-2 rounded-full hover:bg-white hover:border-s hover:border-black hover:text-black transition-all duration-150 ease-in-out">
        <BsFillCartFill size={20} /> Cart
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800 duration-150 transition-all ">
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <TbTruckDelivery size={25} className="mr-2" /> Orders
            </li>
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <MdFavorite size={25} className="mr-2" /> Favorites
            </li>
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <FaWallet size={25} className="mr-2" /> Wallet
            </li>
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <MdHelp size={25} className="mr-2" /> Help
            </li>
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <AiFillTag size={25} className="mr-2" /> Promotions
            </li>
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <BsFillSafeFill size={25} className="mr-2" /> Best One
            </li>
            <li className="text-xl py-4 flex items-center cursor-pointer hover:bg-gray-200  hover:rounded-full">
              <FaUserFriends size={25} className="mr-2" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
