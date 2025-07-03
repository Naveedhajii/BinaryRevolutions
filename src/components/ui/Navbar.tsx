'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  return (
    <header className="header absolute top-0 left-0 w-full z-[9999] !bg-transparent">
      <div className="flex flex-nowrap items-center px-2 lg:px-4 xl:px-6 2xl:px-8 h-[56px] sm:h-[64px] lg:h-[80px]">
        <div className="relative z-[99] max-w-[250px] lg:w-full xl:max-w-[350px] ml-5 flex items-center">
        <Link href="/" className="inline-block">
  <Image
    src="/images/logo/BR-logo.svg"
    alt="logo"
    width={250}
    height={50}
    className="h-[48px] sm:h-[60px] lg:h-[75px] w-auto max-w-full object-contain dark:invert"
    priority
  />
</Link>
        </div>
        <div className="menu-wrapper hidden lg:flex lg:static lg:h-auto lg:justify-start lg:bg-transparent lg:p-0 lg:opacity-100 dark:lg:bg-transparent ml-0 lg:ml-10 items-center w-full">
          <nav className="w-full self-center bg-transparent">
            <ul className="navbar flex flex-row items-center justify-start space-x-10 text-center">
              <li>
                <a href="/" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                  Services
                </a>
              </li>
              <li className="relative group">
                <Link href="/projects" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                  Projects
                </Link>
                <ul className="hidden lg:invisible lg:absolute lg:top-[120%] lg:w-[350px] lg:bg-white lg:dark:bg-dark-bg lg:border lg:dark:border-transparent lg:rounded-sm lg:px-8 lg:pb-5 lg:pt-5 lg:space-y-5 lg:text-left lg:opacity-0 lg:group-hover:visible lg:group-hover:top-full lg:group-hover:opacity-100 transition duration-300">
                  <li><a href="/blog-grids" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Blog Grids</a></li>
                  <li><a href="/blog-details" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Blog Details</a></li>
                  <li><a href="/404" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">404 Error</a></li>
                  <li><a href="/signin" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Sign In</a></li>
                  <li><a href="/signup" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Sign Up</a></li>
                </ul>
              </li>
              <li>
                <a href="/support" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex w-auto items-center justify-between space-x-5 p-0 bg-transparent">
            <a href="/signin" className="bg-primary hover:bg-primary/90 font-heading text-white text-base px-4 py-2 rounded-sm whitespace-nowrap flex items-center justify-center w-full lg:w-auto text-center transition-all duration-200">
              Sign In
            </a>
            <a href="/signup" className="bg-dark-bg hover:bg-dark-bg/90 font-heading text-white text-base px-4 py-2 rounded-sm whitespace-nowrap flex items-center justify-center w-full lg:w-auto text-center transition-all duration-200">
              Sign Up
            </a>
            <div className="ml-4 flex items-center justify-end">
              <ThemeToggle />
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="menu-wrapper fixed top-0 left-0 z-50 h-screen w-full p-5 bg-white dark:bg-dark flex flex-col justify-center items-center transition-all duration-300 visible opacity-100 lg:hidden">
            <nav className="w-full self-center bg-transparent">
              <ul className="navbar flex flex-col items-center justify-center space-y-5 text-center">
                <li>
                  <a href="/" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about-us" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                    About Us
                  </a>
                </li>
                <li className="relative group">
                  <Link href="/projects" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                    Projects
                  </Link>
                  <ul className="hidden transition duration-300">
                    <li><a href="/blog-grids" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Blog Grids</a></li>
                    <li><a href="/blog-details" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Blog Details</a></li>
                    <li><a href="/404" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">404 Error</a></li>
                    <li><a href="/signin" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Sign In</a></li>
                    <li><a href="/signup" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base">Sign Up</a></li>
                  </ul>
                </li>
                <li>
                  <a href="/support" className="font-heading text-dark-text hover:text-primary dark:hover:text-white text-base inline-flex items-center justify-center py-2">
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex w-full items-center justify-between space-x-5 p-5 bg-transparent">
              <a href="/signin" className="bg-primary hover:bg-primary/90 font-heading text-white text-base px-4 py-2 rounded-sm whitespace-nowrap flex items-center justify-center w-full text-center transition-all duration-200">
                Sign In
              </a>
              <a href="/signup" className="bg-dark-bg hover:bg-dark-bg/90 font-heading text-white text-base px-4 py-2 rounded-sm whitespace-nowrap flex items-center justify-center w-full text-center transition-all duration-200">
                Sign Up
              </a>
              <div className="ml-4 flex items-center justify-end">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
        <div className="absolute top-1/2 right-5 z-50 flex -translate-y-1/2 items-center lg:static lg:translate-y-0">
          <button className="relative z-50 lg:hidden text-dark dark:text-white" onClick={toggleMenu}>
            <svg width="28" height="28" viewBox="0 0 28 28" className={`fill-current ${isMenuOpen ? 'hidden' : 'block'}`}>
              <path d="M2.75 3.66666H19.25V5.49999H2.75V3.66666ZM2.75 10.0833H19.25V11.9167H2.75V10.0833ZM2.75 16.5H19.25V18.3333H2.75V16.5Z" />
            </svg>
            <svg width="28" height="28" viewBox="0 0 28 28" className={`fill-current ${isMenuOpen ? 'block' : 'hidden'}`}>
              <path d="M14.0002 11.8226L21.6228 4.20001L23.8002 6.37745L16.1776 14L23.8002 21.6226L21.6228 23.8L14.0002 16.1774L6.37763 23.8L4.2002 21.6226L11.8228 14L4.2002 6.37745L6.37763 4.20001L14.0002 11.8226Z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}