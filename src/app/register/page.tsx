"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react"; // Import EyeOff for hiding password

const Register = () => {
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="bg-[url('https://plus.unsplash.com/premium_photo-1697447003803-736dd1bfec99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat flex h-[623px] flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="relative text-white text-center flex flex-col gap-4 mx-auto border-2 rounded-md px-4 w-full max-w-md md:max-w-lg lg:max-w-xl py-6 shadow-xl shadow-purple-500">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-white">Register</h1>
          <form onSubmit={handleSubmit}>
          <label className="text-lg sm:text-xl font-semibold  mb-2 sm:mb-3 flex items-end">
              Email Name
            </label>
            <input
              type="text"
              className="outline-none px-4 py-2 rounded-full bg-transparent border-2  w-full hover:border-b-amber-500"
              placeholder="Email Name"
              required
            />
            <label className="text-lg sm:text-xl font-semibold text-white mt-4 sm:mt-5 mb-2 sm:mb-3 flex items-end">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"} // Toggle between text and password
                className="outline-none px-4 py-2 rounded-full bg-transparent border-2 text-white w-full hover:border-b-amber-500"
                placeholder="Password Name"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible(prev => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {passwordVisible ? <EyeOff className="text-red-400" /> : <Eye className="text-gray-400" />}
              </button>
            </div>
            <button
              type="submit"
              className="bg-purple-700 px-4 py-2 rounded-md  text-xl w-[200px] mx-auto hover:bg-transparent hover:border-purple-600 border-2 flex justify-center mt-4 items-center hover:border-b-lime-500"
            >
              Register
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="text-center text-white ">- OR -</div>
          <Link
               className="block text-center text-white hover:text-lime-600 hover:underline mt-4"
            href="/login"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;
