import React from 'react';

class Portfolio extends React.Component{
    render(){
        return(
            <section id="portafolio" className="portfolio">
                
            <div className="container">
            <h2>Portafolio (Proyectos Destacados)</h2>
                {this.props.children}
            </div>
            </section>
        );
    }
}

export default Portfolio;