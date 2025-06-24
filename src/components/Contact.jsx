import { FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-900">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-800 mb-8">Contact Me</h2>

        <div className="flex justify-center gap-8 mb-8 text-3xl">
          {/* Email Icon */}
          <a
            href="mailto:adapamanikantasairam16@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/manikanta-sairam-adapa-7301452b8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
