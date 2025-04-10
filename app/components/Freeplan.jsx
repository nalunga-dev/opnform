import { IoCreate } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { FaShareAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
export default function Freeplan() {
  return (
    <section className="py-12 px-4 md:px-16 text-center bg-white">
      <h2 className="text-2xl md:text-4xl font-bold text-blue-900 leading-snug">
        The easiest way to create forms. <br />
        Generous unlimited <span className="text-blue-500">free plan.</span>
      </h2>

      <p className="text-blue-700 mt-4 text-base md:text-lg">
        Need a contact form? Doing a survey? Create a form in 2 minutes and{" "}
        <br className="hidden md:block" />
        start receiving submissions.
      </p>

      <div className="max-w-5xl mx-auto mt-10 bg-white  overflow-hidden">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-10 text-left flex flex-col justify-center gap-4">
            <IoCreate className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-900">1. Create</h3>
            <p className="text-gray-700">
              Create a form in 2 minutes. More than 10 input types, images,
              logic and much more.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <TiTick className="text-2xl text-blue-600" />
                Build a simple form in minutes.
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-2xl text-blue-600" />
                No coding needed
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/images/step-1.jpg"
              alt="Step 1"
              className="w-full h-full object-cover  rounded-2xl "
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-15 bg-white  overflow-hidden">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="/images/step-1.jpg"
              alt="Step 1"
              className="w-full h-full object-cover  rounded-2xl  "
            />
          </div>
          <div className="w-full md:w-1/2 p-6 md:p-10 text-left flex flex-col justify-center gap-4">
            <FaShareAlt className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-900">2.Share</h3>
            <p className="text-gray-700">
              Create a form in 2 minutes. More than 10 input types, images,
              logic and much more.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <TiTick className="text-2xl text-blue-600" />
                Build a simple form in minutes.
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-2xl text-blue-600" />
                No coding needed
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-15 bg-white overflow-hidden">
        <div className="flex flex-col gap-2 md:flex-row">
          <div className="w-full md:w-1/2 p-6 md:p-10 text-left flex flex-col justify-center gap-4">
            <FaSignOutAlt className="text-5xl text-blue-600 mb-2" />
            <h3 className="text-xl font-semibold text-blue-900">
              3. Get Results
            </h3>
            <p className="text-gray-700">
              Create a form in 2 minutes. More than 10 input types, images,
              logic and much more.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <TiTick className="text-2xl text-blue-600" />
                Build a simple form in minutes.
              </li>
              <li className="flex items-center gap-2">
                <TiTick className="text-2xl text-blue-600" />
                No coding needed
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="/images/step-1.jpg"
              alt="Step 1"
              className="w-full h-full object-cover  rounded-2xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
