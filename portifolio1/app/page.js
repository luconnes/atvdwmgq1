export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      
      {}
      <img
        src="/images/image.png"
        alt="Foto de Lucas Ribeiro"
        style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px' }}
      />
      
      <p>Estudante de Ciência da Computação | Desenvolvedor em formação</p>

      <h2>Mini Bio</h2>
      <p>
        Tenho experiência em Python, Java, C e projetos acadêmicos de compiladores,
        sistemas CRUD e aplicações inclusivas. Gosto de transformar ideias em
        protótipos funcionais e aprender novas tecnologias.
      </p>

      <h2>Projetos</h2>
      <ul>
        <li>Compilador acadêmico — análise léxica e sintática</li>
        <li>Webdriver — CRUD em Python/SQLite para gerenciamento de arquivos</li>
        <li>Instrumento Musical Tátil e Visual — inclusão para PCDs</li>
      </ul>

      <hr />
      
    </div>
  );
}