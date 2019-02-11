import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

interface Props {classes: any}
interface State {
	mental:boolean
	emotional:boolean
	physical:boolean
	spiritual:boolean
}

class FourBodies extends Component<Props, State> {

	state = {
		mental: false,
		emotional: false,
		physical: false,
		spiritual: false,
	}

	render() {
		const {classes} = this.props
		const {mental, emotional, physical, spiritual} = this.state

		return (
			<Grid item xs={12} className={classes.colContainer}>
				<div className={classes.tag}>supporting brave souls through the eating disorder recovery process</div>
				<div className={classnames(classes.rowContainer)}>
						<div className={classnames(classes.feature, classes.mental)}
							onMouseEnter={e => this.setState({mental: true})}
							onMouseOut={e => this.setState({mental: false})}
						>
							{mental ? 
								<div className={classnames(classes.featOverlay)}>
									<div className={classes.featTitle}>mental</div>
									<div className={classes.featBody}>
										Embracing the power of your mind to create new neural pathways is hard. That’s why we create safe spaces for you to practice greater bravery, resilience, openness, awareness and commitment to your recovery.
										
									</div>
								</div>
							:
								<div className={classes.featCapital}>M</div>
							}
						</div>
						<div className={classnames(classes.feature, classes.emotional)}
							onMouseEnter={e => this.setState({emotional: true})}
							onMouseOut={e => this.setState({emotional: false})}
						>
							{emotional ? 
								<div className={classnames(classes.featOverlay)}>
									<div className={classes.featTitle}>emotional</div>
									<div className={classes.featBody}>
										Your emotional body is a sacred portal through which your greatest healing occurs. Our priority is providing you with the space to share vulnerably and authentically so that you can experience true validation and radical acceptance.
									</div>
								</div>
							:
								<div className={classes.featCapital}>E</div>
							}
						</div>
						<div className={classnames(classes.feature, classes.physical)}
							onMouseEnter={e => this.setState({physical: true})}
							onMouseOut={e => this.setState({physical: false})}
						>
							{physical ? 
								<div className={classnames(classes.featOverlay)}>
									<div className={classes.featTitle}>physical</div>
									<div className={classes.featBody}>
										When beginning to learn how to work with the physical body, our focus is on cultivating a compassionate, trusting, accepting and attuned relationship to your body’s intuitive cues and natural rhythms.
									</div>
								</div>
							:
								<div className={classes.featCapital}>P</div>
							}
						</div>
						<div className={classnames(classes.feature, classes.spiritual)}
							onMouseEnter={e => this.setState({spiritual: true})}
							onMouseOut={e => this.setState({spiritual: false})}
						>
							{spiritual ? 
								<div className={classnames(classes.featOverlay)}>
									<div className={classes.featTitle}>spiritual</div>
									<div className={classes.featBody}>
										We believe a trusting, connected and receptive relationship to your spiritual body brings clarity in uncertainty, light in dark, and love in loss. It is connecting with who you are underneath all the conditioning and pain to bring you back home.
									</div>
								</div>
							:
								<div className={classes.featCapital}>S</div>
							}
						</div>
				</div>
			</Grid>

		)
	}
}

const styles = createStyles({
	colContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		flexFlow: 'column nowrap',
		backgroundColor: 'seashell'
	},
	rowContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tag: {
		fontWeight: 'bold',
		fontSize: '1.5em',
		letterSpacing: 5,
		marginBottom: 80,
	},
	feature: {
		height: 400,
		width: 400,
		backgroundPosition: 'center',
		backgroundSize: 'contained',
		overflow: 'hidden',
	},
	mental: {
		backgroundImage: 'url(https://images.pexels.com/photos/1670187/pexels-photo-1670187.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
	},
	emotional: {
		backgroundImage: 'url(https://images.pexels.com/photos/1850056/pexels-photo-1850056.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)',		
	},
	physical: {
		backgroundImage: 'url(https://images.pexels.com/photos/943907/pexels-photo-943907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
	},
	spiritual: {
		backgroundImage: 'url(https://images.pexels.com/photos/1591305/pexels-photo-1591305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
	},
	featOverlay: {
		backgroundColor: 'rgba(0,0,0,.4)',
		color: 'white',
		height: '100%',
		width: '100%',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
		padding: 20,
	},
	featCapital: {
		color: 'white',
		fontSize: '60em',
	   	display: 'flex',
	    justifyContent: 'flex-start',
	    alignItems: 'center',
	    height: '100%',
	},
	featTitle: {
		fontSize: '1.5em',
		letterSpacing: 20,
	},
	featBody: {
		paddingTop: 10,
		width: '80%',
	},
})

export default withStyles(styles)(FourBodies)