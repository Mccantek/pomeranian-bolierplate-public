import fire from './fire.jpg';
const Floats = () => {
  return (
    <>
      {' '}
      <img src={fire} alt="fire so cool" style={{ float: 'left' }} />
      <div
        style={{
          width: '200px',
          height: '500px',
          background: 'gray',
          float: 'right',
        }}
      ></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
        officia qui reprehenderit unde reiciendis tempore laudantium tenetur
        neque incidunt, quisquam, veniam quam ratione iste corrupti ea ad
        cupiditate soluta dolor?
      </p>
    </>
  );
};

export default Floats;
