import React from 'react';
import '../styles/FooterStyles.css';

class Footer extends React.Component{
    render(){
        return(
            <footer className="Footer">
            <div className="container">
                <div className="Footer__container">
                <div>
                    <p>Fundamentos en desarrollo web 2019 </p>  
                </div>
                <div>
                  <p>With love by <a className="link" href="https://makaia.org/es/inicio/" target="_blank">Makaia.org</a> </p>
                </div>
                </div>
            </div>
        </footer>
        );
    }
}

export default Footer;