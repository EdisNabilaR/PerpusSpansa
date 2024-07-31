// TestPage.jsx
import React from 'react';
import { Element, Link as ScrollLink } from 'react-scroll';

const TestPage = () => {
  return (
    <div>
      <nav className="fixed top-0 left-0 w-full bg-black text-white p-4">
        <ScrollLink to="section1" smooth={true} duration={500} className="px-4 cursor-pointer">Section 1</ScrollLink>
        <ScrollLink to="section2" smooth={true} duration={500} className="px-4 cursor-pointer">Section 2</ScrollLink>
        <ScrollLink to="section3" smooth={true} duration={500} className="px-4 cursor-pointer">Section 3</ScrollLink>
      </nav>

      <Element name="section1" className="h-screen bg-gray-200">
        <h2 className="text-center text-2xl pt-20">Section 1</h2>
      </Element>
      <Element name="section2" className="h-screen bg-gray-300">
        <h2 className="text-center text-2xl pt-20">Section 2</h2>
      </Element>
      <Element name="section3" className="h-screen bg-gray-400">
        <h2 className="text-center text-2xl pt-20">Section 3</h2>
      </Element>
    </div>
  );
};

export default TestPage;
