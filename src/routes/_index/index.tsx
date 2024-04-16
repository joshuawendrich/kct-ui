import { createFileRoute } from '@tanstack/react-router';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { DatensatzDto } from '../../api/generated';
import { useQuery } from '@tanstack/react-query';
import { getAllData, updateZusatzinfos } from '../../api/daten';
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import Save from '@mui/icons-material/Save';

export const Route = createFileRoute('/_index/')({
  component: () => <Dashboard />,
});

const columns: GridColDef<DatensatzDto>[] = [
  { field: 'id', headerName: 'ID' },
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
  // {
  //   field: 'nutzer',
  //   headerName: 'Nutzer',
  // },
  {
    field: 'monat',
    headerName: 'Monat',
    type: 'number',
  },
  {
    field: 'jahr',
    headerName: 'Jahr',
    type: 'number',
  },
  {
    field: 'kostenstelle',
    headerName: 'Kostenstelle',
  },
  {
    field: 'zusatzinfos.bemerkung',
    headerName: 'Bemerkung',
    valueGetter: ({ row }) => {
      return row.zusatzInfos?.bemerkung;
    },
    editable: true,
    valueSetter: ({ row, value }) => {
      return { ...row, zusatzInfos: { ...row.zusatzInfos, bemerkung: value } };
    },
  },
  {
    field: 'zusatzinfos.psp',
    headerName: 'PSP Element',
    editable: true,
    valueGetter: ({ row }) => {
      return row.zusatzInfos?.pspElement;
    },
    valueSetter: ({ row, value }) => {
      return { ...row, zusatzInfos: { ...row.zusatzInfos, pspElement: value } };
    },
  },
  {
    field: 'zusatzinfos.abgerechnet',
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
          });
        }}
      >
        <Save />
      </IconButton>
    ),
  },
];

function Dashboard() {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllData(),
    queryKey: ['data'],
  });

  if (isLoading || isError || data == null) return <div></div>;

  return (
    <Box sx={{ width: '100%' }}>
      <FormControl style={{ width: '150px', marginBottom: 10 }}>
        <InputLabel id="demo-simple-select-label">Kostenstelle</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={''}
          label="Age"
          onChange={() => {}}
        >
          <MenuItem value={10}>026828464659</MenuItem>
          <MenuItem value={20}>026828464653</MenuItem>
          <MenuItem value={30}>026828464657</MenuItem>
        </Select>
      </FormControl>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
