export default function Header() {
  return (
    <header className="bg-black text-green-500 p-6">
      <h1 className="text-4xl font-press-start">Meu Portfólio Tecnológico</h1>
      <nav className="mt-4">
        <ul className="flex justify-center space-x-6 text-lg">
          <li><a href="#projetos" className="hover:underline">Projetos</a></li>
          <li><a href="#sobre" className="hover:underline">Sobre Mim</a></li>
          <li><a href="#contato" className="hover:underline">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}
