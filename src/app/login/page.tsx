"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
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

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else if (res?.url) {
      router.replace("/");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="bg-[url('https://images.unsplash.com/photo-1444492696363-332accfd40c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyZWUlMjBvbiUyMGJvZHklMjBvZiUyMHdhdGVyJTIwbmVhcnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover bg-no-repeat flex h-[623px] flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="relative text-white text-center flex flex-col gap-4 mx-auto border-2 rounded-md px-4 w-full max-w-md md:max-w-lg lg:max-w-xl py-6 shadow-xl shadow-purple-500">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 text-white">
            Login Page
          </h1>
          <form onSubmit={handleSubmit}>
            <label className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3 flex items-end">
              Email Name
            </label>
            <input
              type="text"
              className="outline-none px-4 py-2 rounded-full bg-transparent border-2 text-white w-full hover:border-b-amber-500"
              placeholder="Email Name"
              required
            />
            <label className="text-lg sm:text-xl font-semibold text-white mt-4 sm:mt-5 mb-2 sm:mb-3 flex items-end">
              Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="outline-none px-4 py-2 rounded-full bg-transparent border-2 text-white w-full hover:border-b-amber-500"
                placeholder="Password Name"
                required
              />
              <button
                type="button"
                onClick={() => setPasswordVisible((prev) => !prev)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {passwordVisible ? (
                  <EyeOff className="text-red-400" />
                ) : (
                  <Eye className="text-gray-400" />
                )}
              </button>
            </div>
            <button
              type="submit"
                  className="bg-purple-700 px-4 py-2 rounded-md  text-xl w-[200px] mx-auto hover:bg-transparent hover:border-purple-600 border-2 flex justify-center mt-4 items-center hover:border-b-lime-500"
            >
              Sign In
            </button>
            <p className="text-red-600 text-sm sm:text-base mt-4">{error && error}</p>
          </form>
          <div className="flex gap-2 mt-2">
            <button
              className="w-full bg-amber-500 text-white py-2 rounded hover:bg-transparent hover:border-purple-600 border-2 hover:border-b-lime-500"
              onClick={() => {
                signIn("github");
              }}
            >
              Sign In with Github
            </button>
            <button
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-transparent hover:border-purple-600 border-2 hover:border-b-lime-500"
              onClick={() => {
                signIn("google");
              }}
            >
              Sign In with Google
            </button>
          </div>
          <div className="text-center text-white mt-4">- OR -</div>
          <Link
            className="block text-center text-white hover:text-lime-600 hover:underline mt-4"
            href="/register"
          >
            Register Here
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
