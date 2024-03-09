import './Nav.css'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [activeLink, setActiveLink] = useState('');
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    setActiveLink('inicio');

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      sections.forEach(section => {
        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveLink(section.id);
        }
      });

      if (scrollPosition > 0 && !scrolling) {
        setScrolling(true);
      } else if (scrollPosition === 0 && scrolling) {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolling]);

  return (
    <>
        <nav className={scrolling ? 'active-nav' : ''}>
          <ul>
            <li><a href="#inicio" className={activeLink === 'inicio' ? 'active' : ''}>INICIO</a></li>
            <li><a href="#acercaDeMi" className={activeLink === 'acercaDeMi' ? 'active' : ''}>SOBRE MI</a></li>
            <li><a href="#proyectos" className={activeLink === 'proyectos' ? 'active' : ''}>PROYECTOS</a></li>
            <li><a href="mailto:31miguelop31@gmail.com">CONTACTO</a></li>
          </ul>
        </nav>
    </>
  )
}
