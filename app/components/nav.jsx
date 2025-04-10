"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                ⬤
              </div>
              <span className="font-bold text-3xl text-blue-700">OpnForm</span>
            </div>

            <div className="hidden md:flex space-x-6 text-1xl font-bold text-gray-600 items-center">
              <Link
                className="hover:bg-gray-100 px-4 py-2 rounded-lg"
                href="/templates-page"
              >
                Templates
              </Link>
              <Link className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="#">
                What’s new?
              </Link>
              <Link className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="#">
                AI Form Builder
              </Link>
              <Link
                className="hover:bg-gray-100 px-4 py-2 rounded-lg"
                href="/pricing-page"
              >
                Pricing
              </Link>
              <Link className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="#">
                Help
              </Link>
              <div className="h-5 w-px bg-gray-300 mx-2" />
              <Link className="hover:bg-gray-100 px-4 py-2 rounded-lg" href="#">
                Login
              </Link>
              <Link
                href="#"
                className="ml-2 border border-blue-500 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm flex items-center gap-1"
              >
                Create a form <FaArrowRight />
              </Link>
            </div>

            <div className="md:hidden">
              <Menu
                className="h-6 w-6 text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white z-50 p-6 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-blue-700">OpnForm</span>
          <X
            className="h-6 w-6 text-gray-700 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className="flex flex-col space-y-4 font-semibold text-gray-700">
          <Link href="/templates-page" onClick={() => setIsOpen(false)}>
            Templates
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            What’s new?
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            AI Form Builder
          </Link>
          <Link href="/pricing-page" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Help
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)}>
            Login
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm flex items-center gap-1"
          >
            Create a form <FaArrowRight />
          </Link>
        </nav>
      </div>
    </>
  );
}
