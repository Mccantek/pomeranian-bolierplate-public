import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './styles.css';
import { ApiCallExercise } from './ApiCall';
/*
Api po czasie zwraca długość imienia użytownika jako ID
Input który pobiera imię
*/

export const ExerciseTryCatch = () => {
  const [getPosts, setPosts] = useState();

  return (
    <div className="container-try-catch">
      <ApiCallExercise />
    </div>
  );
};
