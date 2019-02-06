import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import { Link, withRouter } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
// import Toolbar from '@material-ui/core/Toolbar'

// import Tabs from '@material-ui/core/Tabs'
// import Tab from '@material-ui/core/Tab'
// import MenuIcon from '@material-ui/icons/Menu'
// import IconButton from '@material-ui/core/IconButton'
// import List from '@material-ui/core/List'
// import ListItem from '@material-ui/core/ListItem'
// import ListItemText from '@material-ui/core/ListItemText'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
// import Menu from './Menu'
import withStyles from '@material-ui/core/styles/withStyles'
import { styles } from './styles'

// const logo = require('../images/logo.svg')

class Topbar extends Component {
  state = {
    value: 0,
    menuDrawer: false
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  mobileMenuOpen = event => {
    this.setState({ menuDrawer: true })
  }

  mobileMenuClose = event => {
    this.setState({ menuDrawer: false })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // current = () => {
  //   if (this.props.currentPath === '/home') {
  //     return 0
  //   }
  //   if (this.props.currentPath === '/dashboard') {
  //     return 1
  //   }
  //   if (this.props.currentPath === '/signup') {
  //     return 2
  //   }
  //   if (this.props.currentPath === '/wizard') {
  //     return 3
  //   }
  //   if (this.props.currentPath === '/cards') {
  //     return 4
  //   }
  // }

  render() {
    const { classes } = this.props

    return (
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            spacing={24}
          >
            <Grid item>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/" className={classes.link}>
                  boiler
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={24}
          >
            <Grid item>oi</Grid>
            <Grid item>oi</Grid>
            <Grid item>oi</Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withRouter(withStyles(styles)(Topbar))
