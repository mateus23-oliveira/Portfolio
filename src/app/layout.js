import './globals.css';

export const metadata = {
  title: 'Mateus Oliveira | Desenvolvimento de Software & IA',
  description:
    'Portfólio de Mateus Oliveira: desenvolvimento web, APIs, projetos de software e aprendizado em inteligência artificial e Machine Learning.',
  openGraph: {
    title: 'Mateus Oliveira | Desenvolvimento de Software & IA',
    description: 'Projetos, habilidades e evolução em desenvolvimento de software e inteligência artificial.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
