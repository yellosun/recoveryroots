import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { setBlog } from '../../actions/blogAction'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Edit as EditIcon } from '@material-ui/icons'
import Typography from '@material-ui/core/Typography'
import { Card, CardContent, CardMedia, CardActionArea, CardActions, IconButton, Tooltip } from '@material-ui/core'

interface Props {classes: any, blogs:any}
interface State {}
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

const styles = createStyles({
	blogContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
	},
	card: {
		margin: 20,
		maxWidth: 300,
	},
	desc: {
		fontStyle: 'oblique',
		padding: '10px 0',
		maxWidth: 300, 
	},
	blogImg: {
		height: 150,
		width: '100%',
	}
})

class ViewBlogs extends Component<Props, State> {
	render() {
		const {classes, blogs} = this.props
		return (
			<div className={classes.blogContainer}>
				{(blogs || []).map((b:blogs)=> (  
					<Card key={b.id} className={classes.card}>
						<CardMedia
							className={classes.blogImg}
							image={`${b.headerImg}`}
							title={b.title}
						/>
						<CardContent>
							<Typography variant='h5' style={{justifyContent: 'space-between'}}>
									{b.title}
									<Tooltip title='Edit Blog' placement='right'>
										<IconButton style={{marginLeft: 10}}>
											<EditIcon/>
										</IconButton>
									</Tooltip>
							</Typography>
							<div className={classes.desc}>
								{b.description}
							</div>
							<div style={{fontSize: '.8em', fontWeight: 'bold'}}>
								Posted? {b.render.toString()}
							</div>
							<div style={{fontSize: '.8em'}}>
								Created: {moment(b.createdAt).format("MMM Do YYYY")}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		)
	}
}

const mapStateToProps = (state:any) => ({ blogs: state.blog.blogs })
const mapDispatchToProps = {setBlog}
export default connect(mapStateToProps)(withStyles(styles)(ViewBlogs))