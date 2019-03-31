import React, { Component, Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import moment from 'moment'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import Footer from '../Footer'
import Card from '@material-ui/core/Card'

interface Props {classes: any, blogs: any}
interface State {}

class Blog extends Component<Props, State> {

	state = {
		category: 'most recent',
		blog: false
	}

	renderCategories = () => {
		const {classes} = this.props
		const {category} = this.state
		const cats = ['most recent', 'mental', 'emotional', 'physical', 'spiritual', 'stacy jones', 'violet moon']
		return cats.map(c=> {
			return (
				<div
					key={c}
					onClick={()=> this.setState({category: c})} 
					className={category === c ? classnames(classes.cat, classes.selectedCat) : classes.cat}>
					{c}
				</div>
			)
		})
	}

	renderBlogs = () => {
		const {classes, blogs} = this.props
		const {category} = this.state
			
		if (category === 'most recent') {
			return blogs.slice(0, 9).map((b:any)=> {
				return (
					<Link to={`/blog/${b.uri}`} style={{textDecoration: 'none'}}>
						<Card key={b.id} className={classes.blogCard} style={{backgroundImage: `url(${b.headerImg})`, backdropFilter: 'grayscale()'}}>
							<div className={classes.blogTitle}>
								<div style={{fontSize: '.8em', letterSpacing: 1}}>{b.title}</div>
								<div style={{fontSize: '.6em', padding: '3px 0 6px'}}>{moment(b.createdAt).format('llll')}</div>
								<div style={{fontSize: '.6em', color: 'rgba(255,255,255,.5)'}}>{b.description.slice(0, 120)}</div>
							</div>
						</Card>
					</Link>
				)
			})
		} else if (category.includes('violet') || category.includes('stacy')) {
			let blogz = blogs.filter((b: any)=> b.category === category)
			return blogz.map((b:any)=> {
				return (
					<Link to={`/blog/${b.uri}`} style={{textDecoration: 'none'}}>
						<Card key={b.id} className={classes.blogCard} style={{backgroundImage: `url(${b.headerImg})`, backdropFilter: 'grayscale()'}}>
							<div className={classes.blogTitle}>
								<div style={{fontSize: '.8em', letterSpacing: 1}}>{b.title}</div>
								<div style={{fontSize: '.6em', padding: '3px 0 6px'}}>{moment(b.createdAt).format('llll')}</div>
								<div style={{fontSize: '.6em', color: 'rgba(255,255,255,.5)'}}>{b.description.slice(0, 120)}</div>
							</div>
						</Card>
					</Link>
				)
			})
		} else {
			let blogz = blogs.filter((b: any)=> b.category === category)
			return blogz.map((b:any)=> {
				return (
					<Link to={`/blog/${b.uri}`} style={{textDecoration: 'none'}}>
						<Card key={b.id} className={classes.blogCard} style={{backgroundImage: `url(${b.headerImg})`, backdropFilter: 'grayscale()'}}>
							<div className={classes.blogTitle}>
								<div style={{fontSize: '.8em', letterSpacing: 1}}>{b.title}</div>
								<div style={{fontSize: '.6em', padding: '3px 0 6px'}}>{moment(b.createdAt).format('llll')}</div>
								<div style={{fontSize: '.6em', color: 'rgba(255,255,255,.5)'}}>{b.description.slice(0, 120)}</div>
							</div>
						</Card>
					</Link>
				)
			})
		}
	}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.parentContainer}>
				<div className={classes.sidebar}>
					{this.renderCategories()}
				</div>
				<div className={classnames(classes.blogContainer, 'scrollbar')}>
					{this.renderBlogs()}
				</div>
			</div>
		)
	}
}

const styles = createStyles({
	parentContainer: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		width: '100%',
		height: '90vh',
		backgroundColor: 'seashell'
	},
	blogContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
	    maxWidth: 1050,
	    maxHeight: 500,
	    overflowY: 'auto',
	    direction: 'rtl',
		margin: '0 100px',
	},
	blogCard: {
		backgroundPosition: 'center',
		height: 150,
		width: 250,
		margin: 20,
		backgroundSize: 'cover',
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'flex-end',
		cursor: 'pointer',
		borderRadius: 0
	},
	blogTitle: {
		backgroundColor: 'black',
		width: '92%',
		height: '40%',
		padding: 10,
		color: 'white',
		bottom: 0,
		fontSize: '.8em',
		textAlign: 'left',
		letterSpacing: 1,
	},
	sidebar: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		margin: '120px 40px 60px'
	},
	catTitle: {
		fontWeight: 'bold',
		marginBottom: 20,
		letterSpacing: 3,
	},
	selectedCat: {
		fontWeight: 'bold',
		borderBottom: '5px solid black',

	},
	cat: {
		paddingBottom: 3,
		margin: '15px 30px',
		cursor: 'pointer',
		fontSize: '.8em'
	}
})

const mapStateToProps = (state:any) => ({
	blogs: state.blog.blogs
})

export default connect(mapStateToProps)(withStyles(styles)(Blog))