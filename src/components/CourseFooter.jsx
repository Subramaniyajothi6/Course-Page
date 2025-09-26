import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


export default function CourseFooter() {
  return (
    <footer className=" bg-black border-t border-zinc-800 py-6 px-4 ">
      <div className=" flex flex-col sm:flex-row items-center justify-between gap-4 container mx-auto">
        {/* Left: copyright */}
        <div className="text-gray-400 text-base font-medium mb-2 sm:mb-0">
          © Code with Mosh
        </div>

        {/* Center: socials */}
        <div className="flex items-center gap-5 text-2xl text-gray-400">
          <a href="#" aria-label="YouTube" className="hover:text-white">
            <FaYoutube />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <FaFacebook />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <FaInstagram/>
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-white">
            <FaTiktok />
          </a>
        </div>

        {/* Right: links */}
        <div className="flex gap-6 text-gray-400 text-base font-medium">
          <a href="#" className="hover:text-white">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
