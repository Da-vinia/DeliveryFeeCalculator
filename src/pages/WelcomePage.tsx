import React, {useState, useEffect} from "react";
import '../styles/WelcomePage.css';

interface WelcomePageProps {
    onWelcomeComplete: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onWelcomeComplete }) => {
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowText(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    const handleAnimationEnd = () => {
        onWelcomeComplete();
    };

    return (
        <div className="container">
            <div className={`welcome-page ${showText ? 'show-text' : ''}`} onAnimationEnd={handleAnimationEnd}>
                <h1>Wolt App | Engineering Internship 2024</h1>
                <h2>Davinia Tosco Abreu</h2>
            </div>
        </div>
    );

};

export default WelcomePage;