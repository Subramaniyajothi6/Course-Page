export default function CoursePreviewSection() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-black pt-12 pb-32">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
        Still on the fence?
      </h2>
      <p className="text-center text-gray-300 text-xl font-medium mb-8">
        Here's a free preview of the course.
      </p>
      <a
        href="#course-preview" // Change this link to your course preview if needed
        className="inline-block px-5 py-3 text-lg rounded-full bg-violet-600 hover:bg-violet-700 text-white font-bold transition-all mb-8"
      >
        Preview Course
      </a>
    </section>
  );
}
