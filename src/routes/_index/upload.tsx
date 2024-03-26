import { createFileRoute } from '@tanstack/react-router';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Grid } from '@mui/material';
import FileIcon from '@mui/icons-material/Folder';
import { useState } from 'react';

export const Route = createFileRoute('/_index/upload')({
  component: () => <FileUploadPage />,
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const FileUploadPage = () => {
  const [file, setFile] = useState<File | undefined>();

  console.log(file);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0] == null) return;
    setFile(e.currentTarget.files[0]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<FileIcon />}
        >
          {file == null ? 'Datei Auswählen' : `Datei: ${file.name}`}
          <VisuallyHiddenInput
            type="file"
            onChange={handleChangeFile}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          />
        </Button>
      </Grid>
      <Grid item>
        {' '}
        <Button startIcon={<CloudUploadIcon />} disabled={file == null}>
          Hochladen
        </Button>
      </Grid>
    </Grid>
  );
};
