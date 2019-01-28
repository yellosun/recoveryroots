import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class ViewBlog extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div>
			</div>
		)
	}
}

export default withStyles(styles)(ViewBlog)