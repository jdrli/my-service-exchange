import React from "react";
import NavigationBar from "@/components/internal/InternalNav";
import DefaultTable from "@/components/internal/Table";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavigationBar />
      <div className='w-7/12 mt-10'><DefaultTable /></div>
      
    </div>
  );
}
