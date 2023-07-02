import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const ContainedButtons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Zarejestruj się <ArrowRightAltIcon /> </Button>
    </Stack>
  );
};

const MaterialUIBasicElements = () => {
  return (
    <div>
      {' '}
      <ContainedButtons />{' '}
    </div>
  );
};

export default MaterialUIBasicElements;
