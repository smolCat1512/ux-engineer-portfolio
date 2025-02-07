import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="group relative flex items-center justify-center w-16 h-16 border-2 border-white text-white font-bold text-xl overflow-hidden">
      {/* SH Text (Default State) */}
      <span className="absolute transition-transform duration-300 transform group-hover:-translate-y-4 opacity-100 group-hover:opacity-0">
        <span className="relative -top-2">S</span>
        <span className="relative top-2">H</span>
      </span>
      {/* HOME Text (Appears on Hover) */}
      <span className="absolute transition-transform duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
        HOME
      </span>
    </div>
  );
};

export default Logo;
