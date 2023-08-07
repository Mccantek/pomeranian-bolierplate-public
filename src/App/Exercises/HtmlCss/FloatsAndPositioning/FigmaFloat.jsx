import './styles.css';
import wolf from './snow-wolf.png';

export const FigmaFloat = () => {
  return (
    <>
      <div className="Flexbox-exercise">
        <div className="breadcrumbs"> &lt; BLOG &lt; ĆWICZENIE</div>
        <div className="flex-container">
          <p>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <p className="indented">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="on-the-right">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <p className="gray-background">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
            mauris cursus mattis molestiea iaculis at. Dictum varius duis at
            consectetur lorem donec.{' '}
          </p>
        </div>
        <div className="grid-exercise">
          <p className="pink-background">
            <img src={wolf} alt="cute snow wolf" /> Lorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <button className="small">zapisz na poźniej</button>
        </div>
        <p className="dark-background">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestiea iaculis at. Dictum varius duis at
          consectetur lorem donec.{' '}
        </p>
        <button className="large">Zapisz na później</button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh
          mauris cursus mattis molestie a iaculis at. Dictum varius duis at
          consectetur lorem donec. Sit amet dictum sit amet justo. Fringilla
          phasellus faucibus scelerisque eleifend donec. Elementum pulvinar
          etiam non quam lacus suspendisse faucibus interdum posuere. Arcu
          dictum varius duis at consectetur lorem. Massa ultricies mi quis
          hendrerit.{' '}
        </p>{' '}
        <p>
          Leo vel orci porta non pulvinar neque laoreet. In egestas erat
          imperdiet sed euismod nisi porta lorem. Ut porttitor leo a diam
          sollicitudin tempor id. Tortor at auctor urna nunc id. Gravida quis
          blandit turpis cursus in. Ornare quam viverra orci sagittis eu. Metus
          dictum at tempor commodo ullamcorper a. Vestibulum mattis ullamcorper
          velit sed ullamcorper morbi. Amet massa vitae tortor condimentum
          lacinia quis. Quis enim lobortis scelerisque fermentum dui faucibus in
          ornare. Auctor elit sed vulputate mi.{' '}
        </p>
      </div>
    </>
  );
};
