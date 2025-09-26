export default function IntroSection() {
  return (
    <section className="bg-black text-white px-6 py-16 flex flex-col items-center">
      {/* Top Text */}
      <p className="max-w-3xl text-center text-lg text-gray-300 mb-10">
        Say goodbye to scattered tutorials and endless fluff. 
        This course gives you a clear, structured path with bite-sized videos 
        that blend theory and hands-on practice.
      </p>

      {/* Video Player */}
      <div className="w-full max-w-5xl rounded-xl overflow-hidden shadow-lg">
        <video 
          controls 
          className="w-full rounded-xl"
          poster="videoThumbnail.png"
          
        >
          <source src="../build-ai-powered-apps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
