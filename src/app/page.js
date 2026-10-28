const projects = [
  {
    number: '01',
    name: 'Atipattas — Plataforma de adoção',
    type: 'Aplicação web / mobile',
    description:
      'Projeto voltado à conexão entre animais disponíveis para adoção e pessoas interessadas. A solução envolve experiência do usuário, organização de telas, fluxo de adoção e integração com uma API.',
    stack: ['Flutter', 'Dart', 'Node.js', 'Express', 'MongoDB'],
    status: 'Projeto em desenvolvimento',
    href: 'https://github.com/mateus23-oliveira',
    linkLabel: 'Ver projetos no GitHub',
  },
  {
    number: '02',
    name: 'Simbiose — Registro de fauna',
    type: 'Sistema web / API',
    description:
      'Sistema acadêmico pensado para apoiar o registro de ocorrências com animais silvestres, incluindo animais feridos e vítimas de atropelamento. O trabalho envolve frontend, backend e persistência de dados.',
    stack: ['React', 'Node.js', 'MongoDB', 'JWT', 'Multer'],
    status: 'Projeto acadêmico',
    href: 'https://github.com/mateus23-oliveira',
    linkLabel: 'Ver projetos no GitHub',
  },
  {
    number: '03',
    name: 'APIs REST e persistência de dados',
    type: 'Backend',
    description:
      'Experimentos e aplicações com rotas, operações CRUD, validação de dados e comunicação entre aplicações e bancos de dados. Base para desenvolver serviços que também possam consumir recursos de IA.',
    stack: ['JavaScript', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'MySQL'],
    status: 'Prática de desenvolvimento',
    href: 'https://github.com/mateus23-oliveira',
    linkLabel: 'Explorar repositórios',
  },
];

const aiProjects = [
  {
    tag: 'IDEIA DE PROJETO',
    title: 'Assistente inteligente com LLM',
    description:
      'Criar uma aplicação que recebe uma pergunta, consulta um modelo de linguagem por API e devolve uma resposta contextualizada, com tratamento de erros e documentação.',
    skills: ['Python', 'API de LLM', 'FastAPI', 'Engenharia de prompts'],
  },
  {
    tag: 'PRÓXIMA ETAPA',
    title: 'Experimentos de Machine Learning',
    description:
      'Desenvolver um notebook documentado com dados públicos, análise exploratória, treinamento de um modelo de classificação e avaliação com métricas apropriadas.',
    skills: ['Python', 'Pandas', 'scikit-learn', 'Jupyter'],
  },
  {
    tag: 'EVOLUÇÃO',
    title: 'Busca semântica com RAG',
    description:
      'Evoluir o assistente para responder com base em documentos selecionados, recuperando trechos relevantes e avaliando a qualidade e as limitações das respostas.',
    skills: ['Embeddings', 'RAG', 'LLMs', 'Avaliação'],
  },
];

const skillGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'Python', 'APIs REST', 'Sequelize'] },
  { title: 'Dados e ferramentas', items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Docker'] },
  { title: 'Em aprofundamento', items: ['LLMs e APIs de IA', 'Engenharia de prompts', 'Machine Learning', 'RAG'] },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Mateus Oliveira, início">
          <span className="brand-mark">M<span>.</span></span>
          <span>mateus<span className="muted">.dev</span></span>
        </a>
        <nav className="navigation" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#ia">IA &amp; ML</a>
          <a href="#habilidades">Habilidades</a>
          <a className="nav-contact" href="#contato">Contato <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="inicio">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> Em busca de oportunidade em tecnologia</div>
          <p className="hero-kicker">DESENVOLVIMENTO DE SOFTWARE · INTELIGÊNCIA ARTIFICIAL</p>
          <h1>Construindo software.<br />Aprendendo com <span>IA.</span></h1>
          <p className="hero-description">
            Sou Mateus Oliveira, desenvolvedor em formação, com foco em aplicações web, APIs e soluções que conectam tecnologia a problemas reais. Estou aprofundando meus conhecimentos para construir e integrar produtos com inteligência artificial.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">Conheça meus projetos <span>↘</span></a>
            <a className="button button-secondary" href="https://github.com/mateus23-oliveira" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
          <div className="hero-facts">
            <div><strong>Web</strong><span>Aplicações e interfaces</span></div>
            <div><strong>Backend</strong><span>APIs e dados</span></div>
            <div><strong>IA</strong><span>Próxima fronteira</span></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Resumo técnico do portfólio">
          <div className="visual-glow" />
          <div className="code-window">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>developer_profile.ts</span><span className="window-state">● online</span></div>
            <div className="code-content">
              <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
              <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'Mateus Oliveira'</span>,</p>
              <p><span className="code-muted">03</span> &nbsp; focus: [</p>
              <p><span className="code-muted">04</span> &nbsp;&nbsp; <span className="code-green">'Software Engineering'</span>,</p>
              <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">'Artificial Intelligence'</span>,</p>
              <p><span className="code-muted">06</span> &nbsp; ],</p>
              <p><span className="code-muted">07</span> &nbsp; mindset: <span className="code-green">'learn.build.evolve'</span>,</p>
              <p><span className="code-muted">08</span> &nbsp; openToLearn: <span className="code-orange">true</span></p>
              <p><span className="code-muted">09</span> {'}'}</p>
            </div>
            <div className="terminal-line"><span>➜</span> npm run build-future <span className="cursor">▋</span></div>
          </div>
          <div className="floating-chip chip-top"><span>⌘</span> Código com propósito</div>
          <div className="floating-chip chip-bottom"><span className="chip-ai">✳</span> Explorando IA aplicada</div>
        </div>
        <a className="scroll-cue" href="#sobre"><span /> Role para conhecer meu trabalho</a>
      </section>

      <section className="about section-wrap" id="sobre">
        <SectionHeading eyebrow="01 / SOBRE MIM" title="Tecnologia com vontade de evoluir." description="Uma trajetória de aprendizado contínuo, projetos práticos e curiosidade para entender como as coisas funcionam por trás da interface." />
        <div className="about-grid">
          <div className="about-copy">
            <p>Estou cursando <strong>Desenvolvimento de Software Multiplataforma na Fatec</strong> e concluí minha formação em Desenvolvimento Web Full Stack pela Trybe. Venho construindo minha base por meio de projetos acadêmicos e pessoais, praticando frontend, backend, APIs e bancos de dados.</p>
            <p>Meu objetivo é crescer como profissional de engenharia de software e aprender a integrar inteligência artificial de forma útil, responsável e bem estruturada — da aplicação que as pessoas usam até os serviços que funcionam por trás dela.</p>
            <p>Trago também a disciplina de uma trajetória profissional fora da tecnologia: compromisso com qualidade, organização, colaboração e aprendizado na prática.</p>
          </div>
          <div className="about-panel">
            <div className="panel-icon">⌁</div>
            <h3>Minha forma de evoluir</h3>
            <ul>
              <li><span>01</span> Aprender os fundamentos antes de escolher atalhos</li>
              <li><span>02</span> Transformar conhecimento em projetos executáveis</li>
              <li><span>03</span> Documentar decisões, testes e resultados</li>
              <li><span>04</span> Usar IA como ferramenta, validando suas respostas</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="projects section-wrap" id="projetos">
        <SectionHeading eyebrow="02 / PROJETOS EM DESTAQUE" title="Aprendizado que vira código." description="Projetos que demonstram minha prática com aplicações, integração de sistemas e persistência de dados. Os links direcionam ao meu GitHub; associe cada card ao repositório específico quando ele estiver público." />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top"><span className="project-number">{project.number}</span><span className="project-status"><i />{project.status}</span></div>
              <p className="project-type">{project.type}</p>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tag-list">{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              <a className="project-link" href={project.href} target="_blank" rel="noreferrer">{project.linkLabel} <span>↗</span></a>
            </article>
          ))}
        </div>
        <p className="project-note"><span>Nota:</span> substitua os links gerais do GitHub pelos links diretos de cada repositório e acrescente capturas de tela, instruções de execução e sua contribuição específica antes de enviar o portfólio à seleção.</p>
      </section>

      <section className="ai-section" id="ia">
        <div className="section-wrap">
          <SectionHeading eyebrow="03 / INTELIGÊNCIA ARTIFICIAL" title="O próximo passo: construir com IA." description="Quero ir além de usar ferramentas de IA: aprender a integrar modelos em produtos de software, medir resultados e compreender suas limitações." />
          <div className="ai-callout"><div className="ai-symbol">✳</div><div><strong>Uma trilha prática, construída com transparência.</strong><p>As propostas abaixo são etapas de desenvolvimento, não projetos concluídos. A ideia é publicar o código, os experimentos e os aprendizados conforme cada entrega ficar funcional.</p></div></div>
          <div className="ai-grid">
            {aiProjects.map((project, index) => (
              <article className="ai-card" key={project.title}>
                <div className="ai-card-head"><span>0{index + 1}</span><span className="ai-tag">{project.tag}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.skills.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div>
              </article>
            ))}
          </div>
          <div className="ai-principles"><span>O que quero demonstrar</span><p><b>Integração</b> de modelos · <b>Qualidade</b> e avaliação · <b>Documentação</b> reproduzível · <b>Uso responsável</b> da IA</p></div>
        </div>
      </section>

      <section className="skills section-wrap" id="habilidades">
        <SectionHeading eyebrow="04 / HABILIDADES" title="Minha caixa de ferramentas." description="Tecnologias estudadas e praticadas em projetos, além de temas que estou aprofundando para trabalhar com produtos de IA." />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-index">0{index + 1}</span><h3>{group.title}</h3>
              <div className="tag-list">{group.items.map((skill) => <Tag key={skill}>{skill}</Tag>)}</div>
            </article>
          ))}
        </div>
        <p className="skills-footnote">Os níveis de domínio variam por tecnologia. Prefiro demonstrar conhecimento por meio de código, projetos e explicações técnicas a listar ferramentas sem evidências.</p>
      </section>

      <section className="contact section-wrap" id="contato">
        <div className="contact-card">
          <div className="contact-orb" />
          <span className="eyebrow">05 / VAMOS CONVERSAR</span>
          <h2>Pronto para aprender,<br />construir e <span>contribuir.</span></h2>
          <p>Estou buscando uma oportunidade para evoluir junto a um time de tecnologia, contribuir com o que já aprendi e desenvolver novas competências em software e inteligência artificial.</p>
          <div className="hero-actions contact-actions">
            <a className="button button-primary" href="https://github.com/mateus23-oliveira" target="_blank" rel="noreferrer">Acessar meu GitHub <span>↗</span></a>
            <a className="button button-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#inicio"><span className="brand-mark">M<span>.</span></span><span>mateus<span className="muted">.dev</span></span></a>
        <p>Feito com curiosidade, código e vontade de evoluir.</p>
        <span>© {new Date().getFullYear()} Mateus Oliveira</span>
      </footer>
    </main>
  );
}
