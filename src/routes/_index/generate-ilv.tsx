import { Button, Grid } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

export const Route = createFileRoute('/_index/generate-ilv')({
  component: () => <GenerateIlv />,
});

const GenerateIlv = () => {
  const [selectedMonth, setSelectedMonth] = useState('');

  const getMonths = () => {
    const months: string[] = [];
    for (let i = 1; i < 13; i++) {
      months.push(i.toString());
    }
    return months;
  };

  return (
    <Grid container alignItems={'center'} gap={2}>
      <Grid item>
        <Dropdown
          label="Monat"
          value={selectedMonth}
          onChange={setSelectedMonth}
          options={getMonths()}
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
