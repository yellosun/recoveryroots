import React, { Component } from 'react'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import moment from 'moment'
import classnames from 'classnames'
import { RouteComponentProps } from 'react-router-dom'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Time from '@material-ui/icons/AccessTime'
import Person from '@material-ui/icons/Person'
import Back from '@material-ui/icons/KeyboardBackspace'

interface Props extends RouteComponentProps<{uri:string}> { classes: any, blog: any, ownProps: any }
interface State {}

class Blog extends Component<Props, State> {
	render() {
		const {classes, blog, ownProps} = this.props
		console.log(blog, ownProps)
		if (blog) {
			return (
				<div className={classes.parentContainer}>
					<div className={classes.blogContainer}>
						<div><img src={blog.headerImg} alt={blog.title} style={{width: '100%'}}/></div>
						<div className={classes.title}>{blog.title}</div>
						<div className={classnames(classes.time, classes.author)}><Person style={{marginRight: 5, height: 18}}/>{blog.author}</div>
						<div className={classes.time}><Time style={{marginRight: 5, height: 18}}/>{moment(blog.createdAt).format('llll')}</div>
						<div className='markdown'>
							<Markdown source={blog.body}/>
						</div>
						<div className={classnames(classes.goBack, classes.time)} onClick={() => ownProps.history.goBack()}><Back style={{marginRight: 5, height: 18}}/>read more blogs</div>
					</div>
				</div>
			)
		} else {
			return null
		}
	}
}

const styles = createStyles({
	parentContainer: {
		padding: '100px 0',
		width: '100%',
		minHeight: '75vh',
		backgroundColor: 'seashell',
		display: 'flex',
		justifyContent: 'center'
	},
	blogContainer: {
		maxWidth: 750,
		padding: 10,
		lineHeight: '1.5em'
	},
	title: {
	    fontWeight: 'bold',
	    fontSize: '2em',
	    padding: '20px 0'
	},
	time: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '.8em'
	},
	author: {
		fontWeight: 'bold',
	},
	goBack: {
		fontSize: '.8em',
		paddingTop: 20,
		marginTop: 40,
		borderTop: '3px solid black',
		cursor: 'pointer',
		fontWeight: 'bold',
	}
})

const mapStateToProps = (state:any, ownProps:Props) => {
	const uri = ownProps.match.params.uri
	let blog

	for (let b of state.blog.blogs) {
		if (b.uri === uri) {
			blog = b
			break
		}
	}

	return { blog, ownProps }
}

export default connect(mapStateToProps)(withStyles(styles)(Blog))