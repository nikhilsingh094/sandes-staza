import React from "react";
import about from "../../assets/about.png";

function About() {
  return (
    <div className="bg-transparent">
      <div className="min-h-[600px] relative w-full flex flex-col lg:flex-row items-center justify-evenly gap-12 p-6 md:p-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#36904A]/70 via-white/30 to-[#36904A]/50 z-0 blur-3xl rounded-full animate-pulse"></div>

        {/* Image Section */}
        <div className="relative z-10 flex justify-center">
          <div className="relative">
            <img
              className="max-w-xs md:max-w-md h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              src={about}
              alt="About Sandes"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#36904A]/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="relative z-10 max-w-lg text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#36904A] mb-4 tracking-tight">
            Discover Sandes
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            Sandes, proudly launched under India's <span className="font-semibold text-[#36904A]">Atma Nirbhar Bharat</span> initiative, is a secure messaging platform empowering government officials and citizens. With seamless integration into eGov applications, Sandes enables efficient G2C, C2G, and G2G communication at your fingertips.
          </p>
          <p className="text-lg md:text-xl text-gray-700 font-medium mt-4 leading-relaxed">
            Enjoy end-to-end encrypted messages, audio-video calls, and file sharing. Managed by onboarded organization admins, Sandes ensures robust user management and is accessible to all registered users via the web portal.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;