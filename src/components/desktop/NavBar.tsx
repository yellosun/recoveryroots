import React, { Component, Fragment } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import logo from '../../styles/imgs/inverse-transparent-logo.png'

interface Props {classes: any, history:any}
interface State {}

class NavBar extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<Fragment>
				<AppBar position="fixed" className={classes.appbar}>
				HELLO
				</AppBar>
				<div>
					
				</div>
			</Fragment>
		)
	}
}

const styles = createStyles({
	appbar: {
		backgroundColor: 'black',
	}
})

export default withStyles(styles)(NavBar)