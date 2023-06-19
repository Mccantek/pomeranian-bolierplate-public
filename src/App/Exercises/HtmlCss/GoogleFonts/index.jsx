import './styles.css';
import { useState } from 'react';

export const GoogleFont = ({ name }) => {
  const [font, setFont] = useState('font-lato');
  const [theme, setTheme] = useState('light-theme');
  const [shouldAnimate, setShouldAnimate] = useState(false);

  const handleFontChange = (newFont) => {
    setShouldAnimate(true);
    setFont(newFont);
    setTimeout(() => {
      setShouldAnimate(false);
    }, 2 * 1000);
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <p
        className={`${font} ${theme}  ${
          shouldAnimate ? 'animation' : ''
        } wrapper`}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa natus
        saepe esse qui at adipisci recusandae error optio voluptatibus, quaerat,
        consequatur, cum eius corrupti excepturi ad quidem provident eum odit!
      </p>

      <button onClick={() => handleFontChange('font-poppins')}>
        Change the font to: Poppins
      </button>
      <button onClick={() => handleFontChange('font-lato')}>
        Change the font to: Lato
      </button>

      <button onClick={() => handleThemeChange('light-theme')}>
        Change the theme to: light
      </button>
      <button onClick={() => handleThemeChange('dark-theme')}>
        Change the theme to: dark
      </button>
    </div>
  );
};

export const Exercise2 = () => {
  return (
    <div className="business-card">
      <section>
        <h2>Masz pytania?</h2>
        <h2>Nasz specjalista chętnie Ci pomoże.</h2>

        <button className="animation-button">po prostu kliknij tutaj</button>
      </section>
      <section className="white">
        <p>Eleonora Frąckiewiczówna</p>
        <p>Specjalista ds. finansowania</p>
      </section>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
        efrackiewoczowna@rtc.pl
      </a>
      <a href="tel:500677543" className="disappear">
        500 677 543
      </a>
    </div>
  );
};

export const Exercise3 = () => {
  return (
    <div className="lists">
      <ol start={2}>
        <li>We will.</li>
        <li>we will.</li>
        <li>rock you!.</li>
        <li>rock you!.</li>
      </ol>
    </div>
  );
};
