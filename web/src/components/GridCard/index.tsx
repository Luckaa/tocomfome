import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardRestaurant from '../../components/CardRestaurant/index';
import './gridCard.scss';


const GridCard = () => {

  return (
    <div className="grid-category">
    <Grid container spacing={3}>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper><CardRestaurant/></Paper>
        </Grid>
      </Grid>
    </div>
      
  );
}
export default GridCard;
