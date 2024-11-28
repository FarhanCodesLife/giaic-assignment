"use client";

import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Signin = () => {
  const { data: session, status } = useSession();
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (provider: string) => {
    try {
      setError(null);
      await signIn(provider);
    } catch (err) {
      setError("Failed to sign in. Please try again.");
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto text-gray-600 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (session) {
    const imageProfile = session.user?.image || "/default-profile.png";

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={imageProfile}
              width={100}
              height={100}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-indigo-500 object-cover"
            />
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome, {session.user?.name}
            </h2>
            <p className="text-gray-600">{session.user?.email}</p>
            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 mt-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Our App</h1>
          <p className="text-gray-600">
            Sign in to access your account and manage your profile.
          </p>
          {error && (
            <div className="px-4 py-2 text-red-700 bg-red-100 border border-red-400 rounded">
              {error}
            </div>
          )}
          <button
            onClick={() => handleSignIn("github")}
            className="flex items-center justify-center w-full px-4 py-2 mt-4 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition duration-200"
          >
            <FaGithub className="w-5 h-5 mr-2" />
            Sign In with GitHub
          </button>
          <button
            onClick={() => handleSignIn("google")}
            className="flex items-center justify-center w-full px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-200"
          >
            <FaGoogle className="w-5 h-5 mr-2" />
            Sign In with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
