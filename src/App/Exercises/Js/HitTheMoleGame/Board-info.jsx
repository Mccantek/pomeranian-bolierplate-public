import './style.css';
const BoardInfo = ({ scoreCount, startStopGame, gameStarted, countdown}) => {
  const formattedTime = new Date(countdown * 1000).toISOString().slice(14, 19);
  return (
    <div className="mole-info-container">
      <div>
        <h4>czas do końca</h4>
        <button> {formattedTime} </button>
      </div>
      <div>
        <h4>WYNIK</h4>
        <button> {scoreCount}</button>{' '}
      </div>
      <div>
        <h4>PRZYCISKI STERUJĄCE</h4>

        <button
          onClick={startStopGame}
          style={
            gameStarted ? { backgroundColor: '#E12B1B', color: 'white' } : {}
          }
        >
          {' '}
          {gameStarted ? 'STOP' : 'START'}
        </button>
      </div>
    </div>
  );
};

export default BoardInfo;
