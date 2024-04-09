import "./mail.css"
import { useState, ChangeEvent, FormEvent } from 'react'
import emailjs from 'emailjs-com'

export default function Mail() {
    const initialFormData = {
        name: '',
        email: '',
        message: ''
    };
    
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await emailjs.send(
                'service_tvo55vg',
                'template_fuw99h6',
                formData,
                '1DnrpizYhFjgQUDfV'
            );
            alert('Correo enviado exitosamente');
            setFormData(initialFormData);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
            alert('Error al enviar el correo');
        }
    };

    return (
        <section className="sect sect-mail">
            <div className="sect-mail-form">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre" name="name" value={formData.name} onChange={handleChange} required/>
                    <input type="email" placeholder="Correo" name="email" value={formData.email} onChange={handleChange} required/>
                    <textarea placeholder="Mensaje" name="message" value={formData.message} onChange={handleChange} rows={8} required></textarea>
                    <button type="submit">ENVIAR</button>
                </form>
            </div>
            <div className="sect-mail-anuncio">
                <span>ESTAS LISTO?</span>
                <span>TRABAJEMOS JUNTOS</span>
                <span>
                    Hagamos que nuestro futuro sea prometedor con proyectos creativos que aporten al avance
                    de la empresa.
                </span>
                <span>Mi correo: 31miguelop31@gmail.com</span>
                <span>Telf: +51 965 062 214</span>
            </div>
        </section>
    )
}
