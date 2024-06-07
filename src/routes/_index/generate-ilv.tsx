import { Button, Grid } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

export const Route = createFileRoute('/_index/generate-ilv')({
  component: () => <GenerateIlv />,
});

const GenerateIlv = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  return (
    <Grid container alignItems={'center'} gap={2}>
      <Grid item>
        <Dropdown
          label="Monat"
          value={selectedMonth}
          onChange={setSelectedMonth}
          options={[
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
          ]}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" disabled={selectedMonth === ''}>
          Generieren
        </Button>
      </Grid>
    </Grid>
  );
};
