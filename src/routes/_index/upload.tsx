import { createFileRoute } from '@tanstack/react-router';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckIcon from '@mui/icons-material/Check';
import { CircularProgress, Grid, Typography } from '@mui/material';
import FileIcon from '@mui/icons-material/Folder';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadData } from '../../api/daten';

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

  const queryClient = useQueryClient();

  const {
    mutate: uploadFileMutation,
    isPending,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: uploadData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['data'] });
    },
  });

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0] == null) return;
    setFile(e.currentTarget.files[0]);
  };

  const handleUploadFile = () => {
    if (file == null) return;
    uploadFileMutation(file);
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
        <Grid container alignItems={'center'}>
          <Grid item>
            <Button
              startIcon={<CloudUploadIcon />}
              disabled={file == null || isSuccess || isPending}
              onClick={handleUploadFile}
            >
              Hochladen
            </Button>
          </Grid>
          <Grid item>
            {isError && (
              <Typography color={'error'}>Fehler beim Hochladen</Typography>
            )}
            {isPending && <CircularProgress size={20} />}
            {isSuccess && <CheckIcon color={'success'} />}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
