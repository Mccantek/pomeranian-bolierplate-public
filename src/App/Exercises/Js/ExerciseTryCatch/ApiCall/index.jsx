import { useEffect, useState } from 'react';

export function ApiCallExercise() {
  const [getPosts, setPosts] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(`${BASE_API_URL}/posts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const postsData = await response.json();
        setPosts(postsData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
        console.log('FINALLY WE GOT THIS ');
      }
    }
    fetchPosts();
  }, []);
  const obj = {}; // Prototyp: Object.prototype
  const arr = []; // Prototyp: Array.prototype
  const func = function() {}; // Prototyp: Function.prototype
  const num = 42; // Prymityw - nie ma prototypu
  const str = 'Hello'; // Prymityw - nie ma prototypu
//Prototypy są zorganizowane w łańcuch, który nazywany jest prototype chain. Kiedy odwołujemy się do danej właściwości lub metody obiektu, JavaScript najpierw sprawdza, czy dana właściwość/metoda istnieje w obiekcie. Jeśli nie, przeszukuje łańcuch prototypów, aby znaleźć właściwość/metodę w prototypach powiązanych obiektów, aż znajdzie szukaną właściwość/metodę lub dojdzie do końca łańcucha (prototypu Object.prototype).

  return (
    <div className="container-try-catch">
      {getIsLoading && 'Loading...'}
      {getError && getError}
      <ul>
        {getPosts.map((post) => (
          <li key={post?.id}>{post?.title}</li>
        ))}
      </ul>
    </div>
  );
}
