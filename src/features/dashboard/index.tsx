import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Datensatz } from '../../api/generated';
import { useQuery } from '@tanstack/react-query';
import { getAllData } from '../../api/daten';
import { Link } from '@tanstack/react-router';

const columns: GridColDef<Datensatz>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
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
    type: 'number',
  },
  {
    field: 'kostenstelle',
    headerName: 'Kostenstelle',
  },
  {
    field: 'x',
    headerName: 'Link',
    renderCell: (params) => (
      <Link to={`/${params.row.id ?? ''}`}>Bearbeiten</Link>
    ),
  },
];

export default function DataGridDemo() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getAllData,
    queryKey: ['data'],
  });

  if (isLoading || isError || data == null) return <div></div>;

  return (
    <Box sx={{ width: '100%' }}>
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
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}
