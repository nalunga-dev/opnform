"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export default function Plan() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const features = [
    "Form confirmation emails",
    "Discord notifications",
    "1 Custom domain",
    "Larger file uploads (50mb)",
    "Priority support",
    "Custom sender email (SMTP)",
    "Slack notifications",
    "Editable submissions",
    "Custom code",
    "Remove OpnForm branding",
    "Form Analytics",
  ];

  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className=" rounded-2xl max-w-6xl mx-auto p-6 overflow-hidden">
        <div className="grid md:grid-cols-2 rounded-2xl  shadow-md   gap-8 p-8 bg-white ">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl text-blue-800 font-bold flex items-center gap-2">
                Pro Plan
                <span className="text-blue-600 flex items-center">
                  <svg
                    className="w-8 h-8 mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L5 7.5V16.5L12 22L19 16.5V7.5L12 2Z" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-700 mt-3 text-lg">
                OpnForm Pro offers empowering features tailored to the advanced
                needs of teams and creators. Enjoy our free 3-day trial!
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 font-medium tracking-wider text-sm mb-4 border-b pb-2">
                WHAT&apos;S INCLUDED
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">{feature}</span>
                  </div>
                ))}
                <div className="md:col-span-2 mt-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    Read more about our pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-[#F8FAFC] items-center space-y-6">
            <div className="bg-[#F1F5F9] rounded-full p-1 flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-7 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-white shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Yearly
              </button>
              <span className="ml-2 text-xs font-medium text-blue-600">
                SAVE 20%
              </span>
            </div>

            <div className="text-center">
              <div className="text-6xl text-blue-600 font-bold">$16</div>
              <div className="text-gray-600">per month</div>
            </div>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start free trial
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className=" rounded-2xl max-w-6xl mx-auto p-6  overflow-hidden">
        <div className="grid md:grid-cols-2 rounded-2xl  shadow-md  gap-8 p-8 bg-white ">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl text-blue-800 font-bold flex items-center gap-2">
                Enterprise Plan
                <span className="text-blue-600 flex items-center">
                  <svg
                    className="w-8 h-8 mr-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L5 7.5V16.5L12 22L19 16.5V7.5L12 2Z" />
                  </svg>
                </span>
              </h2>
              <p className="text-gray-700 mt-3 text-lg">
                OpnForm Pro offers empowering features tailored to the advanced
                needs of teams and creators. Enjoy our free 3-day trial!
              </p>
            </div>

            <div>
              <h3 className="text-blue-400 font-medium tracking-wider text-sm mb-4 border-b pb-2">
                WHAT&apos;S INCLUDED
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-blue-800">{feature}</span>
                  </div>
                ))}
                <div className="md:col-span-2 mt-2">
                  <a href="#" className="text-blue-600 hover:underline">
                    Read more about our pricing
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-[#F8FAFC] items-center space-y-6">
            <div className="bg-[#F1F5F9] rounded-full p-1 flex items-center">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-7 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-white shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  billingCycle === "yearly"
                    ? "bg-white shadow-sm"
                    : "text-gray-600"
                }`}
              >
                Yearly
              </button>
              <span className="ml-2 text-xs font-medium text-blue-600">
                SAVE 20%
              </span>
            </div>

            <div className="text-center">
              <div className="text-6xl text-blue-600 font-bold">$16</div>
              <div className="text-gray-600">per month</div>
            </div>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start free trial
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
