import React, { useState } from "react";
import sandes_logo from "../assets/sandes_logo.png";
import icon from "../assets/icon.png";
import qr from "../assets/qr.webp";
import phone from "../assets/phone.png";
import { motion } from "framer-motion";
// import { Button } from "./ui/button";
// import { Input } from "./ui/input";

function Login() {
  const [number, setNumber] = useState("");
  const [err, setErr] = useState({});
  const [isQrMode, setIsQrMode] = useState(true);

  const loginHandler = async (e) => {
    e.preventDefault();

    const trimmedNumber = number.trim();
    let validationErrors = {};

    if (!trimmedNumber || !/^\d{10}$/.test(trimmedNumber)) {
      validationErrors.number = "Please enter a valid 10-digit phone number";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErr(validationErrors);
      return;
    }

    setErr({});
    try {
      // const res = await axios.post("")
      setNumber("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center mt-10">
        <img className="w-24" src={sandes_logo} alt="sandes_logo" />
        <h1 className="text-4xl font-bold text-blue-950">
          Start Using Sandes on Web
        </h1>
        <p className="text-xl font-semibold text-blue-950">
          Enhance your communication with faster access and clear calling via
          the Sandes app
        </p>
      </div>

      {isQrMode ? (
        <div className="border border-gray-300 shadow rounded-lg text-center w-[800px] m-auto mt-8 flex flex-col gap-2 p-6 bg-white">
          <h2 className="text-2xl font-bold text-blue-950">
            Login to Sandes web
          </h2>
          <p className="text-xl font-semibold text-blue-950">
            Message privately with friends and family using Sandes on your
            browser.
          </p>
          <ol className="text-xl font-semibold text-blue-950 flex flex-col gap-4 p-4">
            <li>1. Open Sandes on your phone</li>
            <li>2. Tap Menu on Android or Setting on iPhone</li>
            <li>3. Tap Linked devices and then Link devices</li>
            <li>4. Point your phone at this screen to scan the QR code</li>
          </ol>

          <motion.img
            src={icon}
            alt="icon"
            className="w-10 m-auto"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <img src={qr} alt="qr" className="w-50 m-auto" />

          <div className="border-b border-gray-300 pb-2 mt-4">
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => setIsQrMode(false)}
            >
              <p className="text-sm font-semibold text-green-500">
                Login with your phone
              </p>
              <img src={phone} alt="phone" className="w-8" />
            </div>
          </div>
        </div>
      ) : (
        <div className="border border-gray-300 shadow rounded-lg text-center w-[800px] m-auto mt-8 flex flex-col gap-2 p-6 bg-white">
          <h1 className="text-2xl font-semibold text-blue-950">
            Enter your phone number
          </h1>
          <form onSubmit={loginHandler}>
            <div className="p-5">
              <input
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="text-gray-500 font-semibold"
                placeholder="Enter your phone number"
              />
              {err.number && (
                <span className="text-red-400 font-semibold text-sm mt-2 block">
                  {err.number}
                </span>
              )}
            </div>
            <div className="p-5">
              <button type="submit" className="cursor-pointer">
                Generate Otp
              </button>
            </div>
          </form>

          <p
            className="text-gray-500 font-semibold cursor-pointer border-b-2 border-green-500 w-fit mx-auto mt-2"
            onClick={() => setIsQrMode(true)}
          >
            Login with QR {">"}
          </p>
        </div>
      )}
    </>
  );
}

export default Login;
