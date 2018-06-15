import React, { Component } from 'react'
import Parallax from 'react-springy-parallax';
import {
  Grid, Paper
} from '@material-ui/core';
import Products from '../components/Products';
import Team from '../components/Team';
import WorkContact from '../components/workContact';
import Footer from '../components/Footer';

export default class LandingPage extends Component {
  render() {
    return (
      <Parallax ref='parallax' pages={3.6}>
        <Parallax.Layer offset={0} speed={-0.1} style={styles.pageOne} />
        <Parallax.Layer offset={0.45} speed={-0.4}>
          <Grid container direction='column' alignItems='center'>
            <Grid item>
              <h1 style={styles.headline}>Your story begins with us.</h1>
              <h4 style={styles.description}>Msafiri solutions description goes here</h4>
            </Grid>
          </Grid>
        </Parallax.Layer>
        <Parallax.Layer offset={0.9} speed={0} >
          <Paper style={styles.pageTwoPaper} elevation={24}>
            <Grid container direction='column'>
              <Products />
              <Team />
              <WorkContact />
            </Grid>
          </Paper>
          <Parallax.Layer>
            <Footer />
          </Parallax.Layer>
        </Parallax.Layer>
      </Parallax>
    )
  }
}
const styles = {
  pageOne:{
    backgroundImage: `url(${require('../images/landingtwo.jpg')})`,
    backgroundSize: 'cover',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTwo: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageTwoPaper: {
    height: 1800,
    margin: 48,
    borderRadius: 5,
  },
  headline: {
    fontSize: 48,
    color: '#61B3CF'
  },
  description: {
    fontSize: 18,
    color: '#92979A'
  }
}