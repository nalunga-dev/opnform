import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 p-7 flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-5xl">
        <div className="flex justify-center max-w-3xl  bg-white  border md:w-[45%]  md:ml-60 mt-2 w-full ml-2  text-blue-800 font-bold py-2 px-3 rounded-full  gap-6 text-sm mb-6">
          <span className="text-gray-700 ">We're Open-Source</span>
          <a href="#" className="text-blue-600 hover:underline">
            Star us on GitHub
          </a>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-gray-500">
          Build <span className="text-blue-500">beautiful forms</span>
          <br /> in seconds
        </h1>

        <p className="text-gray-600 text-lg sm:text-xl mt-6">
          Create beautiful forms and share them anywhere. It's super fast, you
          don't need to know how to code. Get started for{" "}
          <span className="font-semibold text-black">free!</span>
        </p>

        <div className=" border md:w-[25%]  md:ml-70 mt-5 w-[60%] ml-15 border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-md text-sm flex items-center gap-1">
          Create a free form{" "}
          <span className="ml-1">
            <FaArrowRight />
          </span>
        </div>

        <div className="flex justify-center gap-6 mt-10 text-sm text-gray-500">
          <div className="flex  text-blue-600  items-center gap-2">
            <span className="text-blue-500">
              {" "}
              <TiTick className="text-2xl" />{" "}
            </span>{" "}
            Unlimited forms
          </div>
          <div className="flex   items-center gap-2">
            <span className="text-blue-500">
              {" "}
              <TiTick className="text-2xl" />{" "}
            </span>{" "}
            Unlimited fields
          </div>
          <div className="flex items-center text-blue-600  gap-2">
            <span className="text-blue-500">
              <TiTick className="text-2xl" />
            </span>{" "}
            Unlimited responses
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
