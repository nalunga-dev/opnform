import { FaBell } from "react-icons/fa6";
import { FaFileUpload } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
export default function WorkProcess() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 text-center bg-white">
      <div className="mt-5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-20 h-20">
            <FaBell className="text-4xl text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mt-4 text-blue-600 ">
            Notifications
          </h3>
          <p className="text-[#010E37] mt-2 text-sm">
            Receive notifications directly in Slack or in your mailbox whenever
            your from has a new submission if you want to
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-20 h-20">
            <FaFileUpload className="text-4xl text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mt-4 text-blue-600 ">
            File Uploads
          </h3>
          <p className="text-[#010E37] mt-2 text-sm">
            Receive notifications directly in Slack or in your mailbox whenever
            your from has a new submission if you want to
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="relative flex items-center justify-center w-20 h-20">
            <BiSolidCustomize className="text-4xl text-blue-700" />
          </div>
          <h3 className="text-lg font-bold mt-4 text-blue-600 ">
            Customize Everything
          </h3>
          <p className="text-[#010E37] mt-2 text-sm">
            Receive notifications directly in Slack or in your mailbox whenever
            your from has a new submission if you want to
          </p>
        </div>
      </div>
    </section>
  );
}
