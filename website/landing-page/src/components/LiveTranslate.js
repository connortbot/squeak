import React, { useState, useEffect } from 'react';
import './LiveTranslate.css';

const LiveTranslate = () => {
    const words = [
        { spanish: "Con", english: "With" },
        { spanish: "Squeak,", english: "Squeak," },
        { spanish: "puedes", english: "you can" },
        { spanish: "aprender", english: "learn" },
        { spanish: "el", english: "the" },
        { spanish: "idioma", english: "language" },
        { spanish: "de", english: "of" },
        { spanish: "tu", english: "your" },
        { spanish: "elección,", english: "choice," },
        { spanish: "a", english: "at" },
        { spanish: "tu", english: "your" },
        { spanish: "ritmo,", english: "pace," },
        { spanish: "a", english: "at" },
        { spanish: "tu", english: "your" },
        { spanish: "nivel,", english: "level," },
        { spanish: "con", english: "with" },
        { spanish: "herramientas", english: "tools" },
        { spanish: "como", english: "such as" },
        { spanish: "traducción", english: "live translate" }
    ];
    
    

    const [translatedWords, setTranslatedWords] = useState(Array(words.length).fill(false));
    const [allTranslated, setAllTranslated] = useState(false);

    useEffect(() => {
        if (translatedWords.every((translated) => translated)) {
            setAllTranslated(true);
        } else {
            setAllTranslated(false);
        }
    }, [translatedWords]);

    const handleHover = (index) => {
        setTranslatedWords((prev) => {
            const newTranslations = [...prev];
            newTranslations[index] = true;
            return newTranslations;
        });
    };

    const handleMouseLeave = () => {
        if (allTranslated) {
            setTimeout(() => {
                revertToSpanish();
            }, 3000);
        }
    };

    const revertToSpanish = () => {
        words.forEach((_, index) => {
            setTimeout(() => {
                setTranslatedWords((prev) => {
                    const newTranslations = [...prev];
                    newTranslations[index] = false;
                    return newTranslations;
                });
            }, index * 150); // Overlapping transition effect
        });
    };

    return (
        <section className="live-translate">
            <div className="instruction">Hover over a word to translate</div>
            <div className={`content ${allTranslated ? 'translated' : ''}`} onMouseLeave={handleMouseLeave}>
                <p className="sentence">
                    {words.map((word, index) => (
                        <span
                            key={index}
                            className={`translatable-word ${translatedWords[index] ? 'translated' : ''}`}
                            onMouseEnter={() => handleHover(index)}
                        >
                            {translatedWords[index] ? word.english : word.spanish}
                        </span>
                    ))}
                </p>
            </div>
        </section>
    );
};

export default LiveTranslate;
