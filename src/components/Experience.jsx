import React from 'react';

class Experience extends React.Component{
    render(){
        return(
            <section className="experience">
                
            <div className="container">
            <h2>Más sobre mi experiencia</h2>
                {this.props.children}
            </div>
            </section>
        );
    }
}

export default Experience;