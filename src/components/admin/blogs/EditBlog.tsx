import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBlog, updateBlog } from '../../../fetch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Close as CloseIcon, Save as SaveIcon } from '@material-ui/icons'
import { AppBar, Toolbar, TextField, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'

interface Props {
	classes: any,
	open:boolean,
	blog:any,
	handleEditDialog:any,
	userId:number
}
interface State {
	title:string, 
    body:string, 
    headerImg:string, 
    uri:string, 
    category:string, 
    description:string, 
    render:boolean,    
}

class EditBlog extends Component<Props, State> {

	constructor(props: Props) {
		super(props)
		
		this.state = {
			title: '',
			body: '',
			headerImg: '',
			description: '',
			render: false,
			category: '',
			uri: ''
		}
	}


	componentDidUpdate(prevProps:any, prevState:any) {
		if (prevProps.blog !== this.props.blog) {

			const blog = this.props.blog[0]
			this.setState({
				title: blog.title,
				body: blog.body,
				headerImg: blog.headerImg,
				description: blog.description,
				render: blog.render,
				category: blog.category,
				uri: blog.uri
			})
		}
	}
	
	handleClose = async () => {
		this.setState({
			title: '',
			body: '',
			headerImg: '',
			description: '',
			render: false,
			category: '',
			uri: '',
		}, () => {
			this.props.handleEditDialog()
		})
	}

	handleSubmit = async (event:any) => {
		event.preventDefault()
		const { title, body, headerImg, uri,
			category, description, render } = this.state
		const id = this.props.blog[0].id
		updateBlog(id, title, body, headerImg,
			uri, category, description, render)
	}

	render() {
		const {classes, open, blog} = this.props
		const { title, body, headerImg, uri, category, description, render } = this.state

		if (blog[0]) {
			return (
				<Dialog open={open} fullScreen>
					<AppBar position='static' className={classes.appbar}>
						<Toolbar>
							<IconButton onClick={this.handleClose}>
								<CloseIcon/>
							</IconButton>
							<div style={{marginRight: 10}}>
								Edit Blog
								<span className={classes.appBlogTitle}>
									{blog[0].title}
								</span>
							</div>
						</Toolbar>
					</AppBar>

					<form onSubmit={this.handleSubmit} className={classes.form}>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Title'
							onChange={evt => this.setState({title: evt.target.value}, ()=> console.log(this.state.title))}
							value={title}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							multiline
							rows={6}
							label='Body'
							onChange={evt => this.setState({body: evt.target.value})}
							value={body}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							multiline
							rows={3}
							inputProps={{maxLength:120}}
							label='Description'
							onChange={evt => this.setState({description: evt.target.value})}
							value={description}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Blog URL Path'
							onChange={evt => this.setState({uri: evt.target.value})}
							value={uri}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Publish?'
							onChange={evt => this.setState({render: true /* @@TODO: this shouldn't be hard coded */ })}
							value={render}
						/>
						<TextField
							className={classes.textField}
							variant='outlined'
							label='Main Image'
							onChange={evt => this.setState({headerImg: evt.target.value})}
							value={headerImg}
						/>
						<DialogActions style={{justifyContent:'flex-start'}}>
							<Button variant='contained' style={{backgroundColor: '#e5c85c'}} type='submit'>
								<SaveIcon style={{marginRight: 5}}/>
								Save
							</Button>
						</DialogActions>
					</form>
				</Dialog>
			)
		} else return null
	}
}

const styles = createStyles({
	appbar: {
		color: 'black',
		fontFamily: 'Roboto',
		backgroundColor: '#CBDFCF',
		fontSize: '1.5em',
		fontWeight: 'bold',
		display: 'flex',
		justifyContent: 'center',
	},
	appBlogTitle: {
		fontWeight: 'normal',
		fontSize: '.8em',
		color: 'rgba(0,0,0,.4)',
		marginLeft: 10,
	},
	form: {
		margin: 40,
		display: 'flex',
		flexFlow: 'column nowrap',
	},
	textField: {
		margin: '10px 0',

	}
})

const mapStateToProps = (state:any) => ({userId: state.user.user.id})
export default connect(mapStateToProps)(withStyles(styles)(EditBlog))