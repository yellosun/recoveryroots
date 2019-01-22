import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'

interface Props {classes: any, handleChange:any, textarea:string}
interface State {}

const styles = createStyles({
	form: {
		outline: 'none',
		width: '45%',
		display: 'flex',
		flexFlow: 'column wrap'
	},
	textField: {
		margin: '20px 0',
	}
})

const categories = ['mental', 'emotional', 'physical', 'spiritual']

class BlogForm extends Component<Props, State> {
	
	state = {
		title: '# Text displays here',
		uri: 'sample: my-blog-name',
		headerImg: 'input any image url here',
		category: 'meps',
		description: ''
	}
	
	handleChange = (input:any) => (event:any) => {
		this.setState({[input]: event.target.value})
	}

	render() {
		const {classes, handleChange} = this.props
		return (
			<form className={classes.form}>
				<TextField className={classes.textField}label='Title' value={this.state.title}></TextField>
				<textarea 
					rows={30} 
					placeholder='# Write blog here'
					onChange={handleChange('textarea')}	
					style={{width: '100%'}}>
				</textarea>
				<TextField className={classes.textField}label='Description' value={this.state.description}></TextField>
				<TextField className={classes.textField}label='URL Slug' value={this.state.uri}></TextField>
				<TextField className={classes.textField}label='Main Image' value={this.state.headerImg}></TextField>
				<TextField className={classes.textField}label='Category' value={this.state.category}></TextField>
			</form>
		)
	}
}

export default withStyles(styles)(BlogForm)