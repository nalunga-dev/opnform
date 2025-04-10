"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              ⬤
            </div>
            <span className="font-bold text-3xl text-blue-700">OpnForm</span>
          </div>

          <div className="hidden md:flex space-x-6 text-1xl font-bold text-gray-600 items-center">
            <Link
              className="hover:bg-gray-100 hover:px-4 hover:py-2 hover:rounded-lg hover:border-1 hover:border-blue-400  "
              href="/templates-page"
            >
              Templates
            </Link>
            <Link
              className="hover:bg-gray-100 hover:px-4 hover:py-2 hover:rounded-lg hover:border-1 hover:border-blue-400  "
              href=""
            >
              What’s new?
            </Link>
            <Link
              className="hover:bg-gray-100 hover:px-4 hover:py-2 hover:rounded-lg hover:border-1 hover:border-blue-400  "
              href="#"
            >
              AI Form Builder
            </Link>
            <Link
              className="hover:bg-gray-100 hover:px-4 hover:py-2 hover:rounded-lg hover:border-1 hover:border-blue-400  "
              href="/pricing-page"
            >
              Pricing
            </Link>
            <Link
              className="hover:bg-gray-100 hover:px-4 hover:py-2 hover:rounded-lg hover:border-1 hover:border-blue-400  "
              href="#"
            >
              Help
            </Link>
            <div className="h-5 w-px bg-gray-300 mx-2" />
            <Link
              href="#"
              className="text-gray-800 hover:bg-gray-100 hover:px-4 hover:py-2 hover:rounded-lg hover:border-1 hover:border-blue-400 "
            >
              Login
            </Link>
            <Link
              href="#"
              className="ml-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm flex items-center gap-1"
            >
              Create a form{" "}
              <span className="ml-1">
                <FaArrowRight />
              </span>
            </Link>
          </div>

          <div className="md:hidden">
            <Menu className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}
