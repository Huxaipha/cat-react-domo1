import React from 'react';
import TestLogo from '../../assets/images/TestLogo .svg';
import womandoctor from '../../assets/images/womandoctor.png';
import home from '../../assets/images/home.svg';
import group from '../../assets/images/group.svg';
import calendar from '../../assets/images/calendar.svg';
import chat from '../../assets/images/chat.svg';
import credit from '../../assets/images/credit.svg';
import settings from '../../assets/images/settings.svg';
import more from '../../assets/images/more.svg';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-[1564px] h-[72px] mx-auto">
      <div className="flex justify-between h-full items-center px-4 sm:px-6 lg:px-8">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <img src={TestLogo} alt="TechCare" className="h-10 w-auto" />
        </div>
        
        {/* Middle: Navigation Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {/* Group: Home */}
          <div className="flex items-center space-x-2">
            <img src={home} alt="home" className="h-6 w-6" />
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">
              Overview
            </a>
          </div>
          {/* Group: Patients */}
          <div className="flex items-center space-x-2">
            <img src={group} alt="patients" className="h-6 w-6" />
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">
              Patients
            </a>
          </div>
          {/* Group: Schedule */}
          <div className="flex items-center space-x-2">
            <img src={calendar} alt="schedule" className="h-6 w-6" />
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">
              Schedule
            </a>
          </div>
          {/* Group: Message */}
          <div className="flex items-center space-x-2">
            <img src={chat} alt="message" className="h-6 w-6" />
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">
              Message
            </a>
          </div>
          {/* Group: Transactions */}
          <div className="flex items-center space-x-2">
            <img src={credit} alt="transactions" className="h-6 w-6" />
            <a href="#" className="text-gray-500 hover:text-gray-700 font-medium">
              Transactions
            </a>
          </div>
        </div>

        {/* Right: Profile and Settings */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <img className="h-6 w-6 mb-1" src={womandoctor} alt="doctor" />
            {/* Stack the name and title vertically */}
            <div className="flex flex-col">
              <span className="text-gray-900 font-medium">Dr. Jose Simmons</span>
              <span className="text-gray-400 text-sm">General Practitioner</span>
            </div>
          </div>
          
          {/* Settings and More Icons */}
          <div className="flex items-center space-x-2">
            <img className="h-6 w-6" src={settings} alt="settings" />
            <img className="h-6 w-6" src={more} alt="more" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
