import React from 'react';
import './Popup.css';

const PopupThree = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div className="modal-header">
                <h2>Popup for Item 2</h2>
                <p>This is the content for Item 2.</p>
                </div>
            </div>
        </div>
    );
}

export default PopupThree;
