import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { TextField, Button, MenuItem } from '@material-ui/core'

interface Props {
	classes: any, 
	handleChange:any,
	handleSave:any,
	handlePost:any, 
	textarea:string,
	title:string,
	uri:string,
	category:string,
	description:string,
	headerImg:string,
}

interface State {}

const styles = createStyles({
	form: {
		outline: 'none',
		width: '45%',
		display: 'flex',
		flexFlow: 'column wrap'
	},
	textField: {
		margin: ' 0 0 20px',
	},
	submitBtns: {
		display: 'flex',
		justifyContent: 'space-around',
		margin: '20px 0'
	}
})

const categories = ['mental', 'emotional', 'physical', 'spiritual']

class BlogForm extends Component<Props, State> {
	render() {
		const {classes, handleChange, title, headerImg, description, category, uri, textarea, handleSave, handlePost} = this.props

		return (
			<form className={classes.form}>
				<TextField
					required 
					onChange={handleChange('title')}
					className={classes.textField}
					label='Title' 
					value={title}
				/>
				<textarea 
					className={classes.textField}
					onChange={handleChange('textarea')}
					rows={30} 
					placeholder='# Write blog here'
					style={{width: '100%'}}>
				</textarea>
				<TextField
					required 
					className={classes.textField}
					onChange={handleChange('description')}
					label='Description' 
					value={description}
				/>
				<TextField
					required 
					className={classes.textField}
					onChange={handleChange('uri')}
					helperText='example: my-blog-name'
					label='URL Slug'
					value={uri}
				/>
				<TextField
					required 
					className={classes.textField}
					onChange={handleChange('headerImg')}
					helperText='example: http://tny.im/hhZ'
					label='Main Image'
					value={headerImg}
				/>
				<TextField
					required
					select
					className={classes.textField}
					onChange={handleChange('category')}
					label='Category'
					value={category}>
					{categories.map(c=> (
						<MenuItem key={c} value={c}>{c}</MenuItem>
					))}
				</TextField>
				<div className={classes.submitBtns}>
					<Button 
						variant='contained'
						onClick={handleSave} 
						type='submit'>
						Save
					</Button>
					<Button 
						variant='outlined'
						onClick={handlePost} 
						type='submit'>
						Post
					</Button>
				</div>
			</form>
		)
	}
}

export default withStyles(styles)(BlogForm)