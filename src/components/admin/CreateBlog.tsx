import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { setBlog } from '../../actions/blogAction'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import BlogForm from './BlogForm'
import history from '../../history'
import { createBlog, getBlogs } from '../../fetch'

interface Props {classes:any, userId:number, setBlog:any}
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
		this.setState({[input]: event.target.value})
	}

 	handleSave = async (event:any) => {
 		event.preventDefault()
 		const { title, textarea, headerImg, uri, category, description } = this.state
 		try {
 			console.log(typeof this.props.userId)
			const create = await createBlog(title, textarea, headerImg, uri, category, description, false, this.props.userId)
	        const blog = await getBlogs(create.id)
	        if (blog) setBlog(create)
	        history.push('/admin/blogs')

		} catch (err) {
			console.log('save error ~>', err.toString())
		}
	}

	handlePost = async (event:any) => {
 		event.preventDefault()
		const { title,textarea, headerImg, uri, category, description } = this.state
 		try {
			const blog = await createBlog(title, textarea, headerImg, uri, category, description, true, this.props.userId)
	        console.log(blog)
	        
	        history.push('/admin/blogs')

		} catch (err) {
			console.log('save error ~>', err.toString())
		}
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

const mapStateToProps = (state:any) => ({ userId: state.user.user.id })
const mapDispatchToProps = {setBlog}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CreateBlog))