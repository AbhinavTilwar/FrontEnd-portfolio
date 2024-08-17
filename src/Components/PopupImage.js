import React, { useState, useEffect } from 'react';
import './PopupImage.css';
import wizard from '../Images/befana-flat-design.png';
const PopupImage = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-image">
          <img src={wizard} alt="Popup" />
        </div>
      )}
    </>
  );
};

export default PopupImage;
