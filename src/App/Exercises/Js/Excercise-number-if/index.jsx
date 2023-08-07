import './styles.css';
import { IfStatements } from './ifStatements';
export function Exercise() {
  let a = 5;
  let b = 2;
  const addResult = a + b;
  const substResult = a - b;
  const multiplyResult = a * b;
  const divideResult = a / b;
  const moduloResult = a % b;
  const powerResult = a ** b;

  a += 1;
  a -= 1;

  const result1 = a > b;
  const result2 = a < b;
  const result3 = a <= b;
  const result4 = a >= b;
  const result5 = a === b;

  console.log('result', result1);
  console.log('result', result2);
  console.log('result', result3);
  console.log('result', result4);
  console.log('result', result5);

  // -------------------  IF ---------------
  let c = 'a123b';
  console.log(isNaN(c), 'is Nan?');

  const parseINT = parseInt('5');
  const parseINT_1 = parseInt(5.5);
  const parseINT_2 = parseInt('a123b');
  console.log(parseINT, 'parseInt');
  console.log(parseINT_1, 'parseINT_1');
  console.log(parseINT_2, 'parseINT_2');

  console.log(Number.isInteger(a), 'is a Intiger?');

  console.log(Math.round(5.6), 'Math round');
  console.log(Math.ceil(1.00001), 'Math round to the next higher integer');
  console.log(Math.floor(1.999999999999), 'Math round to the previous integer');
  console.log(Math.sqrt(1.999999999999), 'Math square');

  return (
    <>
      if a = 5 and b = 2,
      <div>sum: {addResult}</div>
      <div>-:{substResult}</div>
      <div>*:{multiplyResult}</div>
      <div>/:{divideResult}</div>
      <div>modulo:{moduloResult}</div>
      <div>power: {powerResult}</div>
       < IfStatements />
    </>
  );
}
