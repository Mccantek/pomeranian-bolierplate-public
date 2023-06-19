import './styles.css';

export const CSSBoxModel = () => {
  return (
    <>
      <div className="parent-box-model">
        <p className="class-box-model">
          1 Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
        <p className="class-box-model">
          2 Ćwiczenia z HTML & CSS - CSSBoxModel
        </p>
      </div>
      <p id="unique-id-box-model">3 Ćwiczenia z HTML & CSS - CSSBoxModel</p>

      <div className="test-tags">
        <a href="">Kotwica</a>
        <input type="text" />
        <img src="" alt="" />
        <h5>heading number 5!</h5>
      </div>

      <div className="display-css-test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="display-css-test">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
        incidunt.
      </div>

      {/* box sizing vs border box */}
      <div className="box-sizing-container">
        <div className="content-box-example">1</div>

        <div className="border-box-example">2</div>
      </div>

      {/* css property overflow  */}

      <div className="units-container">
        <div className="units-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          doloribus ratione excepturi officia aliquam itaque sint suscipit
          distinctio cum maiores corporis, ipsam enim ullam laboriosam animi
          laborum laudantium eligendi. Omnis! 
        </div>

        {/* Jednostki długości:
        px (piksele): najpopularniejsza jednostka, oznacza liczbę pikseli na ekranie.
        % (procent): odnosi się do procentowej wartości względem wartości rodzica.
        em: wielkość bazowa jest równa rozmiarowi czcionki elementu rodzica.
        rem: wielkość bazowa jest równa rozmiarowi czcionki elementu korzenia (czyli <html>).
        vw (viewport width): 1% szerokości widoku.
        vh (viewport height): 1% wysokości widoku.

    Jednostki czasu:
        s (sekundy): na przykład 0.5s oznacza pół sekundy.
        ms (milisekundy): na przykład 500ms oznacza pół sekundy.

    Jednostki kątów:
        deg (stopnie): na przykład 45deg oznacza 45 stopni.
        rad (radiany): na przykład 0.5rad oznacza około 28,65 stopnia.

    Jednostki kolorów:
        rgb (czerwony, zielony, niebieski): na przykład rgb(255, 0, 0) oznacza czerwony.
        hex: na przykład #FF0000 oznacza czerwony. */}
      </div>
    </>
  );
};
