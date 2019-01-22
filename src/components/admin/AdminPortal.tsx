import React, { Component, Fragment as F } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import BlogForm from './BlogForm'
import Sidebar from './Sidebar'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	contentContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		marginLeft: 73,
		width: '100%',
	},
	markdownDisplay: {
		marginLeft: 50,
		width: '45%',
	},
})

class AdminHome extends Component<Props, State> {
	
	state = {
		textarea: '# Text displays here'
	}
	
	handleChange = (input:any) => (event:any) => {
		this.setState({[input]: event.target.value})
	}

	render() {		
		const {classes} = this.props
		return (
			<F>
				<Sidebar />
				<div className={classes.contentContainer}>
					<BlogForm handleChange={this.handleChange}/>
					<ReactMarkdown 
						className={classes.markdownDisplay} 
						source={this.state.textarea}
					/>
				</div>
			</F>
		)
	}
}

export default withStyles(styles)(AdminHome)