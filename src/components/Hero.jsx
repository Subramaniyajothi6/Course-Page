
export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 py-12 ">
      <div className="max-w-7xl w-full flex flex-row justify-center gap-10 items-center mx-auto">
        {/* Left Content */}
        <div>
          <p className="bg-gradient-to-l to-violet-600 from-pink-400 bg-clip-text text-transparent font-semibold text-xl mb-4">
            A Course You'll Actually Finish
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Build AI-Powered Apps – <br /> An AI Course for Developers
          </h1>
          <p className="text-gray-300 mb-8 text-lg">
            Learn how to integrate AI into your apps – no ML background needed
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold text-white transition">
            Enroll Now
          </button>
        </div>

        {/* Right Content */}
        <div className=" border border-zinc-800 rounded-2xl p-8 shadow-lg space-y-5 max-w-xs">
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-purple-400">📊</span> Intermediate
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">▶️</span> 7 Hours
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">📚</span> 120 Lessons
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">⬇️</span> Downloadable Content
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">🖐️</span> Hands-on Exercises
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">💬</span> English Captions
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">🏅</span> Certificate of Completion
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">♾️</span> Lifetime Access
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">⏰</span> Learn at Your Own Pace
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
