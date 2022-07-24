import React from "react";
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from "react-countup";
import cx from 'classnames'
import styles from './Cards.module.css'

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading..........'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5" >
              <CountUp start={0} end={confirmed.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" >Number of Infected COVID19 Patients</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5" >
              <CountUp start={0} end={recovered.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" >Number of Recovered COVID19 Patients</Typography>
          </CardContent>
        </Grid>

        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Death</Typography>
            <Typography variant="h5" >
              <CountUp start={0} end={deaths.value} duration={2} separator="," />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2" >Number of Death COVID19 Patients</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
