"use client"; 
import { useState } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projetos = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto 1...' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do projeto 2...' },
    { id: 3, title: 'Projeto 3', description: 'Descrição do projeto 3...' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projetos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projetos.length) % projetos.length);
  };

  return (
    <section className="relative p-8 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-green-500">Projetos</h2>

      <div className="overflow-hidden relative">
        {projetos.map((projeto, index) => (
          <div
            key={projeto.id}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <div className="text-center p-8 border-2 border-green-500 rounded-lg">
              <h3 className="text-xl mb-2">{projeto.title}</h3>
              <p>{projeto.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 rounded-full hover:bg-green-700"
      >
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 p-2 rounded-full hover:bg-green-700"
      >
        &#10095;
      </button>
    </section>
  );
}
