import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header class="header">
      <div class="container">
        <div className="flex bg-black px-6 py-5 text-white text-right justify-end">
          <Link to="/">
            <FaHome className="text-center items-center self-end w-[30px] md:w-[50px]" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
