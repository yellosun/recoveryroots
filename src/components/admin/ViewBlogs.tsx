import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { deleteBlog, getUserBlogs } from '../../fetch'
import { setBlog } from '../../actions/blogAction'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Edit as EditIcon, Delete as DeleteIcon } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton, Tooltip, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'

interface Props {classes: any, blogs:any, userId:number}
interface State {open:boolean, blogIdToDelete:number|null}
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
		open: false,
		blogIdToDelete: null,
	}

	handleDialog = (blogIdToDelete: number|null = null) => {
		this.setState({open: !this.state.open, blogIdToDelete})
	}


	handleDelete = async () => {
		let blogId = this.state.blogIdToDelete
		let userId = this.props.userId
		try {
			deleteBlog(blogId)
			let r = await getUserBlogs(userId)
			console.log(r)
			r.forEach((b:any)=> setBlog(b))
			this.forceUpdate()
		} catch(err) {
			console.log(err)
		}
		
		this.setState({open: false, blogIdToDelete: null})

	}


	render() {
		const {classes, blogs} = this.props
		if (blogs) {
			return (
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
									<div className={classes.title}>{b.title}</div>
									<div style={{fontSize: '.8em', fontWeight: 'bold'}}>
										Posted? {b.render.toString()}
									</div>
									<div style={{fontSize: '.8em'}}>
										Created: {moment(b.createdAt).format("MMM Do YYYY")}
									</div>
								</div>

								<div className={classes.cardActions}>
									<Tooltip title='Edit Blog' placement='right'>
										<IconButton style={{marginLeft: 10}}>
											<EditIcon/>
										</IconButton>
									</Tooltip>
									<Tooltip title='Delete Blog' placement='right'>
										<IconButton style={{marginLeft: 10}} onClick={() => this.handleDialog(b.id)}>
											<DeleteIcon/>
										</IconButton>
									</Tooltip>
								</div>
							</CardContent>
							
						</Card>
					))}
					<Dialog open={this.state.open} disableBackdropClick={true}>
						<DialogTitle> Are you sure you want to delete?</DialogTitle>
						<DialogActions>
							<Button variant='outlined' style={{color: '#A51A30', borderColor: '#A51A30'}}onClick={this.handleDelete}>Yes</Button>
							<Button onClick={() => this.handleDialog(null)}>No</Button>
						</DialogActions>
					</Dialog>
				</div>
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
		paddingBottom: 20,
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
const mapDispatchToProps = {setBlog}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ViewBlogs))
