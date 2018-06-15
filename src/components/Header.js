import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Tooltip
} from '@material-ui/core';
import {
  Menu
} from '@material-ui/icons';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faFacebookF} from '@fortawesome/fontawesome-free-brands';

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    padding: 8,
  },
  flex: {
    flex: 1,
    fontSize: 24,
    fontWeight: '100',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  icons: {
    width: 20,
    height: 20
  }
};

const socialLinks = [
  {description: 'follow us on twitter', icon: faTwitter},
  {description: 'like us on facebook', icon: faFacebookF},
  {description: 'follow us on linkedIn', icon: faLinkedin},
]

const ButtonAppBar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} color='default'>
        <Toolbar>
          <Hidden mdUp>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Menu />
          </IconButton>
          </Hidden>
          <Typography variant="headline" color="inherit" className={classes.flex}>
            Msafiri Solutions
          </Typography>
          <Hidden mdDown>
            { socialLinks.map((account, index) => (
              <Tooltip
                placement='bottom'
                enterDelay={300}
                title={account.description}
              >
                <IconButton color="inherit" >
                  <FontAwesomeIcon icon={account.icon} className={classes.icons}/>
                </IconButton>
              </Tooltip>
            ))}
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);