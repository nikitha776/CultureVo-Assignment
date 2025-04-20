import React from "react";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ setFilter }) => {
  return (
    <nav className="bg-gradient-to-r from-[#ff8a00] to-[#fcb23b] px-8 py-4 flex justify-between items-center shadow-lg rounded-b-xl">
      <div className="text-3xl font-extrabold text-white">
        Task Tales
      </div>
      <ul className="flex space-x-6 items-center text-white font-medium">
        <li className="relative cursor-pointer">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="border-none outline-none text-lg font-semibold text-white px-4 py-2 rounded-lg cursor-pointer bg-[#f8bf62] transition duration-300">
            <option>All Tasks</option>
            <option>Completed</option>
            <option>Pending</option>
            <option>Starred</option>
          </select>
        </li>
        <li className="hover:text-[#ff8a00] cursor-pointer text-3xl transition duration-300">
          <CgProfile />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
