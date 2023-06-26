import './styles.css';
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
  return (
    <>
      if a = 5 and b = 2,
      <div>sum: {addResult}</div>
      <div>-:{substResult}</div>
      <div>*:{multiplyResult}</div>
      <div>/:{divideResult}</div>
      <div>modulo:{moduloResult}</div>
      <div>power: {powerResult}</div>
    </>
  );
}
