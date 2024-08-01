"use client"

import { useState } from 'react';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

  return (
      <div>
          <button
              onClick={toggleDropdown}
              className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
              <span>Dropdown</span>
          </button>
          <ul id="dropdown-example" className={`${isOpen ? 'block' : 'hidden'} py-2 space-y-2`}>
              <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Products
                  </a>
              </li>
              <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Billing
                  </a>
              </li>
              <li>
                  <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                      Invoice
                  </a>
              </li>
          </ul>
      </div>
  )
}