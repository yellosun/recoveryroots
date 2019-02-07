import React, { Component } from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import TimeIcon from '@material-ui/icons/AccessTime'
import PersonIcon from '@material-ui/icons/Person'

interface Props {classes: any, blog:blog|null, user:user}
interface blog {
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
interface user {
	fistName:string
	lastName:string
	email:string
}

class BlogPreview extends Component<Props> {
	render() {
		const {classes, blog, user} = this.props
		console.log(blog)
		if (blog) {
			return (
				<div className={classes.markdownDisplay} >
					<div style={{width: '50%'}}>
						<img src={blog.headerImg} className={classes.img}/>
					</div>
					<div className={classes.title}>{blog.title}</div>
					<div className={classes.subHeader}>
						<PersonIcon style={{fill: 'black', marginRight: 5}}/>
						{user.firstName} {user.lastName}
						<TimeIcon style={{fill: 'black', margin: '0 5px 0 15px'}}/> 
						{moment(blog.createdAt).format("MMM Do YYYY")}
					</div>
					
					<ReactMarkdown source={blog.body}/>
				</div>
			)
		}
	}
}

const styles = createStyles({

})

export default withStyles(styles)(BlogPreview)