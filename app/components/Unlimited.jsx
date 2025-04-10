import {
  Code,
  EyeOff,
  Globe,
  Hash,
  Lock,
  PuzzleIcon as PuzzlePiece,
  Webhook,
} from "lucide-react";
import { FiBookOpen } from "react-icons/fi";
export default function Unlimited() {
  const features = [
    {
      icon: <PuzzlePiece className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Form logic",
    },
    {
      icon: <Globe className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "URL pre-fill",
    },
    {
      icon: <Hash className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Unique submission ID",
    },
    {
      icon: <EyeOff className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Hidden fields",
    },
    {
      icon: <Lock className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Form password",
    },
    {
      icon: <Webhook className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Webhooks",
    },
    {
      icon: <Code className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Custom code",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            <span className="text-blue-700 text-3xl"> 99%</span>
            of features are available to all users <br /> for free and without
            limits.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <span className="font-bold text-2xl text-gray-900">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mt-4 lg:max-w-3xl mx-auto px-4 text-center mb-8 bg-[#FEFCE8] border border-[#E1A704] rounded-2xl">
          <div className="flex flex-wrap gap-1 justify-center items-center mb-2">
            <FiBookOpen className="text-[#E1A704] text-2xl" />
            <p className="text-lg md:text-2xl text-[#E1A704] font-bold">
              Nonprofit & Student Discount — 50%
            </p>
          </div>
          <p className="text-[#E1A704] text-sm md:text-base leading-relaxed">
            Whether your nonprofit is large or small, OpnForm’s online Form
            Builder helps your
            <br className="hidden md:block" />
            organization help others. It takes just a few minutes to create and
            publish your forms
            <br className="hidden md:block" />
            online. As an exclusive benefit, we offer nonprofits & students a
            50-percent discount!
          </p>
        </div>
      </div>
    </section>
  );
}
