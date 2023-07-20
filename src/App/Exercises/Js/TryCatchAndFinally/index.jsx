/* 
API is needed to deliver an id based on provided user name length 

HTML will need an input for that
*/

import { debounce, throttle } from 'lodash';
import React, { useEffect, useState } from 'react';

const ping = 5 * 1000;

const api = (username) =>
  new Promise((resolve) => {
    // Let's assume we have heavy load under this URL
    const mockedResponseFromServer = username.length;

    setTimeout(() => {
      resolve({
        data: { id: mockedResponseFromServer },
        status: 200,
        message: 'OK',
      });
    }, ping);
  });

const throttledAPI = throttle(api, 1000);

export const TryCatchAndFinally = () => {
  const cbApi = React.useCallback(api, []);

  const debouncedAPI = React.useMemo(() => debounce(api, 1000),[cbApi]);
  const getUserID = async (username) => {
    if (!username) return;
    try {
      const { data } = await debouncedAPI(username);
      console.log('dla tego użytkownika id to: ' + data.id);
    } catch (err) {
      console.error(err);
    }
  };
  const cbGetUserID = React.useCallback(getUserID, []);
  const [username, setUsername] = useState('');
  useEffect(() => {
    

    cbGetUserID(username);
  }, [username]);

  const handleAddName = (username) => {
    setUsername(username);
  };
  useEffect(() => {
    return () => debouncedAPI.cancel();
  }, [debouncedAPI]);
  const debouncedHandleAddName = debounce(handleAddName, 500);
  const throtthledHandleAddName = throttle(handleAddName, 400);

  return (
    <>
      <div>
        <input
          value={username}
          type="text"
          onChange={(e) => {
            handleAddName(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default TryCatchAndFinally;
