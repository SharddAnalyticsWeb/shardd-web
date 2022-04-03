import React from 'react'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [useStyle, setStyle] = useState(false);
    const handleScroll = () =>{
        if(window.scrollY >= 100){
            setStyle(true);
        }
        else{
            setStyle(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    return (
        <nav style={useStyle ? {height: '3.5rem', background: 'hsla(0, 0%, 90%, 0.65)'} : null}>
            <h2>SHARDD</h2>
            <ul>
                <li><a href='#services'>Services</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}