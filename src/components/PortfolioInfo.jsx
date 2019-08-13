import React from 'react';
import '../styles/PortfolioInfoStyles.css';

class PortfolioInfo extends React.Component{
    render(){
        return(
            <div className="Project">
                <div className="Project__container">
                <article className="Project__article">
                    <div className="Project__details">
                        <h3 className="Project__title">Academia Geek</h3>
                        <h6 className="Project__course">Agile Innova</h6>
                        <p className="Project__date"><small><strong>Fecha</strong> 01/01/2019</small></p>
                        <p className="Project__url"><small><strong>Puedes verlo en:</strong> <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a></small></p>
                        <p className="Project__description">Academia Geek es el resultado de una alianza estratégica entre,
                            Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias
                            y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu 
                            camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.
                        </p>
                    </div>
                    <figure className="Project__imageContainer">
                        <img className="Project__image" src="images/academia-geek.jpg" width="500" height="400" alt="" />
                    </figure> 
                </article>
                <article className="Project__article">
                        <div className="Project__details">
                            <h3 className="Project__title">Academia Geek</h3>
                            <h6 className="Project__course">Agile Innova</h6>
                            <p className="Project__date"><small><strong>Fecha</strong> 01/01/2019</small></p>
                            <p className="Project__url"><small><strong>Puedes verlo en:</strong> <a href="https://makaia.org/es/academiageek/" target="_blank">www.makaia.org/es/academiageek/</a></small></p>
                            <p className="Project__description">Academia Geek es el resultado de una alianza estratégica entre,
                                Agile Innova, Makia, y E-volution con el fin de ayudarte en adquirir competencias
                                y habilidades en desarrollo junior en aplicaciones webpreparándote así para comenzar tu 
                                camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.
                            </p>
                        </div>
                        <figure className="Project__imageContainer">
                                <img className="Project__image" src="images/academia-geek.jpg" width="500" height="400" alt="" />
                        </figure> 
                </article>
                </div>
            </div>
        );
    }
}

export default PortfolioInfo;