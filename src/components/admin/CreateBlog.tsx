import React, { Component, Fragment } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import BlogForm from './BlogForm'
import { login } from '../../fetch'

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
		textarea: '# Text displays here',
		title: '',
		uri: '',
		headerImg: '',
		category: '',
		description: ''
	}
	
	handleChange = (input:any) => (event:any) => {
		console.log(event.target.value)
		this.setState({[input]: event.target.value})
	}

 	handleSave = async (event:any) => {
 		event.preventDefault()
 		try {
			
			})
	        history.push('/admin')

		} catch (err) {
			console.log('save error ~>', err.toString())
		}
	}

	handlePost = async (event:any) => {
		event.preventDefault()
			
	}

	render() {
		const {classes} = this.props
		return (
			<Fragment>
				<BlogForm 
					handleChange={this.handleChange}
					handleSave={this.handleSave}
					handlePost={this.handlePost}
					textarea={this.state.textarea}
					title={this.state.title}
					uri={this.state.uri}
					headerImg={this.state.headerImg}
					category={this.state.category}
					description={this.state.description}
				/>
				<ReactMarkdown 
					className={classes.markdownDisplay} 
					source={this.state.textarea}
				/>
			</Fragment>
		)
	}
}

export default withStyles(styles)(CreateBlog)