export default function Skills() {
  const skills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'DSA', icon: 'https://cdn-icons-png.flaticon.com/512/4341/4341139.png' }, // a generic data icon
  ];

  return (
    <section className="py-16 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-4xl font-bold mb-10 text-center text-blue-800">My Skills</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map(skill => (
          <li key={skill.name} className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-3" />
            <span className="text-lg font-semibold">{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
