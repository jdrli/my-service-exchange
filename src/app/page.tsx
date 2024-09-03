import React from "react";
import NavigationBar from "../components/NavigationBar";
import LoginForm from "@/components/Login";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div>
        <NavigationBar />
      </div>

      <div className="flex justify-center items-center mt-10 pt-10">
        <LoginForm />
      </div>
    </div>
  );
}
