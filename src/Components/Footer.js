import React from 'react';
import Logo from '../Img/NPLogo1.1.png';

function Footer() {
  return (
    <section id="footer">
      <div className="container flex flex-col bg-black text-white p-[30px] items-center ">
        <div className="flex flex-row">
          Develope by <img src={Logo} className="w-[30px] h-[30px] mx-2"></img>{' '}
          <a href="https://naufalprays77.github.io/personal/" className="hover:text-[#CDBC16]">
            @naufalprays77
          </a>
        </div>

        <h1>version 1.1.1.</h1>
      </div>
    </section>
  );
}

export default Footer;
