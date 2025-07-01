import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md font-display sticky top-0 z-10">
      <div className="max-w-full px-4  md:px-10 lg:px-10 xl:px-20 py-4 flex items-center justify-between">
        <div>
          <img className="w-[50px]" src="logo_icon_1_bd4a99ba-1c20-43de-81ff-1f5fb0685b8e.svg" alt="Logo" />
        </div>

        <div className="lg:hidden">
          <button onClick={() => setOpen(!open)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex items-center right-20  gap-6 uppercase text-[12px] font-bold relative ">
          <li><a href="#">eoss</a></li>
          <li><a href="#">exclusive</a></li>
          <li className="relative group">
            <a href="#" className="hover:text-black">all products</a>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-0 bg-white text-black  p-6 shadow-lg rounded-2xl w-[450px] hidden group-hover:block z-50">
              <div className="grid grid-cols-2 gap-x-10 gap-y-7 text-sm  mt- uppercase font-medium">
                {/* Left Column */}
                <a href="#" className="hover:underline hover:text-[#EF3C74] ">View All</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Sweatshirts</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Spring Summer 25</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Jackets</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Bestsellers</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Sweaters</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Fresh Arrivals</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Shorts</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Shirts</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Polos</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Tshirts</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Essentials</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Jeans</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Footwear</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Cargos & Joggers</a>
              </div>
            </div>
          </li>


          {/* Dropdown for TOPWEAR */}
          <li className="relative group">
            <a href="#" className="hover:text-black uppercase">Topwers</a>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-0 bg-white text-black p-6 shadow-lg rounded-2xl w-[300px] hidden group-hover:block z-50">
              <div className="grid grid-cols-2 gap-x-10 mt-5 gap-y-6 text-sm uppercase font-medium">
                {/* Left Column */}
                <a href="#" className="hover:underline hover:text-[#EF3C74]">View All</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Polos</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Bestsellers</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Jackets</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Fresh Arrivals</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Sweatshirts</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Shirts</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Sweaters</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Tshirts</a>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-black uppercase">Bottomwear</a>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-0 bg-white text-black p-6 shadow-lg rounded-2xl w-[400px] hidden group-hover:block z-50">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 text-sm uppercase font-medium">
                {/* Left Column */}
                <a href="#" className="hover:underline hover:text-[#EF3C74]">View All</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Jeans</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Bestsellers</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Cargos & Joggers</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Fresh Arrivals</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Shorts</a>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-black uppercase">Footwear</a>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-0 bg-white text-black p-6 shadow-lg rounded-2xl w-[300px] hidden group-hover:block z-50">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 text-sm uppercase font-medium">
                {/* Left Column */}
                <a href="#" className="hover:underline hover:text-[#EF3C74]">View All</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Sliders</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Sneakers</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Athleisure</a>
              </div>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="hover:text-black uppercase">Fresh Arrivals</a>

            {/* Dropdown */}
            <div className="absolute top-full left-0 mt-0 bg-white text-black p-6 shadow-lg rounded-2xl w-[300px] hidden group-hover:block z-50">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 text-sm uppercase font-medium">
                {/* Left Column */}
                <a href="#" className="hover:underline hover:text-[#EF3C74]">T-Shirts</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Cargos</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Shirts</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Polos</a>

                <a href="#" className="hover:underline hover:text-[#EF3C74]">Jeans</a>
              </div>
            </div>
          </li>

          <li className="relative group">
            <a href="#" className="hover:text-black uppercase">Essentials</a>

            <div className="absolute top-full left-0 mt-0 bg-white text-black p-6 shadow-lg rounded-2xl w-[300px] hidden group-hover:block z-50">
              <div className="grid grid-cols-2 gap-x-10 gap-y-5 mt-5 text-sm uppercase font-medium">
                <a href="#" className="hover:underline hover:text-[#EF3C74]">View All</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Perfume</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Caps</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Socks</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Trunks</a>
                <a href="#" className="hover:underline hover:text-[#EF3C74]">Briefs</a>
              </div>
            </div>
          </li>

        </ul>


        <div className="flex items-center gap-4">
          <div className="hidden lg:flex border border-gray-400 px-2 py-2 rounded-lg">
            <i className="fa-solid fa-magnifying-glass px-2"></i>
            <input type="search" placeholder="Search" className="w-[110px] outline-none text-[12px] uppercase" />
          </div>

          <div className="relative group">
            <div className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1" /></svg>
            </div>
            <div className="absolute right-0 mt-5 w-80 bg-white rounded-lg shadow-lg transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10 pointer-events-none group-hover:pointer-events-auto px-6 py-4">
              <span className="uppercase text-sm text-gray-500 mb-4 block">Profile</span>
              <a href="#" className="flex items-center gap-2 mb-4">
                <svg width="20" height="24" fill="none" stroke="currentColor"><circle cx="12" cy="6" r="4" /><path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5Z" /></svg>
                <span className="uppercase text-md hover:text-purple-300 transition-all">Account</span>
              </a>
              <a href="#" className="flex items-center gap-2 mb-4">
                <svg width="24" height="24" fill="none" stroke="currentColor"><path d="M5.5 12.1c0-1.697 0-2.546.527-3.073S7.403 8.5 9.1 8.5h5.8c1.697 0 2.546 0 3.073.527s.527 1.376.527 3.073v2.4c0 2.828 0 4.243-.879 5.121c-.878.879-2.293.879-5.121.879h-1c-2.828 0-4.243 0-5.121-.879C5.5 18.743 5.5 17.328 5.5 14.5z" /></svg>
                <span className="uppercase text-md hover:text-purple-300 transition-all">Orders</span>
              </a>
              <a href="#" className="flex items-center gap-2 mb-6 ">
                <svg width="24" height="24" fill="currentColor"><path d="m18.36 9l.6 3H5.04l.6-3zM20 4H4v2h16zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zM6 18v-4h6v4z" /></svg>
                <span className="uppercase text-md hover:text-purple-300 transition-all">Find stores</span>
              </a>
              <a href="#"><button className="border border-gray-300 px-8 py-3 w-full rounded-md uppercase">Login</button></a>
            </div>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"
                d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" />
            </svg>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden px-4 pb-4 space-y-4 uppercase text-sm font-bold">
          <a href="#" className="block">eoss</a>
          <a href="#" className="block">exclusive</a>
          <a href="#" className="block">all products</a>
          <a href="#" className="block">topwear</a>
          <a href="#" className="block">footwear</a>
          <a href="#" className="block">fresh arrivals</a>
          <a href="#" className="block">essentials</a>
        </div>
      )}
    </nav>

  )
}
