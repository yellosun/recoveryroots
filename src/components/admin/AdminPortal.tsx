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
		let published:Array<JSX.Element> = []

		this.props.blogs.forEach((b:blog)=> {
			if (b.render) published.push(<li key ={b.id} className={classes.listItem}>{b.title}</li>)
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
			if (!b.render) drafts.push(<li key ={b.id} className={classes.listItem}>{b.title}</li>)
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
		display: 'flex',
		flexFlow: 'column wrap'
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