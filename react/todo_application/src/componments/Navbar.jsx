import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white flex justify-between py-2 px-10'>
      <div className="title">
        <span className="text-xl text-gray-800 font-bold">UBAID-BIN-WARIS</span>
      </div>
      <ul className='flex gap-6'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
