import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

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
					variant='outlined'
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
					style={{
						borderRadius: 5,
						outline: 'none',
						padding: 20,
						fontFamily: 'Roboto'
					}}>
				</textarea>
				<TextField
					variant='outlined'
					required 
					className={classes.textField}
					multiline
					rows={3}
					inputProps={{maxLength: 120}}
					onChange={handleChange('description')}
					label='Description' 
					value={description}
				/>
				<TextField
					variant='outlined'
					required 
					className={classes.textField}
					onChange={handleChange('uri')}
					helperText='example: my-blog-name'
					label='URL Slug'
					value={uri}
				/>
				<TextField
					variant='outlined'
					required 
					className={classes.textField}
					onChange={handleChange('headerImg')}
					helperText='example: http://tny.im/hhZ'
					label='Main Image'
					value={headerImg}
				/>
				<TextField
					variant='outlined'
					required
					select
					className={classes.textField}
					onChange={handleChange('category')}
					label='Category'
					value={category}
				>
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