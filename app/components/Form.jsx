"use client";

import { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-blue-800 p-7">
      <div className="max-w-xl mx-auto  bg-white rounded-lg shadow-md p-6">
        {isSubmitted ? (
          <div className="text-center">
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              Thank you!
            </h2>
            <p className="text-gray-600">We'll get back to you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-4 text-blue-600 hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-70"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </form>
        )}

        <div className="text-center text-sm text-gray-500 mt-6">
          Powered by{" "}
          <a
            href="https://opnform.com"
            className="text-blue-600 hover:underline"
          >
            OpnForm
          </a>
        </div>
      </div>
    </div>
  );
}
