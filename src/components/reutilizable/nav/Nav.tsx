import "./nav.css"
import { useEffect } from "react";
import { IoBarcodeSharp } from "react-icons/io5"

export default function Nav() {
    useEffect(() => {
        const handleAnchorClick = (event) => {
            const targetId = event.currentTarget.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                event.preventDefault();
                const offset = -50; // Ajusta el desplazamiento aquí
                const targetPosition = targetElement.offsetTop + offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        };

        const anchorElements = document.querySelectorAll("a[href^='#']");
        anchorElements.forEach(anchor => {
            anchor.addEventListener("click", handleAnchorClick);
        });

        return () => {
            anchorElements.forEach(anchor => {
                anchor.removeEventListener("click", handleAnchorClick);
            });
        };
    }, []);

    return (
        <nav>
            <div>
                <IoBarcodeSharp/>
                <span>MIGUEL JESUS</span>
            </div>
            <div>
                <a href="#experiencia">EXPERIENCIA</a>
                <a href="#proyectos">PROYECTOS</a>
                <a href="mailto:31miguelop31@gmail.com">CONTACTO</a>
            </div>
        </nav>
    )
}