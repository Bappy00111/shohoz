"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FiEye,
  FiEyeOff,
  FiPhone,
  FiMail,
  FiUser,
} from "react-icons/fi";
import logo from "../../../public/img/new-logo/remove.png";

// slider images (same as login)
import login1 from "../../../public/img/login/bus-2.jpg";
import login2 from "../../../public/img/login/plen.jpg";
import login3 from "../../../public/img/login/ship-2.jpg";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [gender, setGender] = useState("male");

  const images = [login1, login2, login3];

  // auto slider (5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT SIDE – SAME AS LOGIN */}
      <div className="relative hidden w-1/2 md:block overflow-hidden">
        <Image
          key={currentImage}
          src={images[currentImage]}
          alt="Travel Journey"
          fill
          priority
          className="object-cover rounded-r-[70px]"
        />

        <div className="absolute inset-0 rounded-r-[70px] bg-black/35" />

        <div className="absolute bottom-14 left-12 text-white">
          <h2 className="text-4xl font-bold leading-tight">
            Your Journey <br /> Starts Here
          </h2>
          <p className="mt-2 max-w-xs text-sm text-white/80">
            One account for all your travel needs
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full flex-col justify-between px-6 py-8 md:w-1/2 md:px-14">
        {/* LOGO */}
        <Link href="/" className="flex justify-end">
          <Image src={logo} alt="Bangladesh Ticket Service" width={150} height={50} />
        </Link>

        {/* FORM */}
        <div className="flex flex-1 items-center justify-center">
          <form className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              Create an account
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              One account for all your travel needs
            </p>

            {/* First & Last Name */}
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="relative">
                <input
                  placeholder="First name"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-500"
                />
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <input
                  placeholder="Last name"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-500"
                />
                <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Mobile */}
            <div className="mb-4 relative">
              <input
                type="tel"
                maxLength={11}
                placeholder="Mobile number"
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-500"
              />
              <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Email */}
            <div className="mb-4 relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-lg border border-gray-300 py-3 pl-10 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-500"
              />
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Gender */}
            <div className="mb-4">
              <p className="mb-2 text-sm text-gray-600">Gender</p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setGender("male")}
                  className={`rounded-lg border px-5 py-2 text-sm ${
                    gender === "male"
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-300"
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender("female")}
                  className={`rounded-lg border px-5 py-2 text-sm ${
                    gender === "female"
                      ? "border-green-600 bg-green-50 text-green-700"
                      : "border-gray-300"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="mb-3 relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-lg border border-gray-300 py-3 pr-12 pl-4 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="mb-6 relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full rounded-lg border border-gray-300 py-3 pr-12 pl-4 text-sm focus:border-green-600 focus:ring-1 focus:ring-green-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-bold text-white transition hover:bg-green-700 active:scale-[0.98]"
            >
              Sign up
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-bold text-green-700 hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </div>

        <div className="text-right text-xs text-gray-400">
          © Bangladesh Ticket Service 2026
        </div>
      </div>
    </div>
  );
}

