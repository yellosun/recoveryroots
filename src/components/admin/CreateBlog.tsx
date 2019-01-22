import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import BlogForm from './BlogForm'

interface Props {classes:any}
interface State {}

const styles = createStyles({
	markdownDisplay: {
		marginLeft: 50,
		width: '45%',
	},
})

class CreateBlog extends Component<Props, State> {

	state = {
		textarea: '# Text displays here'
	}
	
	handleChange = (input:any) => (event:any) => {
		this.setState({[input]: event.target.value})
	}

	render() {
		const {classes} = this.props
		return (
			<Fragment>
				<BlogForm handleChange={this.handleChange} textarea={this.state.textarea}/>
				<ReactMarkdown 
					className={classes.markdownDisplay} 
					source={this.state.textarea}
				/>
			</Fragment>
		)
	}
}

export default withStyles(styles)(CreateBlog)