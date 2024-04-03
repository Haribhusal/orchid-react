import React from "react";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="container text-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        <div className="">
          <img
            src="https://picsum.photos/id/52/100/100"
            className="size-16 mx-auto rounded-full"
            alt=""
          />
          <h3 className="text-2xl font-bold">Brand Name</h3>
        </div>
        <div className="">
          <div className="heading">Useful Links</div>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
            <li>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="heading">Useful Links</div>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
            <li>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="heading">Useful Links</div>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
            <li>
              <a href="#">Link 4</a>
            </li>
            <li>
              <a href="#">Link 5</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container bg-black p-5 mt-10">
        <div className="">
          &copy; {year}, Business Name. All rights reserved
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
