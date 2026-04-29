import React, { useState } from "react";
import { ShoppingCart, Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          NovaCart
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
          <Search className="text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Shop
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Categories
          </a>
          <a href="#" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs px-1.5 rounded-full">
              3
            </span>
          </div>

          {/* Login */}
          <button className="hidden md:block bg-indigo-600 text-white px-4 py-1.5 rounded-lg hover:bg-indigo-700 transition">
            Login
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-3 space-y-4">
          {/* Search */}
          <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg">
            <Search className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* Links */}
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Shop
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Categories
          </a>
          <a href="#" className="block text-gray-700 hover:text-indigo-600">
            Contact
          </a>

          {/* Login */}
          <button className="w-full bg-indigo-600 text-white py-2 rounded-lg">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
