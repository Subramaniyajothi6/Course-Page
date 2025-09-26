import { Check, CheckCircle2, Globe2, HelpCircle, Star, UserCircle2 } from "lucide-react";
import CourseAccordion from "./CourseContent";








const testimonials = [
    {
        name: "Fred Lackey",
        avatar: "/_next/image?url=%2Fimages%2Ftestimonials%2Ffred_lackey.png&w=96&q=75",
        rating: 5,
        quote:
            "Been recommending Mosh for years... probably a decade by now. I've lost count of how many developers and business people I have shared one of his videos with. Not much to say other than he's one of the best instructors out there. Great personality for teaching and a solid mastery of the subject matter. He's always going to be my first stop for learning something new.",
    },
    {
        name: "David Roberts",
        avatar: "", // No avatar present, fallback to initial
        rating: 5,
        quote: `Mosh helped me land a job as as a Mobile software engineer
I'm a self taught software engineer. During this period of study I completed many courses, trying to emulate a computer science education. Mosh's courses helped me all the way and the ones I continue coming back to and referencing as a professional software engineer.
I already held a degree and didn't want to incure the cost of going to college again. I'm also pretty motivated, so Mosh's structured courses worked well for me.
May courses will teach you a framework or technology, but these are highly perishable skills. Mosh will teach you to think like a software engineer and load you with the correct fundamentals that will give you confidence when you get in the workplace.
Thanks for everything Mosh!`,
    },
    // Add more reviews as needed...
];

// import { CheckCircle2 } from "lucide-react";
export default function CourseLayout() {
    return (
        <section className="bg-black text-white min-h-screen flex px-6 py-12 ">

            <div className=" flex container justify-center mx-auto flex-col md:flex-row">
                {/* Left Sidebar (Sticky TOC) */}
                <aside className="w-64 pr-8 hidden md:block">
                    <div className="sticky top-24 space-y-6">
                        <ul className="space-y-4 text-gray-300">
                            <li><a href="#about" className="hover:text-purple-400">📖 About the Course</a></li>
                            <li><a href="#learn" className="hover:text-purple-400">💡 What You'll Learn</a></li>
                            <li><a href="#build" className="hover:text-purple-400">💻 What You'll Build</a></li>
                            <li><a href="#curriculum" className="hover:text-purple-400">⚙️ Curriculum</a></li>
                            <li><a href="#audience" className="hover:text-purple-400">👥 Target Audience</a></li>
                            <li><a href="#prereq" className="hover:text-purple-400">📋 Prerequisites</a></li>
                            <li><a href="#instructor" className="hover:text-purple-400">🧑‍🏫 Your Instructor</a></li>
                            <li><a href="#reviews" className="hover:text-purple-400">💬 Reviews</a></li>
                        </ul>

                        <button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold text-white transition">
                            Enroll Now
                        </button>
                    </div>
                </aside>

                {/* Right Content */}
                <main className="flex-1 space-y-15 max-w-3xl">

                    <section id="about">
                        <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent">Made with 🩷</p>
                        <h2 className="text-2xl font-bold mb-4">About the Course</h2>
                        <p className="text-gray-300 font-sans text-xl my-2.5">AI is everywhere — but can you actually build with it?... </p>
                        <p className="text-gray-300 font-sans text-xl ">

                            Most developers have played around with ChatGPT. Maybe you’ve even copied some AI-generated code into your project. But that’s not the same as building real, AI-powered features that make your apps smarter, more engaging, and more valuable to users.
                        </p>
                        <p className="text-gray-300 font-sans text-xl my-4">
                            That’s exactly what this course is about.
                        </p>
                        <p className="text-gray-300 font-sans text-xl">
                            In Build AI-Powered Apps, I’ll walk you step by step through the <span className="font-bold text-white">concepts, modern tools, and best practices </span> you need to create production-ready apps powered by AI.
                        </p>
                        <p className="text-gray-300 font-sans text-xl my-4">
                            This is the AI course every developer needs right now </p>
                    </section>

                    <section id="learn">
                        <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent">Highly Practical</p>

                        <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>

                        <p className="text-gray-300 font-sans text-xl my-4">In this section, you’ll explore core concepts step by step...</p>
                        <ul className="space-y-4 text-gray-300">
                            {[
                                "Understand Large Language Models (LLMs) and how they work",
                                "Work with tokens, context windows, and model settings",
                                "Write effective prompts using proven prompt engineering techniques",
                                "Build a chatbot from scratch with a clean, maintainable architecture",
                                "Create a review summarizer that helps users make faster decisions",
                                "Integrate open-source models using Hugging Face and Ollama",
                                "Run models locally on your own machine",
                                "Apply best practices and clean code principles",
                                "Use modern tools to build full-stack AI-powered apps (Bun, Tailwind CSS, shadcn/ui, Prisma, and more)",
                            ].map((point, idx) => (
                                <li key={idx} className="flex items-start text-gray-300 font-sans text-xl gap-3 ">
                                    <Check className="text-pink-500 w-6 h-6 shrink-0 mt-1" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section id="build">
                        <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent">Learn by Doing</p>
                        <h2 className="text-2xl font-bold mb-4">What You'll Build</h2>

                        <p className="text-gray-300 font-sans text-xl my-4">
                            <span className="font-bold text-white">Chatbot:</span> Build a chatbot that can answer questions about an imaginary theme park — things like “What rides are suitable for kids under 10?”, “Where can I find vegetarian food options?”, or “What are the park’s opening hours?”. Instead of clicking through menus or digging through a website, visitors can get instant answers. Step by step, you’ll create the backend, structure your code using clean architecture principles, and build a modern frontend that makes the experience seamless and engaging.
                        </p>

                        <p className="text-gray-300 font-sans text-xl my-4">

                            <span className="font-bold text-white">Review Summarizer:</span> These days, lots of apps let users summarize content so they can make faster decisions. In this project, we’ll build a tool that condenses customer reviews into clear, actionable insights. The techniques you’ll learn here can be applied to all sorts of AI-integrated features.
                        </p>

                    </section>

                    <section id="curriculum" className="mb-16">
                        <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent">
                            A Perfectly Structured Course
                        </p>
                        <h2 className="text-2xl font-bold mb-4">Course Content</h2>
                        <p className="text-gray-300 mb-6">This section covers lesson breakdowns...</p>
                        <CourseAccordion />
                    </section>


                    <section id="audience" className="mt-10">
                        {/* Icon column */}

                        <div className="w-12 h-12 rounded-full bg-[#221a3f] flex items-center justify-center ">
                            <UserCircle2 className="w-8 h-8 text-[#9443ff]" />
                        </div>

                        {/* Content column */}
                        <div>
                            <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent text-xl">Target Student</p>
                            <h2 className="text-3xl font-semibold mb-7 mt-5 text-white">Who Is This For?</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start ">
                                    <span className="mt-4  w-4 h-[2px] rounded-full bg-pink-400 mr-4"></span>
                                    <span className="text-zinc-100 text-xl">Anyone who wants to add AI skills to their developer toolkit</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mt-4  w-4 h-[2px] rounded-full bg-pink-400 mr-4"></span>
                                    <span className="text-zinc-100 text-xl">Frontend devs ready to go full-stack with AI-powered features</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mt-4  w-4 h-[2px] rounded-full bg-pink-400 mr-4"></span>
                                    <span className="text-zinc-100 text-xl">Developers who want to learn modern tools and best practices for building real-world apps</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mt-4  w-4 h-[2px] rounded-full bg-pink-400 mr-4"></span>
                                    <span className="text-zinc-100 text-xl">Anyone tired of “AI hype” and looking for practical, hands-on projects</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* <section id="prereq">
                        <h2 className="text-2xl font-bold mb-4">Prerequisites</h2>
                        <p className="text-gray-300">No ML background needed, just basic coding knowledge...</p>
                    </section> */}

                    <section id="prereq" className="mt-10">
                        {/* Icon column */}

                        <div className="w-12 h-12 rounded-full bg-[#221a3f] flex items-center justify-center">
                            <HelpCircle className="w-8 h-8 text-[#a259ff] " />
                        </div>

                        {/* Content column */}
                        <div className="flex-1 my-2">
                            <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent text-xl ">What You Should Know First</p>
                            <h2 className="text-3xl font-semibold mb-7 mt-5 text-white">Prerequisites</h2>
                            <p className="text-zinc-200 mb-4 text-lg leading-relaxed">
                                To get the most out of this course, you should be comfortable with
                                <span className="font-bold text-white"> modern JavaScript and TypeScript </span>
                                and know the
                                <span className="font-bold text-white"> basics of React</span>,
                                like creating components, using JSX, and working with state and effect hooks.
                                Some familiarity with backend development or databases is helpful but not required,
                                and the same goes for AI—you don’t need prior experience as I’ll cover the essentials from scratch.
                            </p>
                            <p className="text-zinc-200 mb-8 text-lg">
                                Here are the courses we recommend if you need to strengthen the fundamentals.
                            </p>
                            {/* Course Recommendation Card */}
                            <div className="w-full max-w-80 rounded-xl overflow-hidden bg-[#18181c] shadow-lg border border-zinc-700">
                                {/* Cover image */}
                                <div className="bg-gradient-to-br from-[#48c6ef] via-[#6f86d6] to-[#a259ff] h-40 flex justify-center items-center">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                                        alt="React Logo"
                                        className="w-24 h-24"
                                    />
                                    <span className="absolute text-white text-2xl font-bold mt-28 ">React + TypeScript</span>
                                </div>
                                {/* Info */}
                                <div className="p-5">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-zinc-100 font-bold text-xl">React 18 for Beginners</h3>
                                        <span className="ml-2 bg-zinc-700 rounded px-2 py-0.5 text-xs font-medium text-zinc-200">8h</span>
                                    </div>
                                    <p className="text-zinc-300 text-sm mb-4">A step-by-step guide to building web apps with React 18+ and TypeScript</p>
                                    <div className="flex items-end gap-3">
                                        <span className="text-white text-lg font-bold">₹2,622</span>
                                        <span className="text-zinc-500 line-through text-base">₹13,109</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    {/* <section id="instructor">
                        <h2 className="text-2xl font-bold mb-4">Your Instructor</h2>
                        <p className="text-gray-300">Meet your guide for building AI-powered apps...</p>
                    </section> */}

                    <section id="instructor" className="mt-10">
                        {/* Icon and header */}

                        <div className="w-12 h-12 rounded-full bg-[#221a3f] flex items-center justify-center">
                            <Globe2 className="w-7 h-7 text-[#a259ff]" />
                        </div>
                        <div>
                            <p className="inline bg-gradient-to-l to-violet-600 from-fuchsia-400 font-semibold bg-clip-text text-transparent text-xl ">Your Instructor</p>
                            <h2 className="text-3xl font-semibold mb-7 mt-5 text-white">Why Learn From Me?</h2>
                        </div>


                        {/* Main content */}
                        <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
                            {/* Optional avatar image */}
                            <img
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.5fe5ba55.png&w=640&q=100"
                                alt="Mosh Hamedani"
                                className="w-[150px] h-[150px] rounded-full object-cover mx-auto md:mx-0"
                            />
                            <div className="flex-1">
                                <p className="text-zinc-200 text-lg mb-4 max-w-prose">
                                    Hi! I'm Mosh Hamedani. I’ve been a software engineer for over 20 years and teaching coding for the last 10. In that time, I’ve helped millions of students level up as developers.
                                </p>
                                <p className="text-zinc-200 text-lg mb-4 max-w-prose">
                                    My teaching style is simple: <span className="font-bold text-white">no fluff, no wasted time.</span> Every lesson is practical, structured, and easy to follow.
                                </p>
                                <p className="text-zinc-200 text-lg mb-4 max-w-prose">
                                    When you take one of my courses, you don’t just learn to code — you <span className="font-bold text-white">learn how to think like a developer.</span>
                                </p>
                            </div>
                        </div>

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 mb-6 ">
                            <div className="rounded-xl border border-zinc-800 shadow-2xl bg-black flex flex-col items-center  ">
                                <div className="w-3/4 mb-10 ">
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
                                </div>
                                <div className=" mb-8   flex flex-col items-center ">
                                    <p className="font-bold text-violet-400 text-3xl mb-1">10M+</p>
                                    <p className="text-zinc-200 text-center">Students taught</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-zinc-800 shadow-2xl bg-black flex flex-col items-center  ">
                                <div className="w-3/4 mb-10">
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-green-600 to-transparent w-full" />
                                </div>
                                <div className=" mb-8   flex flex-col items-center ">
                                    <p className="font-bold text-[#3be9a9] text-3xl mb-1">4M</p>
                                    <p className="text-zinc-200 text-center">YouTube fans</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-zinc-800 shadow-2xl bg-black flex flex-col items-center  ">
                                <div className="w-3/4 mb-10">
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent w-full" />
                                </div>
                                <div className=" mb-8   flex flex-col items-center ">
                                    <p className="font-bold text-[#f472b6] text-3xl mb-1">20+</p>
                                    <p className="text-zinc-200 text-center">Years of experience</p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-zinc-800 shadow-2xl bg-black flex flex-col items-center   ">
                                <div className="w-3/4 mb-10 ">
                                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent w-full" />
                                </div>

                                <div className=" mb-8   flex flex-col items-center ">
                                    <p className="font-bold text-[#fbbf24] text-3xl mb-1">52</p>
                                    <p className="text-zinc-200 text-center">Coding courses</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section id="reviews">
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        <p className="text-gray-300">See what past students are saying...</p>
                    </section> */}


                    <section id="reviews" className="mt-10">
                        <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                        <p className="text-gray-300 mb-8">See what past students are saying...</p>

                        <ul className="flex flex-col gap-4">
                            {testimonials.map((review, idx) => (
                                <li key={idx}>
                                    <div className="border border-slate-800 rounded-lg overflow-hidden bg-black p-5 transition-colors duration-200 ease-in-out">
                                        <figure className="rounded-2xl h-full">
                                            <figcaption className="flex items-center gap-x-4 mb-5">
                                                {review.avatar ? (
                                                    <img
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        className="h-10 w-10 rounded-full bg-gray-50"
                                                    />
                                                ) : (
                                                    <span className="h-10 w-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-white">
                                                        {review.name[0]}
                                                    </span>
                                                )}
                                                <div>
                                                    <div className="font-semibold text-white">{review.name}</div>
                                                    <div className="flex space-x-1">
                                                        {[...Array(5)].map((_, starIdx) => (
                                                            <Star
                                                                key={starIdx}
                                                                className="w-5 h-5 text-green-500"
                                                                aria-hidden="true"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            </figcaption>
                                            <blockquote className="text-zinc-200 whitespace-pre-line">{review.quote}</blockquote>
                                        </figure>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <button className="group inline-block px-4 py-1 mt-6 text-sm font-semibold rounded-full bg-zinc-700 hover:bg-zinc-600 text-white transition-all">
                            Show More
                        </button>
                    </section>


                </main>
            </div>
        </section>
    );
}
