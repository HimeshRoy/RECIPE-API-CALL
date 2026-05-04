import React, { useState } from 'react';
import { GiCookingPot } from "react-icons/gi";
import { IoMdSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ data }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col px-5 py-3 bg-[#093A3E] sticky top-0 z-10">
      
     <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2">
          <GiCookingPot /> Cooking Page
        </div>

       <div className="relative flex gap-1 items-center px-3 w-full md:w-80 border-2 border-white rounded-xl text-white">
          <IoMdSearch className="text-2xl" />
          <input
            type="search"
            placeholder="Search recipe here..."
            className="py-2 px-1 w-full text-white outline-none bg-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <div className="absolute top-12 left-0 w-full bg-white text-black rounded-lg max-h-60 overflow-y-auto">
              
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                      setSearch("");
                    }}
                  >
                    {item.name}
                  </div>
                ))
              ) : (
                <p className="p-2 text-center">Recipe not found</p>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;