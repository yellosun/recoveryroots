import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

interface Props {classes: any}
interface State {}


class Home extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<Grid container>
				<Grid item xs={12} className={classes.header}>
					
						<div className={classes.introContainer}>
							<div className={classes.title}>
								Recovery<br/>Roots.
							</div>
						<div className={classes.tag}>
							Created to support brave
							souls through the eating disorder recovery process. It's time to reclaim your roots, and grow strong.
						</div>
						</div>
						
					
					
					
				</Grid>
			</Grid>
		)
	}
}

const styles = createStyles({
	header: {
		display: 'flex',
		justifyContent: 'flex-end',
		backgroundImage: 'url(https://images.pexels.com/photos/1702333/pexels-photo-1702333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '94.2vh',
	},
	introContainer: {
		margin: 40,
		    display: 'flex',
		    flexFlow: 'column wrap',
		    justifyContent: 'flex-start',
		    alignItems: 'flex-end',
		    textAlign: 'right',
	},
	title: {
		fontSize: '7em',
		fontWeight: 'bold'
	},
	tag: {
		width: 300,
	}
})

export default withStyles(styles)(Home)