import React,{useEffect} from 'react';
import './Popup.css';

const PopupThree = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (!event.target.closest('.modal-content')) {
                onClose();
            }
        };

        // Use a timeout to avoid closing the modal immediately after opening
        const timeoutId = setTimeout(() => {
            window.addEventListener('click', handleClickOutside);
        }, 0);

        return () => {
            clearTimeout(timeoutId); // Clear the timeout if the component unmounts before the timeout is executed
            window.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="modal-header">
                <h2>Popup for Item 1</h2>
                <p>This is the content for Item 1.</p>
                </div>
            </div>
        </div>
    );
}

export default PopupThree;
