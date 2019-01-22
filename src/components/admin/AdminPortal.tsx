import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Sidebar from './Sidebar'

interface Props {classes: any}
interface State {}

const styles = createStyles({
})

class AdminPortal extends Component<Props, State> {


	render() {		
		const {classes} = this.props
		return (
			<div >
				'hi'
			</div>
		)
	}
}

export default withStyles(styles)(AdminPortal)