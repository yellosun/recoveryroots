import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class AdminHome extends Component<Props, State> {
	render() {
		console.log('i loaded properly')
		const {classes} = this.props
		return (
			<div>
				you admin
			</div>
		)
	}
}

export default withStyles(styles)(AdminHome)