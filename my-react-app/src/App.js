import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element } from 'react-scroll';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {

  const CustomArrow = ({ onClick, icon }) => (
    <div className="custom-arrow" onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
  return (
    <div className="App">
      <nav className="navbar"> {/* Navbar */}
        <div className="navbar-content">
          <div className="brand" onClick={() => scroll.scrollToTop()}>
            K-cultura
          </div>
          <div className="navbar-links">
            <a href="https://jkcultura.wordpress.com/">BLOG</a>
            <ScrollLink to="sobrenos" smooth={true} duration={500}>
              SOBRE NOS
            </ScrollLink>
          </div>
        </div>
      </nav>
      <div className="carousel">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
      >
          <div>
            <img src="https://www.yesstyle.com/blog/wp-content/uploads/2020/05/married_x.webp" alt="Carousel 1" />
          </div>
          <div>
            <img src="https://occ-0-2773-1001.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXoMuByYctrM1_ze-IPO4lijunahIUD0gfciKx3IPExP9XyLDMAPx-Ms1hkCiFGaIPIFlQQFToX679KSr0n__mbaAz9d54pYi3mZ.jpg?r=cbd" alt="Carousel 2" />
          </div>
          <div>
            <img src="https://occ-0-993-2568.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVViXo61ktgv3Texy1dw7g9TCTXVb3gFyP0975LjpVlLzEOWtP0WkWkyk1b8lpn8prjhM874wqOOaJ_cQL1HGteB7ZK7HV2xgA8d.jpg?r=d04" alt="Carousel 3" />
          </div>
        </Carousel>
      </div>
      <Element name="sobrenos">
        <div className="sobrenos">
          <div className="titulo">Sobre Nós</div>
          <div className="texto">
            Bem-vindo ao K-Cultura, um canal dedicado aos amantes do drama coreano. Aqui você encontrará artigos sobre sinopses, detalhes de elenco e outras informações sobre todas as séries de TV de drama coreano.

            Se você é apaixonado por dramas coreanos, este é o lugar certo para você. Nós fornecemos notícias atualizadas sobre o mundo do K-Pop, vídeos de dramas coreanos, galeria de fotos de atores coreanos e as últimas notícias sobre celebridades coreanas.

            Fique por dentro dos lançamentos mais recentes de dramas coreanos, acompanhe as novidades do elenco de K-Dramas, assista aos trailers, leia críticas e muito mais.

            Junte-se a nós nessa jornada emocionante pelo mundo dos dramas coreanos!
          </div>
          <button className="button" onClick={() => window.open('https://www.youtube.com/@k-cultura', '_blank')}>
            Visite nosso canal no YouTube
          </button>
        </div>
      </Element>

      <footer className="footer"> {/* Footer */}
        <div className="social-media-links">
          <a href="https://www.youtube.com/@k-cultura" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://www.instagram.com/kculturakpop/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100087848446143" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
