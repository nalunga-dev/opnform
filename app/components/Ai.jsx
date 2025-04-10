import { ArrowUpRight, Check, Sparkles, Zap } from "lucide-react";

export default function Ai() {
  return (
    <div className="w-full  overflow-hidden bg-white ">
      <div className="relative  bg-blue-50 grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-12 bg-[url('/grid-pattern.svg')] bg-cover">
        <div className="flex flex-col justify-center space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full w-fit">
            <div className="mr-2 text-blue-600">
              <Sparkles size={16} className="inline" />
            </div>
            <span className="text-sm font-medium text-blue-600">
              Introducing OpnForm AI
            </span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Say goodbye to tedious form building with OpnForm&apos;s new{" "}
              <span className="text-blue-500">AI-powered feature!</span>
            </h2>

            <p className="text-lg text-gray-600">
              Easily generate a fully working form in seconds with just a simple
              description.
            </p>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try our AI form builder
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-700">
                Create form in minutes
              </span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-700">Customizations</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm text-gray-700">No-coding required</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center  px-4 sm:px-6 lg:px-8">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
            <div className="absolute top-0 right-1/4 w-24 h-24 sm:w-32 sm:h-32 bg-blue-100 rounded-full -translate-y-1/4" />

            <div className="relative bg-white w-full rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <div className="mb-6">
                <div className="h-10 sm:h-12 bg-gray-100 rounded-lg w-full mb-4"></div>
                <div className="h-8 sm:h-9 bg-blue-200 rounded-lg w-4/5"></div>
              </div>

              <button className="w-full flex items-center justify-center gap-2 py-2 sm:py-3 px-4 bg-gray-400 text-white rounded-lg font-medium text-sm sm:text-base">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8" />
                Generate a Form
              </button>

              <div className="flex justify-center mt-6">
                <div className="h-8 sm:h-10 w-20 sm:w-24 bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4">
              <div className="text-blue-500">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45 4L48 19L63 22L48 25L45 40L42 25L27 22L42 19L45 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 34L22 44L32 46L22 48L20 58L18 48L8 46L18 44L20 34Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
