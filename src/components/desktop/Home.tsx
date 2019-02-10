import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

interface Props {classes: any}
interface State {
	mental:boolean
	emotional:boolean
	physical:boolean
	spiritual:boolean
}


class Home extends Component<Props, State> {
	
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
			<Grid container>
				<Grid item xs={12} className={classnames(classes.colContainer, classes.header)}>
					<div className={classes.title}>recovery roots</div>
				</Grid>
				<Grid item xs={12} className={classes.colContainer}>
					<div className={classes.tag}>supporting brave souls through the eating disorder recovery process</div>
					<div className={classnames(classes.rowContainer)}>
							<div className={classnames(classes.feature, classes.mental)}
								onMouseOver={e => this.setState({mental: true})}
								onMouseOut={e => this.setState({mental: false})}
							>
								{mental ? 
									<div className={classnames(classes.featOverlay)}>
										<div className={classes.featTitle}>mental</div>
										<div className={classes.featBody}></div>
									</div>
								:
									<div className={classes.featCapital}>M</div>
								}
							</div>
							<div className={classnames(classes.feature, classes.emotional)}
								onMouseOver={e => this.setState({emotional: true})}
								onMouseOut={e => this.setState({emotional: false})}
							>
								{emotional ? 
									<div className={classnames(classes.featOverlay)}>
										<div className={classes.featTitle}>emotional</div>
										<div className={classes.featBody}></div>
									</div>
								:
									<div className={classes.featCapital}>E</div>
								}
							</div>
							<div className={classnames(classes.feature, classes.physical)}
								onMouseOver={e => this.setState({physical: true})}
								onMouseOut={e => this.setState({physical: false})}
							>
								{physical ? 
									<div className={classnames(classes.featOverlay)}>
										<div className={classes.featTitle}>physical</div>
										<div className={classes.featBody}></div>
									</div>
								:
									<div className={classes.featCapital}>P</div>
								}
							</div>
							<div className={classnames(classes.feature, classes.spiritual)}
								onMouseOver={e => this.setState({spiritual: true})}
								onMouseOut={e => this.setState({spiritual: false})}
							>
								{spiritual ? 
									<div className={classnames(classes.featOverlay)}>
										<div className={classes.featTitle}>spiritual</div>
										<div className={classes.featBody}></div>
									</div>
								:
									<div className={classes.featCapital}>S</div>
								}
							</div>
					</div>
				</Grid>
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
	},
	rowContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {
		backgroundImage: 'url(https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		// backgroundImage: 'url(https://images.pexels.com/photos/1702333/pexels-photo-1702333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	introContainer: {
		 display: 'flex',
	    flexFlow: 'column nowrap',
	    justifyContent: 'space-evenly'
	},
	textContainer: {
		margin: 40,
	    display: 'flex',
	    flexFlow: 'column wrap',
	    justifyContent: 'flex-start',
	},
	title: {
		fontSize: '7em',
		letterSpacing: 40,
		color: 'white',
		textAlign: 'center',
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

	}
})

export default withStyles(styles)(Home)