import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
import useStyles from "../hooks/useStyle";

export const BoxContent = () => {
  const classes = useStyles();

  const voices = [
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
    "voz 1",
  ];
  return (
    <div>
      <Grid container spacing={2} justify="center">
        <Grid item xs={12} spacing={1} >
          <Box border={2} m={1}>
  
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box border={2} m={1}>
            
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
