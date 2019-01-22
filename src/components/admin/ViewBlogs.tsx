import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class ViewBlogs extends Component<Props, State> {
	render() {
		const {classes} = this.props
		return (
			<div>
			herro
			</div>
		)
	}
}

export default withStyles(styles)(ViewBlogs)