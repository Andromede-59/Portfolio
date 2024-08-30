import React, { useState, useEffect } from "react";
import './Alert.css'; // Import custom CSS for positioning and animation
import { useTranslation } from "react-i18next";

const Alert = ({ type, message }) => {
    const [showAlert, setShowAlert] = useState(true);
    const [animationClass, setAnimationClass] = useState('fade-in');
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimationClass('fade-out');
            setTimeout(() => setShowAlert(false), 500);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!showAlert) return null;

    return (
        <div className={`alert ${type === 'ERROR' ? 'alert-danger' : 'alert-success'} alert-dismissible ${animationClass} fixed top-0 end-0 m-3 alert-z-index p-4 bg-slate-100 rounded-md`} role="alert">
            <div className="flex align-items-center">
                <div className="me-3 img-width">
                    {type === 'ERROR' ? (
                        <img src='https://cdn.const-dev.fr/images/error.png' alt='error' />
                    ) : (
                        <img src='https://cdn.const-dev.fr/images/valide.png' alt='success' />
                    )}
                </div>
                <div>
                    {type === 'ERROR' ? (
                        <p className="mb-0 text-danger"><b>{t("alert.error")}</b></p>
                    ) : (
                        <p className="mb-0 text-success"><b>{t("alert.success")}</b></p>
                    )}
                    <p className="mb-0">{message}</p>
                </div>
            </div>
        </div>
    );
}

export default Alert;