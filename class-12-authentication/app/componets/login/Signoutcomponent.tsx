"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut({ callbackUrl: "/" }); // Redirect to home or another URL
      setMessage("Successfully signed out!");
      console.log("login successfuly");
      
      router.push("/"); // Optional: navigate programmatically
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl mb-4">Sign Out</h1>
      <button 
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
      {message && (
        <div className="mt-4 text-green-600">{message}</div>
      )}
    </div>
  );
}
