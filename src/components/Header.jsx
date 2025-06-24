export default function Header() {
  return (
    <header className="flex justify-between p-4 bg-white shadow">
      <h1 className="text-xl font-bold">Sai's Portfolio</h1>
      <nav>
        <a href="#projects" className="mx-2">Projects</a>
        <a href="#contact" className="mx-2">Contact</a>
      </nav>
    </header>
  );
}
