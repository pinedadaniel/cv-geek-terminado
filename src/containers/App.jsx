import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import PortfolioInfo from '../components/PortfolioInfo';
import Experience from '../components/Experience';
import ExperienceInfo from '../components/ExperienceInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


const App = () => {
    return(
        <React.Fragment>
            <Header />
            <Portfolio>
                <PortfolioInfo />
            </Portfolio>
            <Experience>
                <ExperienceInfo />
            </Experience>
            <Contact />
            <Footer />
        </React.Fragment>
    );
}

export default App;