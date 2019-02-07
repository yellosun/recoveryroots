import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import pageHeader from './PageHeader'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

interface Props {classes: any, user:any, blogs:any}
interface State {}
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

	published=()=> {
		const {classes} = this.props
		const published = this.props.blogs.map((b:blog)=> {
			if (b.render) return <li className={classes.listItem}>{b.title}</li>
		})

		if (this.props.blogs.length === published.length) {
			return <div className={classes.nix}>No published blogs yet...</div>
		} else {
			return published
		}
	}

	drafts=()=> {
		const {classes} = this.props
		const drafts = this.props.blogs.map((b:blog)=> {
			if (b.render === false) return <li className={classes.listItem}>{b.title}</li>
		})

		if (this.props.blogs.length === drafts.length) {
			return drafts
		} else {
			return <div className={classes.nix}>No drafts currently...</div>
		}
	}

	render() {		
		const {classes, user, blogs} = this.props
		if (blogs) {
			return (
				<Fragment>
					{pageHeader(`Welcome back, ${user.firstName}!`, '#E9E6AB')}
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
				</Fragment>
			)
		} else return null

	}
}

const styles = createStyles({
	cardContainer: {

	},
	card: {
		padding: 20,
		margin: 20,
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