"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff, FiPhone } from "react-icons/fi";
import logo from "../../../public/img/new-logo/remove.png";

// 👉 slider images
import login1 from "../../../public/img/login/bus-2.jpg";
import login2 from "../../../public/img/login/plen.jpg";
import login3 from "../../../public/img/login/ship-2.jpg";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [login1, login2, login3];

  // ⏱️ Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* LEFT SIDE – AUTO SLIDER IMAGE */}
      <div className="relative hidden w-1/2 md:block overflow-hidden">
        <Image
          key={currentImage}
          src={images[currentImage]}
          alt="Travel Journey"
          fill
          priority
          className="object-cover rounded-r-[70px] transition-opacity duration-700"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 rounded-r-[70px] bg-black/35" />

        {/* Text */}
        <div className="absolute bottom-14 left-12 text-white">
          <h2 className="text-4xl font-bold leading-tight">
            Your Journey <br /> Starts Here
          </h2>
          <p className="mt-2 max-w-xs text-sm text-white/80">
            Book tickets, travel smart and enjoy a seamless experience
          </p>
        </div>
      </div>

      {/* RIGHT SIDE – LOGIN FORM */}
      <div className="flex w-full flex-col justify-between px-6 py-8 md:w-1/2 md:px-14">
        {/* LOGO */}
        <Link href="/" className="flex justify-end">
          <Image src={logo} alt="Bangladesh Ticket Service" width={150} height={50} />
        </Link>

        {/* FORM */}
        <div className="flex flex-1 items-center justify-center">
          <form className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
            <h2 className="mb-2 text-3xl font-bold text-gray-800">
              Welcome Back
            </h2>
            <p className="mb-6 text-sm text-gray-500">
              Login to continue your journey with us
            </p>

            {/* Mobile */}
            <div className="mb-4">
              <label className="mb-1 block text-sm text-gray-600">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  maxLength={11}
                  placeholder="01XXXXXXXXX"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-sm
                             focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="mb-1 block text-sm text-gray-600">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-gray-300 py-3 pl-4 pr-12 text-sm
                             focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                </button>
              </div>
            </div>

            <div className="mb-6 flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm font-semibold text-green-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 py-3 font-bold text-white
                         transition hover:bg-green-700 active:scale-[0.98]"
            >
              Log In
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-bold text-green-700 hover:underline">
                Create Account
              </Link>
            </p>

            <p className="mt-4 text-center text-xs text-gray-400">
              Secure login • Trusted by thousands • Safe & reliable
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
