import React from "react";

export default function Picture() {
  return (
    <div className=" flex items-center justify-center bg-gradient-to-b from-blue-50 to-white ">
      <div className="max-w-5xl flex bg-[#E3E6EC] items-center p-6 justify-center rounded-lg text-center shadow-md ">
        <img
          className="w-full h-full object-cover"
          src="/images/product-cover.jpg"
          alt="picture"
        />
      </div>
    </div>
  );
}
