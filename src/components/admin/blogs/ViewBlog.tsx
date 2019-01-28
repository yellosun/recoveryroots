import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'
import { connect } from 'react-redux'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Close as CloseIcon, Person as PersonIcon, AccessTime as TimeIcon } from '@material-ui/icons'
import { AppBar, Toolbar, IconButton, Dialog, Divider } from '@material-ui/core'

interface State {}
interface Props {
	classes: any,
	user:any,
	open:boolean,
	blog:any,
	handleViewDialog:any,
}


class ViewBlog extends Component<Props, State> {
	render() {
		const {classes, open, blog, user} = this.props
		if (blog[0]) {
			return (
				<Dialog open={open} fullScreen className={classes.dialog} classes={{paper: classes.paper}}>
					<AppBar position='static' className={classes.appbar}>
						<Toolbar>
							<IconButton onClick={()=> this.props.handleViewDialog()}>
								<CloseIcon/>
							</IconButton>
							<div style={{marginRight: 10}}>Blog Preview</div>
						</Toolbar>
					</AppBar>
					<div className={classes.markdownDisplay} >
						<div style={{width: '50%'}}>
							<img src={blog[0].headerImg} className={classes.img}/>
						</div>
						<div className={classes.title}>{blog[0].title}</div>
						<div className={classes.subHeader}>
							<PersonIcon style={{fill: 'black', marginRight: 5}}/>
							{user.firstName} {user.lastName}
							<TimeIcon style={{fill: 'black', margin: '0 5px 0 15px'}}/> 
							{moment(blog[0].createdAt).format("MMM Do YYYY")}
						</div>
						
						<ReactMarkdown source={blog[0].body}/>
					</div>
				</Dialog>
			)
		} else return null
	}
}

const styles = createStyles({
	appbar: {
		color: 'black',
		fontFamily: 'Roboto',
		backgroundColor: '#B5DAED',
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
	markdownDisplay: {
		display: 'flex',
		flexFlow: 'column nowrap',
		width: '60%',
		marginTop: 40,
	},
	dialog:{
		overflow: 'auto',
		fontFamily: 'Roboto'
	},
	paper: {
		alignItems: 'center'
	},
	img: {
		height: 'auto',
		width: '100%',
		borderRadius: 15,
	},
	imgBox: {

	},
	title: {
		fontWeight: 'bold',
		fontSize: '3em',
		marginTop: 20,
	},
	subHeader: {
		textTransform: 'capitalize',
		margin: '20px 0 40px',
		display: 'flex',
		alignItems: 'center'
	}
})

const mapStateToProps = (state:any) => ({user: state.user.user})
export default connect(mapStateToProps)(withStyles(styles)(ViewBlog))