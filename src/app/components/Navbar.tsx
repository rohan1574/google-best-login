"use client";

import Link from 'next/link';
import { useState } from 'react';
import React from "react";

import { signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session }: any = useSession();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">Brand</Link>
        <button
          className="lg:hidden p-2"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="block py-2 px-4 hover:bg-gray-700 rounded">Home</Link>
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          {!session ? (
            <>
              <Link href="/login">
                <li>Logins</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          <Link href="/barchart" className="block py-2 px-4 hover:bg-gray-700 rounded">Barchart</Link>
          <Link href="/piechart" className="block py-2 px-4 hover:bg-gray-700 rounded">PieChart</Link>
          <Link href="/linechart" className="block py-2 px-4 hover:bg-gray-700 rounded">LineChart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
