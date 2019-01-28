import React, { Component } from 'react'
import { getBlog } from '../../fetch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, TextField, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { Close as CloseIcon, Save as SaveIcon } from '@material-ui/icons'

interface Props {
	classes: any,
	open:boolean,
	blog:any,
	handleEditDialog:any,
}
interface State {
	title:string|null, 
    body:string|null, 
    headerImg:string|null, 
    uri:string|null, 
    category:string|null, 
    description:string|null, 
    render:boolean|null,    
}

class EditBlog extends Component<Props, State> {
	
	state = {
		title: null,
		body: null,
		headerImg: null,
		description: null,
		render: null,
		category: null,
		uri: null,
	}

	handleClose = async () => {
		await this.setState({
			title: null,
			body: null,
			headerImg: null,
			description: null,
			render: null,
			category: null,
			uri: null,
		})
		this.props.handleEditDialog()
	}

	handleSubmit = () => {
		console.log('woo! submitted!!')
	}

	render() {
		const {classes, open, blog} = this.props
		if (blog[0]) {
			return (
				<Dialog open={open} fullScreen>
					<AppBar position='static'>
						<Toolbar>
							<IconButton onClick={this.handleClose}>
								<CloseIcon/>
							</IconButton>
							<DialogTitle>Edit Blog</DialogTitle>
						</Toolbar>
					</AppBar>

					<form onSubmit={this.handleSubmit} className={classes.form}>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Title'
							defaultValue={blog[0].title}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							multiline
							rows={6}
							label='Body'
							defaultValue={blog[0].body}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Description'
							defaultValue={blog[0].description}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Blog URL Path'
							defaultValue={blog[0].uri}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Publish?'
							defaultValue={blog[0].render.toString()}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Main Image'
							defaultValue={blog[0].headerImg}
						/>
						<DialogActions>
							<Button type='submit'>
								<SaveIcon style={{marginRight: 5}}/>
								Save
							</Button>
						</DialogActions>
					</form>
				</Dialog>
			)
		} else {
			return null
		}
	}
}

const styles = createStyles({
	form: {
		margin: '20px 40px',
		display: 'flex',
		flexFlow: 'column nowrap',
		// alignItems: 'flex'
	},
	textField: {
		margin: '10px 0'
	}
})

export default withStyles(styles)(EditBlog)