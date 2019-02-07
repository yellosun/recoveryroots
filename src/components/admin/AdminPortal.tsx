import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import pageHeader from './PageHeader'
import BlogPreview from './blogs/BlogPreview'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

interface Props {classes: any, user:any, blogs:any}
interface State {blog:blog|null}
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

class AdminPortal extends Component<Props, State> {

	state = {
		blog: null
	}

	published=()=> {
		const {classes} = this.props
		let published:Array<JSX.Element> = []

		this.props.blogs.forEach((b:blog)=> {
			if (b.render) {

				published.push(<li key={b.id} onClick={()=> this.setState({blog: b})} className={classes.listItem}>{b.title}</li>)
			}
		})

		if (published.length === 0) {
			return <div className={classes.nix}>No published blogs yet...</div>
		} else {
			return published
		}
	}

	drafts=()=> {
		const {classes} = this.props
		let drafts:Array<JSX.Element> = []

		this.props.blogs.forEach((b:blog)=> {
			if (!b.render) {
				drafts.push(<li key={b.id} onClick={()=> this.setState({blog: b})} className={classes.listItem}>{b.title}</li>)
			}
		})

		if (drafts.length === 0) {
			return <div className={classes.nix}>No drafts currently...</div>
		} else {
			return drafts
		}
	}

	render() {		
		const {classes, user, blogs} = this.props
		if (blogs) {
			return (
				<Fragment>
					{pageHeader(`Welcome back, ${user.firstName}!`, '#E9E6AB')}
					<div className={classes.contentContainer}>
					<div className={classes.cardContainer}>
						<Card className={classes.card}>
							<div className={classes.title}>Published Blogs</div>
							<ul>
								{this.published()}
							</ul>
						</Card>
						<Card className={classes.card}>
							<div className={classes.title}>Drafts</div>
							<ul>
								{this.drafts()}
							</ul>
						</Card>
					</div>
						<Card className={classes.displayedCard}>
							{this.state.blog ? 
								<BlogPreview blog={this.state.blog} />
							:
								<div className={classes.previewText}>Click a blog to view a preview here...</div>
							}
						</Card>
					</div>
				</Fragment>
			)
		} else return null

	}
}

const styles = createStyles({
	contentContainer: {
		display: 'flex'
	},
	displayedCard: {
		height: '80vh',
		width: '60vh',
		overflow: 'auto'
	},
	previewText: {
	    fontSize: '7em',
	    color: 'rgba(0,0,0,.05)',
	    padding: '40px',
	    textAlign: 'center',
	},
	cardContainer: {
		display: 'flex',
		flexFlow: 'column wrap'
	},
	card: {
		padding: 20,
		margin: '0 20px 20px',
	},
	title: {
		fontSize: '1.5em',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	listItem: {
		paddingTop: 10,
	}
})

const mapStateToProps = (state:any) => ({
	blogs: state.blog.blogs,
	user: state.user.user
})

export default connect(mapStateToProps)(withStyles(styles)(AdminPortal))