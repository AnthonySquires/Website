import { AppBar, Toolbar, Typography } from '@mui/material';
import type { ReactElement } from 'react';

export default function LandingPage(): ReactElement {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            fontWeight="800"
            variant="h4"
          >
            Anthony Squires
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
