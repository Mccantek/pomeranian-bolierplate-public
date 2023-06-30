import './styles.css';

export function Exercise() {
  const originalArr = [1, 3, 2, 99, 100, -1];
  function sortImmute (arr) {
    let copy = [...arr];
    copy.sort((a, b) => {
        return a - b;
   })
        return copy;
  }
 console.log(sortImmute(originalArr));
 console.log(originalArr);
}

// napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
// funkcja ma nie zmieniać pierwotnej tablicy

// const originalArr = [1,3,2]
// const sortedArr = sortImmune(originalArr)
