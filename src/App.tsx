import { Grid, Theme } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Navbar } from 'src/components/Navbar';
import { Leftbar } from './components/Leftbar';
import { Feed } from './components/Feed';
import { Rightbar } from './components/Rightbar';
import { Add } from './components/Add';

const useStyles = makeStyles<Theme>((theme) => ({}));

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      Hello world
    </div>
  );
};
