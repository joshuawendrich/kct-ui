import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { SvgIconComponent } from '@mui/icons-material';
import React from 'react';

type DrawerItemProps = {
  href: string;
  IconComponent: SvgIconComponent;
  title: string;
};

export const DrawerItem: React.FC<DrawerItemProps> = ({
  href,
  IconComponent,
  title,
}) => {
  const active = useRouterState().location.pathname === href;
  const color = active ? 'primary' : undefined;

  const navigate = useNavigate();

  const navigateToHref = () => {
    navigate({ to: href });
  };

  return (
    <ListItemButton onClick={navigateToHref}>
      <ListItemIcon>
        <IconComponent color={color} />
      </ListItemIcon>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          color,
          style: { fontWeight: active ? 'bold' : undefined },
        }}
      />
    </ListItemButton>
  );
};
