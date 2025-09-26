import { Check } from "lucide-react";

export default function BuyCourseSection() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8  bg-black min-h-screen">
      {/* Page Main Heading as h1 */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-6 pt-10">
        Ready to Build AI-Powered Apps?
      </h1>

      {/* Subtitle */}
      <p className="text-center max-w-[50ch] text-base sm:text-lg md:text-xl font-medium text-gray-300 leading-relaxed mb-10">
        Don’t just play with AI.
        <br />
        Learn how to integrate it into your apps with confidence.
      </p>

      {/* Card container */}
      <div className="w-full md:max-w-[450px]">
        <div
          role="enrollment-card"
          className="relative rounded-3xl bg-gradient-to-b from-slate-700 to-transparent p-[1px]"
        >
          <div className="rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 via-slate-850 p-6 md:p-8 shadow-lg overflow-hidden border border-zinc-800">
            {/* Title and subtitle */}
            <h4 className="font-bold text-2xl mb-1 text-white w-fit">
              Buy this Course
            </h4>
            <p className="text-gray-400 mb-6 font-medium">
              Own this course forever.
            </p>

            {/* Price */}
            <div className="mb-4">
              <span className="text-5xl font-extrabold text-white leading-none">
                ₹17,507
              </span>
              <p className="text-gray-400 mt-1 text-sm">
                🇮🇳 You'll be charged $199 + tax
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://sso.teachable.com/secure/146684/checkout/6420960/build-ai-powered-apps?coupon_code=EXPIRED"
              target="_blank"
              rel="noopener noreferrer"
              role="button"
              className="block w-full rounded-full bg-violet-600 hover:bg-violet-700 transition-colors duration-200 py-3 text-white font-semibold text-center text-lg md:text-xl"
            >
              Buy This Course
            </a>
            <p className="mt-3 text-gray-400 text-xs font-semibold text-center">
              No recurring fees — ever.
            </p>

            {/* What’s included */}
            <div className="mt-10">
              <h5 className="text-gray-400 font-medium mb-4">What's included:</h5>
              <ul className="space-y-3 text-white text-sm md:text-base">
                {[
                  "7 hours of HD video",
                  "120 lessons",
                  "Lifetime access",
                  "Downloadable content",
                  "English captions",
                  "Certificate of completion",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check
                      strokeWidth={3}
                      className="w-5 h-5 shrink-0 mt-1 text-violet-500"
                    />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="max-w-xl px-4 text-center mt-14 mb-20">
        <h3 className="text-white text-2xl sm:text-3xl font-semibold mb-4">
          Try It, Risk-Free
        </h3>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
          I’m confident you’ll love this course. But if it’s not the right fit, no worries! Get a refund within 30 days — no questions asked.
        </p>
        <img
          src="money-back.160ae298.svg"
          alt="Money-back guarantee"
          width={130}
          height={130}
          className="mx-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
}
