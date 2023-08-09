import React, { useState, useEffect } from 'react';
import './style.css';
import cookies from './cookie.svg';

const Cookies = () => {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const hideCookies = document.cookie.includes('hideCookies=true');
    setHidden(hideCookies);
  }, []);

  const handleAgreement = () => {
    setHidden(true);
    document.cookie = 'hideCookies=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
  };

  const handleAgreementCustomization = () => {
    // Implement your logic for handling agreement customization here
  };

  return (
    <>
      {!hidden && (
        <div className={`cookies-agreement ${hidden ? 'hidden' : ''}`}>
          <div className="left">
            <div className="text-wrapper">
              <img className="cookies-icon" src={cookies} alt="cookies icon" />
              <p>
                Pozwól na pliki cookies. Nasza strona korzysta z ciasteczek,
                które umożliwiają poprawne działanie strony i pomagają nam
                świadczyć usługi na najwyższym poziomie. Możesz zaakceptować
                wykorzystanie przez nas wszystkich tych plików i przejść do
                strony lub dostosować użycie do swoich referencji. W tym celu
                kliknij przycisk po prawej stronie “dopasuj zgody”, aby
                następnie wybrać te które odpowiadają Twoim indywidualnym
                preferencjom.
              </p>
            </div>
            <div className="button-wrapper">
              <button className="agree" onClick={handleAgreement}>
                w porządku
              </button>
              <button
                className="customize"
                onClick={handleAgreementCustomization}
              >
                Dopasuj zgody
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cookies;
