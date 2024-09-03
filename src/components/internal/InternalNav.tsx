import React from "react";

export default function NavigationBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-20 bg-gray-800 text-white shadow-xl font-semibold flex items-center justify-end">
      <div className="flex-1 text-xl pl-10">
        <a href="https://myserviceexchange.com/">My Service Exchange Logo</a>
      </div>
      <div className="h-full">
        <button className="text-gray-400 hover:text-gray-800 hover:bg-gray-200 px-6 py-2 h-full transition-colors duration-300">
          Service Basket
        </button>
        <button className="text-gray-400 hover:text-gray-800 hover:bg-gray-200 px-6 py-2 h-full transition-colors duration-300">
          Relationship Management
        </button>
        <button className="text-gray-400 hover:text-gray-800 hover:bg-gray-200 px-6 py-2 h-full transition-colors duration-300">
          Vendor Management
        </button>
        <button className="text-gray-400 hover:text-gray-800 hover:bg-gray-200 px-6 py-2 h-full transition-colors duration-300">
          Workflow
        </button>
        <button className="text-gray-400 hover:text-gray-800 hover:bg-gray-200 px-6 py-2 h-full transition-colors duration-300">
          Reports
        </button>
        <button className="text-gray-400 hover:text-gray-800 hover:bg-gray-200 px-8 py-2 h-full transition-colors duration-300">
          Global Admin
        </button>
      </div>
    </div>
  );
}
