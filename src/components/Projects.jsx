import { FaBrain, FaProjectDiagram, FaNotesMedical, FaTasks } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: 'Brain Tumor Detection',
      desc: 'Machine learning model for classifying MRI scans using CNN for early tumor detection.',
      icon: <FaBrain className="text-4xl text-pink-600 mb-3" />
    },
    {
      name: 'Project Registration System',
      desc: 'Web-based platform for managing project submissions and approvals within an organization.',
      icon: <FaProjectDiagram className="text-4xl text-indigo-600 mb-3" />
    },
    {
      name: 'Alzheimer\'s Detection',
      desc: 'AI-based diagnostic tool using MRI data to detect early stages of Alzheimer\'s disease.',
      icon: <FaNotesMedical className="text-4xl text-green-600 mb-3" />
    },
    {
      name: 'Task Handler App',
      desc: 'Personal daily task manager to organize, track, and prioritize everyday activities effectively.',
      icon: <FaTasks className="text-4xl text-yellow-500 mb-3" />
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white text-gray-900 font-sans">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-12 tracking-tight">🚀 My Projects</h2>
      
      <div className="grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {project.icon}
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">{project.name}</h3>
              <p className="text-gray-700 leading-relaxed">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
