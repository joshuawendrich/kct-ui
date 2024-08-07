import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Toolbar, styled } from '@mui/material';
import * as React from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { DrawerItem } from './DrawerItem';
import Generate from '@mui/icons-material/Factory';

type DrawerProps = {
  open: boolean;
  toggleDrawer: () => void;
};

const drawerWidth: number = 240;

const MUIDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

export const Drawer: React.FC<DrawerProps> = ({ open, toggleDrawer }) => {
  return (
    <MUIDrawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        <DrawerItem title="Dashboard" IconComponent={DashboardIcon} href="/" />
        <DrawerItem
          title="ILV Generieren"
          IconComponent={Generate}
          href="/generate-ilv"
        />
        <DrawerItem title="Upload" IconComponent={UploadIcon} href="/upload" />
      </List>
    </MUIDrawer>
  );
};
