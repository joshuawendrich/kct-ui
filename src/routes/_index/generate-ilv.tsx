import { Button, Grid } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import Dropdown from '../../components/Dropdown';
import { useState } from 'react';

export const Route = createFileRoute('/_index/generate-ilv')({
  component: () => <GenerateIlv />,
});

const GenerateIlv = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  const getMonths = () => {
    const months: string[] = [];
    for (let i = 1; i < 13; i++) {
      months.push(i.toString());
    }
    return months;
  };

  const handleGenerateIlv = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/artikelstammdaten/ilv', {
        method: 'POST',
        headers: {
          ['Content-Type']: 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify({ monat: parseInt(selectedMonth) }),
      });
      console.log(res);
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = `${new Date().toISOString().substring(0, 10)}_ilv_${selectedMonth}_${new Date().getFullYear()}`;
      a.click();
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
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
        <Button
          variant="contained"
          disabled={selectedMonth === ''}
          onClick={handleGenerateIlv}
        >
          Generieren
        </Button>
      </Grid>
    </Grid>
  );
};
