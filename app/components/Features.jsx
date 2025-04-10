import {
  Calendar,
  Code,
  EyeOff,
  Globe,
  Grid,
  Hash,
  Lock,
  PuzzleIcon as PuzzlePiece,
  Webhook,
} from "lucide-react";

export default function Features() {
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
    {
      icon: <Calendar className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "Closing date",
    },
    {
      icon: <Grid className="w-20 h-20 md:w-6 md:h-6 text-blue-600" />,
      title: "And much more...",
    },
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">
            And many more features
          </h2>
          <p className="text-lg text-gray-700">
            OpnForm makes form building easy and comes with powerful features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              <div className="flex-shrink-0">{feature.icon}</div>
              <span className="font-medium text-gray-900">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
