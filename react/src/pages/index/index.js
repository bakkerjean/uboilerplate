import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Typography from '@material-ui/core/Typography'
import withTheme from '../../withTheme'
import { withStyles } from '@material-ui/core/styles'
import { styles } from './styles'
import Topbar from '../../components/topbar/topbar'

class Index extends React.Component {
  state = {
    open: false
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  handleClick = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const { classes } = this.props
    const { open } = this.state

    return (
      <>
        <Topbar />
        <div className={classes.root}>
          <Dialog open={open} onClose={this.handleClose}>
            <DialogTitle>Super Secret Password</DialogTitle>
            <DialogContent>
              <DialogContentText>1-2-3-4-5</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button color="primary" onClick={this.handleClose}>
                OK
              </Button>
            </DialogActions>
          </Dialog>
          <Typography variant="h4" gutterBottom style={{ fontWeight: '500' }}>
            boiler
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            example project
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleClick}
          >
            Super Secret Password
          </Button>
        </div>
      </>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withTheme(withStyles(styles)(Index))
