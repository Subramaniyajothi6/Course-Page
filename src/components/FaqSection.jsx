export default function FaqSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4 bg-black">
      <h4 className="text-center font-semibold mb-5 text-purple-600 text-lg">
        Need More Details?
      </h4>
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white mb-10 max-w-md sm:max-w-2xl">
        Frequently-Asked Questions
      </h2>

      <div className="max-w-2xl w-full flex flex-col gap-10 text-left px-2 sm:px-0">
        {/* FAQ #1 */}
        <div>
          <p className="font-bold text-white text-lg mb-2">
            How is this course different from YouTube tutorials?
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Crystal clear and straight to the point, each lesson is concise and packed with 20 years of software engineering experience. No rambling—just a perfectly structured path to help you really understand and build your skills.
          </p>
        </div>
        {/* FAQ #2 */}
        <div>
          <p className="font-bold text-white text-lg mb-2">
            What’s the difference between buying a single course and getting Lifetime Access?
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Buying a single course gives you lifetime access to just that course. Lifetime Access unlocks everything I’ve ever created—and everything I’ll release in the future—with a single payment.
          </p>
        </div>
        {/* FAQ #3 */}
        <div>
          <p className="font-bold text-white text-lg mb-2">
            How long will I have access to the course?
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            If you purchase this course, you’ll have lifetime access, allowing you to revisit lessons and resources anytime.
          </p>
        </div>
        {/* FAQ #4 */}
        <div>
          <p className="font-bold text-white text-lg mb-2">
            Is there a money-back guarantee?
          </p>
          <p className="text-gray-300 text-base leading-relaxed">
            Yes, there’s a 30-day money-back guarantee. If you find the course isn’t a good fit, you can request a refund within the first 30 days.
          </p>
        </div>
      </div>
    </section>
  );
}
