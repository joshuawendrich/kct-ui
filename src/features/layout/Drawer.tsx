import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Toolbar, styled } from '@mui/material';
import * as React from 'react';
import UploadIcon from '@mui/icons-material/Upload';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import NewUserIcon from '@mui/icons-material/Add';
import { DrawerItem } from './DrawerItem';

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
        <DrawerItem title="Upload" IconComponent={UploadIcon} href="/upload" />
        <Divider sx={{ my: 1 }} />
        <ListSubheader component="div" inset>
          Admin Tools
        </ListSubheader>
        <DrawerItem
          href="/users"
          title="Manage Users"
          IconComponent={PersonIcon}
        />
        <DrawerItem
          href="/users/create"
          title="Create User"
          IconComponent={NewUserIcon}
        />
      </List>
    </MUIDrawer>
  );
};
