import '../PortfolioStyles.css';
import { useState } from 'react';

const About = () => {
    const [showAbout, setShowAbout] = useState(true);

    return (
        <section>
            {showAbout && (
            <>
            <h2>About Me</h2>
            <p>I am a passionate Web Developer with a love for creating dynamic and user-friendly websites. Welcome to my portfolio!</p>
            </>
            )}
            <button onClick={() => setShowAbout(!showAbout)}>
                {showAbout ? 'Hide About' : 'Show About'}
            </button>
        </section>
    );
};

export default About;