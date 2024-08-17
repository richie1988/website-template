import React, { useState } from 'react';
import './Dropdown.css';
import PopupOne from './Popup/PopupOne';
import PopupTwo from './Popup/PopupTwo';
import PopupThree from './Popup/PopupThree';

const SelectDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');
    const [popupOpen, setPopupOpen] = useState('');
    

  
    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
        setPopupOpen(item);
    };

    const handleClosePopup =()=> {
        setPopupOpen('');
    }

    return (
        <div className="dropdown">
            <div className="dropdown-selected" onClick={handleDropdownToggle}>
                {selectedItem ? '': ''}
                <h2>{selectedItem? selectedItem : 'Select'}</h2>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    <li className="dropdown-item" onClick={() => handleItemClick('Item 1')}>Item 1</li>
                    <li className="dropdown-item" onClick={() => handleItemClick('Item 2')}>Item 2</li>
                    <li className="dropdown-item" onClick={() => handleItemClick('Item 3')}>Item 3</li>
                </ul>
            )}
            {/* Popup components */}
            <PopupOne isOpen={popupOpen === 'Item 1'} onClose={handleClosePopup} />
            <PopupTwo isOpen={popupOpen === 'Item 2'} onClose={handleClosePopup} />
            <PopupThree isOpen={popupOpen === 'Item 3'} onClose={handleClosePopup} />
        </div>
    );
}

export default SelectDropdown;
