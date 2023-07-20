import './styles.css';

export const JsThis = () => {
  // przykład 1 - wywołanie w kontekście globalnym

  console.log(this); //this odnosi się do globalnego obiektu (w przeglądarce Window w Vanilla JS)

  // przykłąd 2 - wywołąnie w kontekście funkcji

  console.log(this);
  function thisContext() {
    return console.log(this);
  }
  thisContext();

  // przykład 3 - wywołanie w kontekście obiektu

  const person = {
    name: 'Kot',
    sayHello() {
      console.log(this.name);
    },
    typicalJSFunction: function () {
      console.log(this.name);
    },
    arrowJSFunction: () => console.log(this?.name),
  };
  person.sayHello(); // zwróci wartość property 'name' = > "Kot"
  person.typicalJSFunction(); // zwróci wartość property 'name' = > "Kot"
  person.arrowJSFunction(); // undefined

  //bind function example
  const arrowFunctionThis = person.arrowJSFunction;
  const callArrowFunction = arrowFunctionThis.bind(person); // bind() nie ogarnia this w przypadku arrow function
  // przykład 4 - wywołanie w klasie

  class Car {
    constructor(make) {
      this.make = make;
    }
    getMake() {
      console.log(this.make);
    }
  }

  const myCar = new Car('Ferrari');
  myCar.getMake();

  ////// Call() function example implementation

  const person2 = {
    name: 'Koteł',
    sayHello() {
      console.log(`My name is: ${this.name}`);
    },
  };
  const personThree = {
    name: 'zczxczx',
  };
  person2.sayHello.call(personThree); ///// call pozwala na użycie funkcji obiektu1 z obiektem2
  ///////////
  /// apply function implementation

  function introduce(age) {
    return `My name is ${this.name} and I'm ${age} YO`;
  }
  console.log(introduce.apply(personThree, [25]));

  return (
    <div className="container--js-this">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam culpa
      aperiam doloremque velit vero iste sapiente porro temporibus aut sunt.
      Quod vitae temporibus exercitationem fugiat eius facere velit labore
      veniam.
      <button onClick={callArrowFunction}>click!</button>
    </div>
  );
};
