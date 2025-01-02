import { createFileRoute } from '@tanstack/react-router';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DatensatzDto } from '../../api/generated';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getAllData, updateZusatzinfos } from '../../api/daten';
import { Button, CircularProgress, Grid, IconButton } from '@mui/material';
import Save from '@mui/icons-material/Save';
import Download from '@mui/icons-material/Download';
import { useState } from 'react';
import { BASE_URL } from '../../api/_config';
import Dropdown from '../../components/Dropdown';
import LabelOffIcon from '@mui/icons-material/Report';

export const Route = createFileRoute('/_index/')({
  component: () => <Dashboard />,
});

function Dashboard() {
  const queryClient = useQueryClient();
  const columns: GridColDef<DatensatzDto>[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'organisationseinheit',
      headerName: 'Organisationseinheit',
    },
    {
      field: 'detailangabe1',
      headerName: 'Detailangabe 1',
      width: 150,
    },
    {
      field: 'detailangabe2',
      headerName: 'Detailangabe 2',
      width: 150,
    },
    {
      field: 'produktLeistung',
      headerName: 'Produkt Leistung',
    },
    {
      field: 'nutzer',
      headerName: 'Nutzer',
    },
    {
      field: 'monat',
      headerName: 'Monat',
      type: 'number',
    },
    {
      field: 'jahr',
      headerName: 'Jahr',
      type: 'string',
    },
    {
      field: 'kostenstelle',
      headerName: 'Kostenstelle',
    },
    {
      field: 'gesamtpreis',
      headerName: 'Gesamtpreis',
      type: 'number',
    },
    {
      field: 'zusatzinfos.bemerkung',
      headerName: 'Bemerkung',
      valueGetter: ({ row }) => {
        return row.zusatzInfos?.bemerkung;
      },
      editable: true,
      valueSetter: ({ row, value }) => {
        return {
          ...row,
          zusatzInfos: { ...row.zusatzInfos, bemerkung: value },
        };
      },
    },
    {
      field: 'zusatzinfos.pspElement',
      headerName: 'PSP Element',
      editable: true,
      valueGetter: ({ row }) => {
        return row.zusatzInfos?.pspElement;
      },
      valueSetter: ({ row, value }) => {
        return {
          ...row,
          zusatzInfos: { ...row.zusatzInfos, pspElement: value },
        };
      },
    },
    {
      field: 'zusatzinfos.abgerechnetMonat',
      headerName: 'Abgerechnet Monat',
      valueGetter: ({ row }) => {
        return row.zusatzInfos?.abgerechnetMonat;
      },
      editable: true,
      valueSetter: ({ row, value }) => {
        if (!/^\d+$/.test(value)) return row;
        if (parseInt(value) > 12 || parseInt(value) < 1) return row;
        return {
          ...row,
          zusatzInfos: { ...row.zusatzInfos, abgerechnetMonat: value },
        };
      },
    },
    {
      field: 'zusatzinfos.abgerechnetJahr',
      headerName: 'Abgerechnet Jahr',
      type: 'string',
      valueGetter: ({ row }) => row.zusatzInfos?.abgerechnetJahr,
    },
    {
      field: 'save',
      headerName: 'Speichern',
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            const row = params.row;
            if (row.id == null) return;
            updateZusatzinfos(row.id, {
              abgerechnet: row.zusatzInfos?.abgerechnetMonat,
              bemerkung: row.zusatzInfos?.bemerkung,
              psp: row.zusatzInfos?.pspElement,
              dontOverride: false,
            }).then(() =>
              queryClient.invalidateQueries({ queryKey: ['data'] })
            );
          }}
        >
          <Save />
        </IconButton>
      ),
    },
    {
      field: 'savewithoutoverride',
      headerName: 'Speichern ohne Überschreiben',
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            const row = params.row;
            if (row.id == null) return;
            updateZusatzinfos(row.id, {
              abgerechnet: row.zusatzInfos?.abgerechnetMonat,
              bemerkung: row.zusatzInfos?.bemerkung,
              psp: row.zusatzInfos?.pspElement,
              dontOverride: true,
            }).then(() =>
              queryClient.invalidateQueries({ queryKey: ['data'] })
            );
          }}
        >
          <LabelOffIcon />
        </IconButton>
      ),
    },
  ];
  const [kostenstelle, setKostenstelle] = useState<string>('');
  const [orga, setOrga] = useState('');

  const [isPending, setIsPending] = useState(false);

  const downloadExcel = async () => {
    setIsPending(true);
    try {
      const res = await fetch(
        `${BASE_URL}/data/download${kostenstelle !== '' || orga !== '' ? '?' : ''}${kostenstelle === '' ? '' : `kostenstelle=${kostenstelle}`}${kostenstelle !== '' && orga !== '' ? '&' : ''}${orga !== '' ? `organisationseinheit=${orga}` : ''}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );
      const blob = await res.blob();
      const a = document.createElement('a');
      a.href = window.URL.createObjectURL(blob);
      a.download = `${new Date().toISOString().substring(0, 10)}_${kostenstelle}`;
      a.click();
    } catch (e) {
      console.log(e);
    }
    setIsPending(false);
  };

  const { data, isLoading, isError } = useQuery({
    queryFn: () =>
      getAllData(
        kostenstelle === '' ? undefined : kostenstelle,
        orga === '' ? undefined : orga
      ),
    queryKey: ['data', kostenstelle, orga],
  });

  if (isLoading || isError || data == null)
    return (
      <Grid container justifyContent={'center'} alignItems={'center'}>
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        gap={2}
        alignItems={'center'}
        style={{ marginBottom: 10 }}
      >
        <Grid item>
          <Dropdown
            label="Kostenstelle"
            value={kostenstelle}
            onChange={setKostenstelle}
            options={JSON.parse(localStorage.getItem('kostenstellen') ?? '[]')}
          />
        </Grid>
        <Grid item>
          <Dropdown
            label="Organisationseinheit"
            value={orga}
            onChange={setOrga}
            options={JSON.parse(
              localStorage.getItem('organisationseinheiten') ?? '[]'
            )}
          />
        </Grid>
        <Grid item>
          <Button
            onClick={downloadExcel}
            variant="contained"
            startIcon={
              isPending ? (
                <CircularProgress size={15} style={{ color: 'white' }} />
              ) : (
                <Download />
              )
            }
          >
            Excel Export
          </Button>
        </Grid>
      </Grid>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[15, 50, 100]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
