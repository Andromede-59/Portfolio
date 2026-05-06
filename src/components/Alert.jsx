import React, { useState, useEffect } from "react";
import '../css/Alert.css';

const Alert = ({ type, message }) => {
    const [visible, setVisible] = useState(true);
    const [animationClass, setAnimationClass] = useState('slide-in-right');

    useEffect(() => {
        const hideTimer = setTimeout(() => {
            setAnimationClass('slide-out-right');
        }, 3200);

        const removeTimer = setTimeout(() => {
            setVisible(false);
        }, 3700);

        return () => {
            clearTimeout(hideTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (!visible) return null;

    const title = type === 'ERROR' ? "Erreur lors de l'envoi" : "Message envoyé avec succès";
    const icon = type === 'ERROR' ? (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="#FEE2E2" />
            <path d="M15 9L9 15" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 9L15 15" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
        </svg>
    ) : (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="#DCFCE7" />
            <path d="M8.5 12.5L10.9 15L15.5 9.5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    return (
        <div className={`alert-container ${type === 'ERROR' ? 'alert-danger' : 'alert-success'} ${animationClass}`} role="alert">
            <div className="alert-icon">{icon}</div>
            <div className="alert-content">
                <p className="alert-title">{title}</p>
                <p className="alert-message">{message || title}</p>
            </div>
        </div>
    );
}

export default Alert;