import React, { useEffect } from 'react';
import './TodoForm.css';

export function SuccessPopup({ title, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="success-popup">
      <p>{title} dodano do listy zadań</p>
    </div>
  );
}
