import React, { Component, Fragment } from 'react'
import { Route, Link, Redirect } from 'react-router-dom'
import logo from '../../styles/imgs/inverse-transparent-logo.png'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Community from './Community'

interface Props {classes: any, history:any}

class NavBar extends Component<Props> {
	render() {
		const {classes} = this.props
		return (
			<Fragment>
				<AppBar position="fixed">
					<Toolbar className={classes.appbar}>
						<div>about</div>
						<div>contact</div>
						<img height={25} src={logo}/>
						<div>community</div>
						<div className={classes.blog}>blog</div>
					</Toolbar>
				</AppBar>
				<div>
					<Route path='/about' exact component={About} />
					<Route path='/blog' component={Blog} />
					<Route path='/community' component={Community} />
					<Route path='/contact' exact component={Contact} />
				</div>
			</Fragment>
		)
	}
}

const styles = createStyles({
	appbar: {
		backgroundColor: 'black',
		justifyContent: 'space-evenly',
		fontSize: '.8em',
	},
	blog: {
		border: '1px white solid',
		borderRadius: 2,
		padding: '5px 10px',
	}
})

export default withStyles(styles)(NavBar)