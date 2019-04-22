import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import logo from '../styles/imgs/transparent-logo.png'
import insta from '../styles/imgs/insta.png'
import fb from '../styles/imgs/fb.png'
import Mail from '@material-ui/icons/Mail'

interface Props {classes: any}
interface State {}

class Footer extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div className={classes.parentContainer}>
				<div className={classes.footer}>
					<div>
						<img src={logo} alt='rr-logo' width={50} style={{marginBottom: '-78px'}}/>
						<div style={{fontSize: '.6em', letterSpacing: 2, bottom: 0, marginBottom: 20, border: '.5px solid white', padding: '10px 20px'}}>website by <a style={{color: 'white', textDecoration: 'none'}} href='http://vio1337.com'>violet moon</a></div>	
					</div>
					<div className={classes.mission}>
						Our mission for Recovery Roots is to help brave souls 
						reclaim trust, awareness, alignment and acceptance 
						through authentic experience, guidance and connection.
					</div>
					<div className={classes.social}>
						<div className={classes.socialIcons}>
							<a target='_blank' rel="noreferrer" className={classes.link} href='https://www.facebook.com/EDRecoveryRoots/'><img src={fb} alt='gb' height={18} /></a>
							<a target='_blank' rel="noreferrer" className={classes.link} href='https://www.instagram.com/edrecoveryroots/'><img src={insta} alt='insta' height={18} /></a>
							<a target='_blank' rel="noreferrer" className={classes.link} href='mailto:edrecoveryroots@gmail.com'><Mail height={25} /></a>
						</div>
						<div style={{fontSize: '.6em', letterSpacing: 5, paddingTop: 3}}>@edrecoveryroots</div>
					</div>
					<div className={classes.links}>
						<a className={classnames(classes.link, classes.secure)} href='/about'>About Us</a>
						<Link className={classnames(classes.link, classes.secure)} to='/privacy-policy'>Privacy Policy</Link>
						<Link className={classnames(classes.link, classes.secure)} to='/disclaimer'>Disclaimer</Link>
						<Link className={classnames(classes.link, classes.secure)} to='/terms-and-conditions'>Terms + Conditions</Link>
					</div>
				</div>	
			</div>	
		)
	}
}

const styles = createStyles({
	parentContainer: {
		backgroundColor: 'black',
		color: 'white',
		height: 200,
		width: '100%',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 3
	},
	footer: {	
		width: '100%',
		height: '100%',
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
	    alignItems: 'center'
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