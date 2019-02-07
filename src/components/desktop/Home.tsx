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
				</Grid>
			</Grid>
		)
	}
}

const styles = createStyles({
	header: {
		backgroundImage: 'url(https://images.pexels.com/photos/612891/pexels-photo-612891.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
		height: 500,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}
})

export default withStyles(styles)(Home)