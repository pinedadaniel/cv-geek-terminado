import React from 'react';
import '../styles/ContactStyles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contact extends React.Component{
    render(){
        return(
            <section id="contacto" className="Contact">
            <div className="container">
                <div className="Contact__container">
                <form action="/suscripcion/" className="Contact__form-email">
                    <h3>Creamos algo juntos?</h3>
                    <input type="email" placeholder="Dejame tu email" id="email" /><br/>
                    <button>Enviar</button>
                </form>
                <div className="Contact__social">
                    <a href="#" className="Contact__social-link twitter"><FontAwesomeIcon icon={['fab', 'twitter']} size="4x" color="black" /></a>
                    <a href="#" className="Contact__social-link facebook"><FontAwesomeIcon icon={['fab', 'facebook']} size="4x" color="black" /></a>
                    <a href="#" className="Contact__social-link instagram"><FontAwesomeIcon icon={['fab', 'instagram']} size="4x" color="black" /></a>
                    <a href="#" className="Contact__social-link github"><FontAwesomeIcon icon={['fab', 'github']} size="4x" color="black" /></a>
                </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Contact;