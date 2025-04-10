import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center flex-wrap">
        <div className="order-1 md:order-none flex items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-10 h-10 mr-2">
              <Image
                src="https://opnform.com/img/logo.svg"
                alt="OpnForm Logo"
                width={50}
                height={50}
                className="rounded-full bg-blue-500"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">OpnForm</span>
          </Link>
        </div>

        <div className="order-3 md:order-none grid grid-cols-2 sm:grid-cols-2 gap-x-12 gap-y-4 text-sm text-center sm:text-left">
          <div className="flex flex-col space-y-2">
            <Link
              href="/feature-requests"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Feature Requests
            </Link>
            <Link
              href="/discord"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Discord
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/report-abuse"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Report Abuse
            </Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link
              href="/roadmap"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/docs"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Technical Docs
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="order-2 md:order-last text-center md:text-right w-full md:w-auto">
          <p className="text-gray-600 text-sm">
            © Copyright 2025. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
