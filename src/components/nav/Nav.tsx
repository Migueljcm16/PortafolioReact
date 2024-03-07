import './Nav.css'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink("inicio");

    const handleScroll = () => {
      const sections = document.querySelectorAll('.main-sections section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
        <nav>
          <ul>
            <li><a href="#inicio" className={activeLink === 'inicio' ? 'active' : ''}>INICIO</a></li>
            <li><a href="#acercaDeMi" className={activeLink === 'acercaDeMi' ? 'active' : ''}>SOBRE MI</a></li>
            <li><a href="#proyectos" className={activeLink === 'proyectos' ? 'active' : ''}>PROYECTOS</a></li>
            <li><a href="#contacto" className={activeLink === 'contacto' ? 'active' : ''}>CONTACTO</a></li>
          </ul>
        </nav>
    </>
  )
}
