import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

class Blog extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div>
			</div>
		)
	}
}

const styles = createStyles({

})

export default withStyles(styles)(Blog)