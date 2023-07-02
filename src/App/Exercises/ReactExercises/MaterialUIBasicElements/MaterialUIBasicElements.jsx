import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MaterialUIBasicElements = () => {
  const [gender, setGender] = useState('');
  const [use, setUse] = useState('Zarejestruj się');
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const selectChange = (use) => {
    setUse(use);
  };
  return (
    <div>
       <Box sx={{ maxWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value={'Man'}>Man</MenuItem>
            <MenuItem value={'Woman'}>Woman</MenuItem>
            <MenuItem value={'Helicopter'}>Apache helicopter</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">
         Hej {gender}, Zarejestruj się <ArrowRightAltIcon />{' '}
        </Button>
      </Stack>
     
    </div>
  );
};

export default MaterialUIBasicElements;
