import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Project from './Project';

const Containers:React.FC = (props) => {
    
    return (
        <div className="App">
            <header><Navbar /></header>
            <section id="HOME"><Home/></section>
            <section id="ABOUT"><About/></section>
            <section id="PORTFOLIO"><Portfolio /></section>
            <section id="PROJECT"><Project /></section>
        </div>
    );
}

export default Containers;
