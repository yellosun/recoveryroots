import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

interface Props {classes: any}
interface State {}


class Home extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<Grid container>
				<Grid item xs={12} className={classnames(classes.container, classes.header)}>
					<div className={classes.title}>recovery roots</div>
				</Grid>
				<Grid item xs={12} className={classes.container}>
					<div className={classes.tag}>supporting brave souls through the eating disorder recovery process</div>
					<div className={classes.featureContainer}>
						<div className={classes.feature}>
							<img className={classes.featImg}src='https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
						</div>
						<div className={classes.feature}>
							<img className={classes.featImg}src='https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
						</div>
						<div className={classes.feature}>
							<img className={classes.featImg}src='https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
						</div>
						<div className={classes.feature}>
							<img className={classes.featImg}src='https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
						</div>
					</div>
				</Grid>
			</Grid>
		)
	}
}

const styles = createStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		flexFlow: 'column nowrap',
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
	},
	featureContainer: {
		display: 'flex',
		flexFlow: 'row wrap',

	},
	feature: {
		width: '25%',
		height: 200,
	},
	featImg: {
		width: '100%'
	}
})

export default withStyles(styles)(Home)