import './Main.css'
import Typewriter from 'typewriter-effect'
import { FaFacebook , FaLinkedin, FaGithub, FaRegUser } from "react-icons/fa"
import { FaCode } from "react-icons/fa6"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Main() {

  return (
    <>
      <div className='main-sections'>
          <section className="main-banner" id='inicio'>
            <div className='banner-tittle-section'>
              <span>MIGUEL JESUS CARLOS MORE</span>
              <Typewriter
                options={{
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("PROGRAMADOR JUNIOR FULL STACK")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("JUNIOR FULL STACK DEVELOPER")
                    .deleteAll()
                    .start()
                }}
              />
            </div>
            <div className='banner-body-section'>
              <p>
                Programador full stack con poca experiencia pero apasionado por el mundo de la programación buscando ser
                competente en el area demostrando mis ganas de aprender y de contribuir al desarrollo de paginas y aplicaciones.
              </p>
            </div>
            <div className='banner-footer-section'>
              <ul>
                <li><a href="https://www.linkedin.com/in/miguel-jesus-carlos-more-8265312b2/" target="_blank"><FaLinkedin /> <span>LinkedIn</span></a></li>
                <li><a href="https://www.facebook.com/miguel.carlosmore.5/" target="_blank"><FaFacebook  /> <span>Facebook</span></a></li>
                <li><a href="https://github.com/Migueljcm16" target="_blank"><FaGithub  /> <span>GitHub</span></a></li>
              </ul>
            </div>
          </section>
          <section className='main-info' id='acercaDeMi'>
              <div className='info-tittle-section'><FaRegUser/><span>Sobre mí</span></div>
              <div className='info-body-section'>
                <p>
                  Me llamo Miguel Jesús, tengo 19 años y actualmente me encuentro viviendo en <strong>Perú en
                  la ciudad de Lima.</strong> Empece a conocer el mundo de la programación desde hace 3 años
                  cuando recien comence a estudiar la carrera de <strong>Desarrollo de Software</strong>
                </p>
              </div>
              <div className='info-body-section'>
                <p>
                  Durante el transcurso de los años <strong>he logrado aprender y conocer diferentes lenguajes
                  de programación unos más complejos que otros,</strong> dominar un lenguaje lleva meses
                  hasta años pero esa dificultad se convierte en una motivación para no rendirme.
                </p>
              </div>
              <div className='info-body-section'>
                <p>
                  <strong>Ademas de desarrollarme como programador tambien me he desarrollado como persona</strong> aprendiendo a 
                  convivir, trabajar en grupo y compartir momentos de felicidad con mis compañeros los cuales
                  espero que les vaya bien en el area que se desarrollen.
                </p>
              </div>
          </section>
          <section className='main-info' id='proyectos'>
              <div className='info-tittle-section'><FaCode/><span>Proyectos</span></div>
              <Carousel showIndicators={false}>
                <div>
                    <img src="./assets/sistema-scanner/scanner-1.png" />
                </div>
                <div>
                    <img src="./src/assets/sistema-scanner/scanner-2.png" />
                </div>
                <div>
                    <img src="./assets/sistema-scanner/scanner-3.png" />
                </div>
                <div>
                    <img src="./assets/sistema-scanner/scanner-4.png" />
                </div>
                <div>
                    <img src="./assets/sistema-scanner/scanner-5.png" />
                </div>
                <div>
                    <img src="./assets/sistema-scanner/scanner-6.png" />
                </div>
              </Carousel>
          </section>
          <br />
          <br />
      </div>
    </>
  )
}
