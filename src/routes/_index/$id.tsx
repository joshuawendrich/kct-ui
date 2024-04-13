import { Button, Grid, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { FC, useState } from 'react';
import { getZusatzInfosForDatensatz } from '../../api/daten';
import { ZusatzInfos } from '../../api/generated';
import Save from '@mui/icons-material/Save';

export const Route = createFileRoute('/_index/$id')({
  component: () => <EditDataLoader />,
});

const EditDataLoader: FC = () => {
  const { id } = Route.useParams();

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getZusatzInfosForDatensatz(parseInt(id)),
    queryKey: ['zusatzinfos', id],
  });

  if (isLoading || isError || data == null) return <div></div>;

  return <EditData zusatzInfos={data} />;
};

type EditDataProps = {
  zusatzInfos: ZusatzInfos;
};

const EditData: FC<EditDataProps> = ({ zusatzInfos }) => {
  console.log(zusatzInfos);

  const [bemerkung, setBemerkung] = useState(zusatzInfos.bemerkung);
  const [psp, setPsp] = useState(zusatzInfos.pspElement);
  const [abgerechnet, setAbgerechnet] = useState(
    zusatzInfos.abgerechnetMonat?.toString()
  );

  const handleChangeBemerkung = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBemerkung(e.target.value);
  };
  const handleChangePsp = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPsp(e.target.value);
  };
  const handleChangeAbgerechnet = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt(e.target.value);
    if (isNaN(newVal)) {
      setAbgerechnet('');
      return;
    }
    if (newVal < 1 || newVal > 12) return;
    setAbgerechnet(e.target.value);
  };

  return (
    <Grid container flexDirection={'column'} gap={2}>
      <Grid item>
        <TextField
          id="filled-basic"
          label="Bemerkung"
          variant="filled"
          value={bemerkung}
          onChange={handleChangeBemerkung}
        />
      </Grid>
      <Grid item>
        <TextField
          id="filled-basic"
          label="PSP"
          variant="filled"
          value={psp}
          onChange={handleChangePsp}
        />
      </Grid>
      <Grid item>
        <TextField
          id="filled-basic"
          label="Abgerechnet Monat"
          variant="filled"
          value={abgerechnet}
          onChange={handleChangeAbgerechnet}
          type="number"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" startIcon={<Save />}>
          Speichern
        </Button>
      </Grid>
    </Grid>
  );
};
