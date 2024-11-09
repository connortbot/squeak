import React from 'react';
import './TranslationCard.css';
import flagSrc from '../assets/flags/MX.png';

const TranslationCard = ({ data }) => {
    const {
        word,
        wordTranslated,
        originalSentence,
        translatedSentence,
        languageCode
    } = data;

    // Flag asset path
    //const flagSrc = `../assets/${languageCode}.png`;

    // Function to highlight the word in a sentence
    const highlightWord = (sentence, wordToHighlight) => {
        const parts = sentence.split(new RegExp(`(${wordToHighlight})`, 'gi'));
        return parts.map((part, index) =>
            part.toLowerCase() === wordToHighlight.toLowerCase() ? (
                <span key={index} className="highlighted-word">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="translation-card">
            <img src={flagSrc} alt="Language Flag" className="translation-flag" />
            <div className="translation-text">
                <div>
                    <h2 className="translation-word">{word}</h2>
                    <h2 className="translation-word-translated">{wordTranslated}</h2>
                </div>
                <hr className="translation-divider" />
                <div>
                    <h3 className="translation-section-title">Original</h3>
                    <p className="translation-sentence">{highlightWord(originalSentence, word)}</p>
                </div>
                <div>
                    <h3 className="translation-section-title">Translated</h3>
                    <p className="translation-sentence">{highlightWord(translatedSentence, wordTranslated)}</p>
                </div>
            </div>
        </div>
    );
};

export default TranslationCard;
