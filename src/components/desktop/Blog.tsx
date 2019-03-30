import React, { Component } from 'react'
import { connect } from 'react-redux'
import Markdown from 'react-markdown'
import moment from 'moment'
import { RouteComponentProps } from 'react-router-dom'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props extends RouteComponentProps<{uri:string}> { classes: any, blog: any }
interface State {}

class Blog extends Component<Props, State> {
	render() {
		const {classes, blog} = this.props
		console.log(blog)
		if (blog) {
			return (
				<div className={classes.parentContainer}>
					<div>{blog.title}</div>
					<div>{moment(blog.createdAt).format('llll')}</div>
					<Markdown source={blog.body}/>
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
		backgroundColor: 'seashell'
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

	return { blog }
}

export default connect(mapStateToProps)(withStyles(styles)(Blog))