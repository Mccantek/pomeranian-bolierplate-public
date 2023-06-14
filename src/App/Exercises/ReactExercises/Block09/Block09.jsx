import React, { useState } from 'react';

import './style.css';
import { Click5 } from '../Click5/Click5';
import { SeeorNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';
import { WhichBigger } from '../WhichBigger/WhichBigger';
import { WhichBigger2 } from '../WhichBigger2/WhichBigger2';

export function Block09() {
  return (
    <div>
      <h1>Blok 9 - 13.06.2023</h1>
      <div>
        <Click5 /> <hr /> <SeeorNot /> <hr /> <MoreOrLess /> <hr />{' '}
        <WhichBigger /> <hr /> <WhichBigger2 />
      </div>
    </div>
  );
}
