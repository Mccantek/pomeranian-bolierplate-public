export function IfStatements() {
  const iAmMan = true;
  const a = 10;

  if (iAmMan) {
    console.log('You are a man');
  } else {
    console.log('You are not a man');
  }

  if (a < 10 || iAmMan) {
    console.log('a < 10');
  } else if (a > 10) {
    console.log('a  10');
  } else {
    console.log('a = 10');
  }

  const exp = 'Blue';
  switch (exp) {
    case 'Red':
      console.log('kolor jest czerwony');
    case 'Blue':
      console.log('kolor jest niebieski');
    case 'Green':
      console.log('kolor jest zielony');
      break;
    default:
      console.log('kolor niedostępny w bazie');
  }

  // conditional (ternary) operator
  const conditionalIf =
    a > 10
      ? console.log('Większe od 10')
      : console.log('Mniejsze lub równe 10');

  const conditionalIf2 =
    a > 10
      ? console.log('Większe od 10')
      : console.log('Mniejsze lub równe 10');

  const result3 = iAmMan && 'You are a man';
  const result4 = !iAmMan && 'You are a woman';

  return (
    <div>
      {result3 === 'You are a man' && <div>Jesteś mężczyzną</div>}
      {result4 === 'You are a woman' && <div>Jesteś kobietą</div>}

      {iAmMan && <div> Jesteś mężczyzną </div>}
      {!iAmMan && <div> Jesteś kobietą </div>}
    </div>
  );
}
