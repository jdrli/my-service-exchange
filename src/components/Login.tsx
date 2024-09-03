// Add "use client" at the top of the file
"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import the useRouter hook

export default function LoginForm() {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/service"); 
  };

  return (
    <div className="flex m-10 rounded-2xl w-4/12 shadow-xl flex-col bg-white">
      <form className="flex flex-col flex-1 items-center">
        <div className="flex flex-col w-9/12">
          <p className="font-bold font-sans text-2xl pt-8 pb-4 ml-2">
            Welcome Back
          </p>
        </div>
        <div className="flex flex-col w-9/12 mb-4">
          <label className="ml-2">Username</label>
          <input
            placeholder="name@company.com"
            className="border border-gray-200 m-2 p-3 rounded-lg bg-gray-100"
          />
        </div>
        <div className="flex flex-col w-9/12 mb-4">
          <label className="ml-2">Verification Image Code</label>
          <input
            placeholder="ABC123"
            className="border border-gray-200 m-2 p-3 rounded-lg bg-gray-100"
          />
        </div>
        <div className="flex flex-col w-9/12">
          <div className="flex flex-row justify-between">
            <label className="ml-2">Password</label>
            <a href="#" className="text-blue-500 text-sm pt-1 mr-2">
              Forgot Password?
            </a>
          </div>

          <input
            type="password"
            placeholder="••••••••"
            className="border border-gray-200 m-2 p-3 rounded-lg bg-gray-100"
          />
        </div>
        <button
          type="button" 
          onClick={handleSignIn}
          className="m-3 p-2 mb-6 rounded-lg bg-indigo-500 text-white w-8/12"
        >
          Sign In
        </button>
        <div>
          <div>
            <p className="text-center text-sm pb-8">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
