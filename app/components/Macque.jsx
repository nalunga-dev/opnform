"use client";

import Image from "next/image";

export default function Marquee() {
  const cards = [
    {
      image: "/images/step-1.jpg",
      name: "Customize Everything",
      description:
        "Change form themes, change texts, colors, add images, add custom thank you pages and much more.",
    },
    {
      image: "/images/step-1.jpg",
      name: "Customize Everything",
      description:
        "Change form themes, change texts, colors, add images, add custom thank you pages and much more.",
    },
    {
      image: "/images/step-1.jpg",
      name: "Customize Everything",
      description:
        "Change form themes, change texts, colors, add images, add custom thank you pages and much more.",
    },
  ];

  return (
    <div className="bg-white py-12 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-2 text-black">
        Single or multi-page forms
      </h2>
      <h1 className="text-4xl font-bold text-center mb-1 text-blue-600">
        Discover our beautiful templates{" "}
      </h1>
      <p className="text-3xl font-bold text-center mb-2 text-gray-400">
        If you need inspiration, checkout our templates.
      </p>
      <p className="text-3xl font-bold text-center mb-10 text-gray-800">
        see all Templates
      </p>
      <div className="relative w-full">
        <div className="flex animate-marquee gap-6 w-max">
          {[...cards, ...cards].map((card, idx) => (
            <div
              key={idx}
              className="w-84 bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
            >
              <Image
                src={card.image}
                alt={card.name}
                width={256}
                height={160}
                className="object-cover w-full h-40"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {card.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{card.description}</p>
                <div className="flex items-center justify-between">
                  <button className="mt-4 bg-blue-400 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition">
                    Charity form plus+
                  </button>
                  <button className="mt-4 bg-blue-400 text-white px-2 py-2 rounded-lg hover:bg-blue-700 transition">
                    Charity form plus+
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
