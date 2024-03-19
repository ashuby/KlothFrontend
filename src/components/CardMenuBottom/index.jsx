import * as React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Unstable_Grid2';
import { items } from '../../seed';
import CardMenuItemBottom from '../CardMenuItemBottom';

const { sections } = items;

function CardMenuBottom() {
    return ( <>
     <Box sx={{ flexGrow: 1, marginTop:4,marginLeft:8,marginRight:8}}>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item md={6} sx={{marginTop:-2}}>
          <CardMenuItemBottom item={sections[3]} />
        </Grid>
        <Grid item md={6} sx={{marginTop:-2}}>
          <CardMenuItemBottom item={sections[4]} />
        </Grid>
      </Grid>
    </Box>
    </> );
}

export default CardMenuBottom;