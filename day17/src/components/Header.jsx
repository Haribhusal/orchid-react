function Header() {
  return (
    <header className="py-3 shadow-lg">
      <div className="container items-center  flex max-w-screen-xl mx-auto justify-between">
        <div className="">
          <a href="">
            <img src="https://picsum.photos/id/11/50/50" alt="Business Logo" />
          </a>
        </div>
        <div className="">
          <form action="" className="flex gap-1">
            <input
              type="text"
              placeholder="Search News..."
              className="border-2 rounded-md border-custom px-5 py-3"
            />
            <button className="bg-custom rounded-md px-5 py-3 border-2  text-white">
              Search
            </button>
          </form>
        </div>
        <div className="">
          <nav className="flex">
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
        </div>
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
