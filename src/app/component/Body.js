import Image from 'next/image';

export default function Body() {
  return (
    <main className="flex flex-col items-center justify-center p-8 bg-gray-900 text-white">
      <section id="sobre" className="text-center">
        <Image
          src="/IMG-20230914-WA0041.jpeg"  // Substitua pelo caminho da sua foto
          alt="Minha Foto"
          width={100}
          height={100}
          className="rounded-full mb-4 object-cover"
        />
        <h2 className="text-3xl font-press-start text-green-500">Sobre Mim</h2>
        <p className="mt-4 text-lg">Sou desenvolvedor apaixonado por tecnologia e inovação. Aqui estão alguns dos meus principais projetos.</p>
      </section>
    </main>
  );
}
