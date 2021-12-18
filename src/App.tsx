import { Theme } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles<Theme>((theme) => ({}));

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      Hello world
    </div>
  );
};
