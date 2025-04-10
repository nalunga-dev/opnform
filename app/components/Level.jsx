import Link from "next/link";
import { ArrowUpRight, Twitter, Github } from "lucide-react";

export default function LevelSection() {
  return (
    <section className="w-full bg-blue-800 text-white py-16 px-4 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Take your forms to the next level
      </h2>

      <p className="text-xl mb-8">Generous, unlimited free plan.</p>

      <Link
        href="/create"
        className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium py-3 px-6 rounded-lg flex items-center mb-10"
      >
        Create a form for FREE
        <ArrowUpRight className="ml-2 h-5 w-5" />
      </Link>

      <div className="flex space-x-6 mb-12">
        <Link
          href="https://twitter.com/opnform"
          aria-label="Twitter"
          className="hover:text-blue-300 transition-colors"
        >
          <Twitter className="h-6 w-6" />
        </Link>
        <Link
          href="https://discord.gg/opnform"
          aria-label="Discord"
          className="hover:text-blue-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M9 12h6m-6-4h6m-6 8h6M7.5 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </Link>
        <Link
          href="https://github.com/opnform"
          aria-label="GitHub"
          className="hover:text-blue-300 transition-colors"
        >
          <Github className="h-6 w-6" />
        </Link>
      </div>

      <p className="text-lg">The form below is an OpnForm, give it a try!</p>
    </section>
  );
}
