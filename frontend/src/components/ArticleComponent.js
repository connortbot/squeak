import React, { useState } from 'react';
import './ArticleComponent.css';
import NextPreviousButton from './NextPreviousButton';
import heartIcon from '../assets/vectors/heart.svg';
import commentIcon from '../assets/vectors/comment.svg';
import shareIcon from '../assets/vectors/share.svg';
import saveIcon from '../assets/vectors/save.svg';

const sourceImages = {
    'BBC News': require('../assets/sources/bbc.png'),
    'Business Insider': require('../assets/sources/business-insider.png'),
    'Time': require('../assets/sources/time.png'),
    // Add other sources as needed
};

const ArticleComponent = ({ article }) => {
    const [lineIndex, setLineIndex] = useState(0);
    const linesPerPage = 12;

    // Retrieve message from chat_history and parse language, level, and topic
    const parseMessage = (chatHistory = []) => {
        console.log("chatHistory data:", chatHistory); // Log to check if chatHistory is available
    
        if (!Array.isArray(chatHistory)) {
            console.warn("chatHistory is not an array or is undefined");
            return { language: 'Not available', level: 'Not available', topic: 'Not available' };
        }
    
        const userMessage = chatHistory.find(entry => entry.role === 'USER')?.message || '';
        console.log("Extracted userMessage:", userMessage); // Log to check extracted user message
    
        const languageMatch = userMessage.match(/LANGUAGE:\s*([^\n]+)/i);
        const levelMatch = userMessage.match(/CEFR:\s*([^\n]+)/i);
        const topicMatch = userMessage.match(/TOPIC:\s*([^\n]+)/i);
    
        return {
            language: languageMatch ? languageMatch[1] : 'Not available',
            level: levelMatch ? levelMatch[1] : 'Not available',
            topic: topicMatch ? topicMatch[1] : 'Not available'
        };
    };
    

    // Extracted data from message in chat_history
    const { language, level, topic } = parseMessage(article.chat_history);
    const textLines = article.text.split('\n').map(line => {
        if (line.startsWith('#')) {
            return { text: line.slice(1).trim(), bold: true };
        }
        return { text: line, bold: false };
    });

    const handleNext = () => {
        if (lineIndex + linesPerPage < textLines.length) {
            setLineIndex(prevIndex => prevIndex + linesPerPage);
        }
    };

    const handlePrevious = () => {
        if (lineIndex > 0) {
            setLineIndex(prevIndex => prevIndex - linesPerPage);
        }
    };

    return (
        <div className="articleContainer">
            <h2 className="title">{article.title}</h2>
            <div className="sourceContainer">
                <span className="sourcesLabel">Sources:</span>
                {article.documents.map((source, index) => (
                    <a href={source.url} key={index} target="_blank" rel="noopener noreferrer" className="sourceLink">
                        <img src={sourceImages[source.title]} alt={source.title} className="sourceImage" />
                        {source.title}
                    </a>
                ))}
            </div>
            <div className="contentContainer">
                {/* Left Column: Icons */}
                <div className="actionButtons">
                    <img src={heartIcon} alt="Heart" className="icon" />
                    <img src={commentIcon} alt="Comment" className="icon" />
                    <img src={shareIcon} alt="Share" className="icon" />
                    <img src={saveIcon} alt="Save" className="icon" />
                </div>

                {/* Center Column: Text */}
                <div className="textContainer">
                    {textLines.slice(lineIndex, lineIndex + linesPerPage).map((line, index) => (
                        <p key={index} className={`textLine ${line.bold ? 'boldText' : ''}`}>
                            {line.text}
                        </p>
                    ))}
                </div>

                {/* Right Column: Current Level, Topic, and Language */}
                <div className="sidebar">
                    <div className="currentLevel">
                        <p><strong>Level:</strong> {level}</p>
                        <p><strong>Topic:</strong> {topic}</p>
                        <p><strong>Language:</strong> {language}</p>
                    </div>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="navigation">
                <NextPreviousButton direction="previous" onClick={handlePrevious} />
                <NextPreviousButton direction="next" onClick={handleNext} />
            </div>
        </div>
    );
};

export default ArticleComponent;
