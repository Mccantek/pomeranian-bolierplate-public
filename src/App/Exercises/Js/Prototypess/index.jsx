import './styles.css';

function Car(make, model) {
  this.make = make;
  this.model = model;
}

Object.prototype.getMake = function () {
  return this.make;
};

Object.prototype.getModel = function () {
  return this.model;
};
function Bike(param) {
  return param;
}

Array.prototype.newArrayMethod = function () {
  console.log('yes, I am a new global method');
};
const exampleArray = [1, 2, 3];

const myCar = new Car('Toyota', 'Camry');
const myCar2 = new Car('Peugeot', 'RCZ');

export const JsPrototypes = () => {
  return (
    <div className="container--js-prototypes">
      Make: {myCar.getMake()}
      Model: {myCar.getModel()}
      Make2: {myCar2.getMake()}
      Model2: {myCar2.getModel()}
      {exampleArray.newArrayMethod()}
    </div>
  );
};
