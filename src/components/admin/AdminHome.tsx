import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class AdminHome extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div>
				you're logged in && an admin!!
			</div>
		)
	}
}

export default withStyles(styles)(AdminHome)