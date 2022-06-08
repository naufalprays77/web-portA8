import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';

export default function BtnBackToMenu() {
  return (
    <div className="self-center items-center justify-center bg-transparent text-white left-28 relative hover:bg-black py-4 px-8 rounded-full cursor-pointer">
      <Link to="/" className="top-1/2">
        <FiArrowLeftCircle className="left-9 relative" /> <h1 className="pt-3">Back To Menu</h1>
      </Link>
    </div>
  );
}
