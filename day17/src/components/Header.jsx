import { Menu, Search, X } from "lucide-react";
import Dropdown from "./Dropdown";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="py-3 shadow-lg px-5 md:px-0">
      <div className="container items-center  flex max-w-screen-xl mx-auto justify-between">
        <div className="">
          <a href="">
            <img
              className="size-10 rounded-full"
              src="https://picsum.photos/id/11/50/50"
              alt="Business Logo"
            />
          </a>
        </div>
        <div className="">
          <form action="" className=" gap-1 hidden md:flex">
            <input
              type="text"
              placeholder="Search News..."
              className="border-2 rounded-md border-custom px-5 py-3"
            />
            <button className="bg-custom rounded-md px-5 py-3 border-2  text-white">
              Search
            </button>
          </form>
          <button className="md:hidden">
            <Search />
          </button>
        </div>
        <div className=" relative">
          {show && (
            <nav className="flex flex-col md:flex-row absolute z-50 min-w-56 bg-white shadow-xl border-2 border-gray-300 top-full left-1/2 -translate-x-1/2">
              <a href="#" className="p-3 ">
                Home
              </a>
              <a href="#" className="p-3 ">
                About us
              </a>
              <a href="#" className="p-3 ">
                Services
              </a>
              <a href="#" className="p-3 ">
                Galley
              </a>
              <a href="#" className="p-3 ">
                Contact Us
              </a>
            </nav>
          )}
          <button className="md:hidden" onClick={() => setShow(!show)}>
            {show ? <X /> : <Menu />}
          </button>
        </div>

        {/* <Dropdown /> */}

        <div className="">
          <a href="#">
            <button className="bg-custom text-white rounded-lg px-5 py-3 ">
              Publish News
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
