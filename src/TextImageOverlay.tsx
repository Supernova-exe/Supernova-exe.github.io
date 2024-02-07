import React, { ReactNode } from 'react';
import './TextImageOverlay.css';

interface ImageWithTextProps {
    imageUrl: string;
    alt : string;
    children: ReactNode;
}

const TextImageOverlay: React.FC<ImageWithTextProps> = ({ imageUrl,alt, children }) => {
    return (
        <div className="image-container">
            <img src={imageUrl} alt={alt} />
            <div className="overlay-content">
                {children}
            </div>
        </div>
    );
}

export default TextImageOverlay;
