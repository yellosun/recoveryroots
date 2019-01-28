import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import EditBlog from './EditBlog'
import pageHeader from './PageHeader'
import { destroyBlog, getUserBlogs, getBlog } from '../../fetch'
import { deleteBlog } from '../../actions/blogAction'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton, Tooltip, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'

interface Props {classes: any, blogs:any, userId:number, deleteBlog:any}
interface State {openDelete:boolean, openEdit:boolean, blogId:number|null, blog:any}
interface blogs {
	id:number,
	title:string, 
    body:string, 
    headerImg:string, 
    uri:string, 
    category:string, 
    description:string, 
    render:boolean, 
    userId:number,
    createdAt:Date
}

class ViewBlogs extends Component<Props, State> {
	
	state = {
		openDelete: false,
		openEdit: false,
		blogId: null,
		blog: {}
	}

	handleDeleteDialog = (blogId: number|null = null) => {
		this.setState({openDelete: !this.state.openDelete, blogId})
	}

	handleEditDialog = async (blogId: number|null = null) => {
		if (blogId) {
			let blog = await getBlog(blogId)
			await this.setState({openEdit: !this.state.openEdit, blog})	
		} else {
			this.setState({openEdit: !this.state.openEdit, blogId})
		}
	}

	handleDelete = async () => {
		let blogId = this.state.blogId
		let userId = this.props.userId
		try {
			await destroyBlog(blogId)	
			this.props.deleteBlog(blogId)
		} catch(err) {
			console.log(err.toString())
		}
		this.setState({openDelete: false, blogId: null})
	}


	render() {
		const {classes, blogs} = this.props
		if (blogs) {
			return (
				<Fragment>
					{pageHeader('View All Blogs', '#CF9E89')}
					<div className={classes.blogContainer}>
						{(blogs || []).map((b:blogs)=> (  
							<Card key={b.id} className={classes.card}>
								<CardMedia
									className={classes.blogImg}
									image={`${b.headerImg}`}
									title={b.title}
								/>
								<CardContent className={classes.cardContent}>
									<div className={classes.cardText}>
										<div style={{fontSize: '.8em'}}>
											{moment(b.createdAt).format("MMM Do YYYY")}
										</div>
										<div className={classes.title}>{b.title}</div>
									</div>

									<div className={classes.cardActions}>
										<Tooltip title='Edit Blog' placement='right'>
											<IconButton style={{marginLeft: 10}} onClick={()=> this.handleEditDialog(b.id)}>
												<EditIcon/>
											</IconButton>
										</Tooltip>
										<Tooltip title='Delete Blog' placement='right'>
											<IconButton style={{marginLeft: 10}} onClick={() => this.handleDeleteDialog(b.id)}>
												<DeleteIcon/>
											</IconButton>
										</Tooltip>
									</div>
								</CardContent>
								
							</Card>
						))}
						<Dialog open={this.state.openDelete} disableBackdropClick={true}>
							<DialogTitle> Are you sure you want to delete?</DialogTitle>
							<DialogActions>
								<Button variant='outlined' style={{color: '#A51A30', borderColor: '#A51A30'}} onClick={this.handleDelete}>Yes</Button>
								<Button onClick={() => this.handleDeleteDialog(null)}>No</Button>
							</DialogActions>
						</Dialog>
						<EditBlog open={this.state.openEdit} blog={this.state.blog} handleEditDialog={this.handleEditDialog}/>
					</div>
				</Fragment>
			)
		}
	}
}

const styles = createStyles({
	blogContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
	},
	card: {
		margin: 20,
		width: 350,
		height: 'auto',
		display: 'flex',
		flexFlow: 'row nowrap',
	},
	cardContent: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'space-between',
		paddingBottom: '0 !important',
		padding: '0 !important',
	},
	cardText: {
		padding: '20px 0 0 20px',
		width: '80%',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingTop: 5,
	},
	desc: {
		fontStyle: 'oblique',
		padding: '10px 0',
		maxWidth: 300, 
	},
	blogImg: {
		height: '100%',
		minWidth: 150,
	},
	cardActions: {
		padding: '10px 0',
		display: 'flex',
		justifyContent: 'flex-start',
	},
})

const mapStateToProps = (state:any) => ({ 
	blogs: state.blog.blogs, 
	userId: state.user.user.id
})
const mapDispatchToProps = { deleteBlog }
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ViewBlogs))
