import './style.css';

const MoleGameSettings = ({
  gameTime,
  moleCount,
  setGameTime,
  setMoleCount,
  startStopGame,
  gameStarted,
  scoreCount,
  spentTime,
}) => {
  const gameTimeOption = [
    { label: '1 minuta', timeValue: 1 * 60 * 1000 },

    { label: '2 minuty', timeValue: 2 * 60 * 1000 },

    { label: '3 minuty', timeValue: 3 * 60 * 1000 },
  ];

  const moleCountOption = [
    { label: '1 kret' },

    { label: '2 krety' },

    { label: '3 krety' },
  ];

  return (
    <>
      {typeof scoreCount === 'number' ? (
        <>
          {' '}
          <h2>
            {' '}
            Gratulacje! Twój wynik to {scoreCount} złapanych kretów w czasie{' '}
            {spentTime} sekund!
          </h2>{' '}
          <h5>
            a jak masz poniżej 20 kretów, gramatyka to twój najmniejszy problem
          </h5>
        </>
      ) : null}

      <div className="moleGameOptions">
        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>CZAS GRY</h4>

              {gameTimeOption.map(({ label, timeValue }) => (
                <button
                  className={gameTime === timeValue ? 'activeButton' : ''}
                  onClick={() => setGameTime(timeValue)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>LICZBA KRETÓW</h4>

              {moleCountOption.map(({ label }) => (
                <button
                  className={
                    moleCount === Number(label[0]) ? 'activeButton' : ''
                  }
                  onClick={() => setMoleCount(Number(label[0]))}
                >
                  {label}
                </button>
              ))}
            </div>

            <div>
              <h4>PRZYCISKI STERUJĄCE</h4>

              <button onClick={startStopGame}>
                {' '}
                {gameStarted ? 'STOP' : 'START'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoleGameSettings;
