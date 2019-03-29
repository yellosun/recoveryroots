import React, { Component, Fragment } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import logo from '../styles/imgs/transparent-logo.png'
import Mail from '@material-ui/icons/Mail'
interface Props {classes: any}
interface State {}

class Footer extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			
			<div className={classes.footer}>
				<img src={logo} alt='rr-logo' width={50} style={{marginBottom: '-20px'}}/>
				<div className={classes.mission}>
					Our mission for Recovery Roots is to help brave souls 
					reclaim trust, awareness, alignment and acceptance 
					through authentic experience, guidance and connection.
				</div>
				<div className={classes.social}>
					<div className={classes.socialIcons}>
						<a className={classes.link} href='mailto:edrecoveryroots@gmail.com'><Mail height={25} /></a>
						<a className={classes.link} href='mailto:edrecoveryroots@gmail.com'><Mail height={25} /></a>
						<a className={classes.link} href='mailto:edrecoveryroots@gmail.com'><Mail height={25} /></a>
					</div>
					<div style={{fontSize: '.6em', letterSpacing: 5, paddingTop: 3}}>@edrecoveryroots</div>
				</div>
				<div className={classes.links}>
					<a className={classnames(classes.link, classes.secure)} href='#'>About Us</a>
					<a className={classnames(classes.link, classes.secure)} href='#'>Privacy Policy</a>
					<a className={classnames(classes.link, classes.secure)} href='#'>Disclaimer</a>
					<a className={classnames(classes.link, classes.secure)} href='#'>Terms + Conditions</a>
				</div>
			</div>			
		)
	}
}

const styles = createStyles({
	footer: {	
		backgroundColor: 'black',
		color: 'white',
		height: 200,
		width: '100%',
		display: 'flex',
		flexFlow: 'row nowrap',
		justifyContent: 'space-evenly',
		alignItems: 'center',
	},
	mission: {
		fontSize: '.6em',
		width: 250,
	},
	social: {
		justifyContent: 'center'
	},
	socialIcons: {
	    width: '98%',
	    display: 'flex',
	    justifyContent: 'space-evenly',
	},
	links: {
		display: 'flex',
		flexFlow: 'column nowrap',
		fontSize: '.6em',
	},
	link: {
		textDecoration: 'none',
		color: 'white'
	},
	secure: {
		paddingTop: 5
	}
})

export default withStyles(styles)(Footer)