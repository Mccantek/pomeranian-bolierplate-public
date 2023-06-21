import { useState } from 'react';
import './styles.css';

import star from './star.svg';

export const Excerise2 = () => {
  const [ratings, setRatings] = useState([
    {
      location: 'Cape Verde Islands',
      player_id: '#100120',
      rating: 2,
    },
    {
      location: 'Cape Verde Islands ',
      player_id: '#100122',
      rating: 3,
    },
    {
      location: 'Cape Verde Islands',
      player_id: '#100124',
      rating: 5,
    },
    {
      location: 'United States of America',
      player_id: '#100126',
      rating: 1,
    },
    {
      location: 'United States of America',
      player_id: '#100128',
      rating: 4,
    },
  ]);

  const Star = ({ numOfStars }) => {
    const stars = new Array(numOfStars).fill();
    return (
      <>
        {stars.map((_) => (
          <img src={star} alt="rating star" />
        ))}
      </>
    );
  };

  return (
    <>
      <table
        className="rating-table"
        border={0}
        style={{ width: '100%' }}
        cellspacing="0"
      >
        <thead>
          <tr>
            {Object.keys(ratings[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ratings.map((loc) => {
            return (
              <tr key={loc.id}>
                <td> {loc.location}</td>
                <td> {loc.player_id}</td>
                <td className='justify-right'> 
                  <Star numOfStars={loc.rating}></Star>{' '}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
