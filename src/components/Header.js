import React, { useContext, useState } from "react";
import yt from "../images/yt-logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Loading from "./Loading";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);

  const SearchQueryHandler = (event) => {
    if (
      (event.key === "Enter" || event === "Search Button") &&
      searchQuery.length > 0
    ) {
      navigate(`/searchResult/${searchQuery}`);
    }
  };

  const { pathname } = useLocation();

  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  const mobileMenuHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className=" h-14 px-4 md:px-5 shadow   sticky top-0 bg-[#f2f2f2] z-30">
      {loading && <Loading />}
      <div className="flex justify-between items-center ">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuHandler}
          >
            {mobileMenu ? (
              <CgClose className="text-black text-xl" />
            ) : (
              <SlMenu className="text-black text-xl" />
            )}
          </div>
        )}

        <div className="mx-5">
          <Link to="/">
            {" "}
            <img src={yt} className="flex h-5 items-center" />
          </Link>
        </div>
        <div className="flex space-x-2 mt-1">
          <input
            type="text"
            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={SearchQueryHandler}
            value={searchQuery}
          />
          <button
            className="bg-cyan-700 text-white p-1 px-3 rounded"
            onClick={() => SearchQueryHandler("Search Button")}
          >
            Search
          </button>
        </div>

        <div className="hidden md:flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-DjoQ3H0LFCWXLurl6qeHzGnbox2_cJTAmg&usqp=CAU"
            alt="user"
            className="h-[40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
