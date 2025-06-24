export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center text-center md:text-left">
        
        {/* Profile Image with black shadow */}
        <img
          src="https://github.com/Manikantasairam21.png"
          alt="Manikanta Sairam"
          className="w-40 h-40 rounded-full border-4 border-blue-300 mb-6 md:mb-0 md:mr-10 shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
        />

        {/* Text Content */}
        <div>
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Hi, I'm Manikanta Sairam!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Full Stack Developer | Java | React | SQL | DSA Enthusiast
          </p>

          <a
            href="https://github.com/Manikantasairam21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow hover:bg-gray-900 transition"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
