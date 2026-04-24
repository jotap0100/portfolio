import React from 'react';
import './Home.css';
import { ExternalLink, Mail, ArrowRight } from 'lucide-react';

interface HomeProps {
  onViewSubjects: () => void;
}

export const Home: React.FC<HomeProps> = ({ onViewSubjects }) => {
  return (
    <div className="home-container animate-fade-in">
      
      {/* SECTION: Hero Banner */}
      <section className="hero-section">
        {/* Banner image wrapper */}
        <div className="hero-image-wrapper">
          <div className="hero-gradient-overlay" />
        </div>
        
        {/* Floating details over the banner */}
        <div className="hero-content">
          <h1 className="hero-title">João Pedro Cagliari</h1>
          <p className="hero-subtitle">Estudante de analise em desenvolvimento de sistemas</p>
          
          <div className="hero-actions">
            <button className="primary-btn hero-btn" onClick={onViewSubjects}>
              <ArrowRight size={20} />
              Ver Matérias
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: About Me */}
      <section className="about-section max-w-container">
        <div className="about-grid">
          <div className="about-photo-wrapper">
            <img src="/profile.png" alt="Foto de Perfil" className="profile-img" />
          </div>
          <div className="about-text-wrapper">
            <h2 className="section-title">Sobre Mim</h2>
            <p>
              Olá, meu nome é João Pedro Cagliari, conhecido como jota, tenho 18 anos. Nasci no interior de São Paulo, no dia 18/02/2008, filho de Camila e Tiago. Tenho uma grande paixão por jogar futebol e futevôlei com os amigos. Além disso, meu hobby favorito é a altinha e o futevôlei, esportes que pratico há mais de 3 anos. Uma curiosidade sobre mim é que já tive a oportunidade de jogar no Corinthians.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: Curriculum & Old Portfolio */}
      <section className="cv-portfolio-section max-w-container">
        
        {/* CV Box */}
        <div className="cv-box">
          <div className="cv-info">
            <h2 className="section-title dark">Meu Currículo</h2>
            <p className="cv-desc">Confira minhas habilidades, formação e experiências em detalhes.</p>
          </div>
          <a 
            href="https://docs.google.com/document/d/19pyG9m3LlgV6zPfZ6PDa5zNcqCzc9peOZUKd8XGycuw/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="primary-btn" 
          >
            <ExternalLink size={20} />
            Acessar Currículo
          </a>
        </div>

        {/* Portfolios Anteriores (Unified) */}
        <div className="old-portfolio-box">
          <div className="cv-info">
            <h2 className="section-title dark">Portfólios Anteriores</h2>
            <p className="portfolio-desc">
              Acompanhe minha evolução ao longo do tempo visualizando os trabalhos que desenvolvi em anos anteriores.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="https://canva.link/kne452vz1sgzw0i" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="secondary-btn"
            >
              <ExternalLink size={20} />
              Portfólio de 2024
            </a>
            <a 
              href="https://sites.google.com/estudante.sesisenai.org.br/portfolio-jp/in%C3%ADci" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="secondary-btn"
            >
              <ExternalLink size={20} />
              Portfólio de 2025
            </a>
          </div>
        </div>
      </section>

      {/* SECTION: Contact */}
      <section className="contact-section max-w-container animate-fade-in" style={{ paddingBottom: '100px' }}>
        <div className="contact-box">
          <div className="contact-info">
            <h2 className="section-title dark">Vamos conversar?</h2>
            <p className="contact-desc">
              Sinta-se à vontade para entrar em contato comigo para parcerias, projetos ou apenas para trocar uma ideia.
            </p>
          </div>
          
          <div className="email-wrapper">
            <div className="email-display">
              <Mail size={20} className="icon-blue" />
              <span>joao_ornellas@estudante.sesisenai.org.br</span>
            </div>
            <a 
              href="mailto:joao_ornellas@estudante.sesisenai.org.br" 
              className="primary-btn"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>
      
      {/* Minimal Footer */}
      <footer className="minimal-footer">
        <p>© 2026 João Pedro Cagliari. Criado com React.</p>
      </footer>

    </div>
  );
};
