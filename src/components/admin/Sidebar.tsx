import React, { Component, Fragment as F } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import { Route, Link } from 'react-router-dom'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { InsertComment, LibraryBooks } from '@material-ui/icons'
import whiteLogo from '../../styles/images/inverse-transparent-logo.png'
import AdminPortal from './AdminPortal'
import CreateBlog from './CreateBlog'
import AdminLogin from './AdminLogin'

interface Props {classes: any}
interface State {route:string}

const styles = createStyles({
	contentContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		marginLeft: 73,
		width: '100%',
	},
	drawer: {
		marginRight: 73,
		backgroundColor: 'rgba(0,0,0,.85)'
	},
	icon: {
		fill: 'white',
	},
	logo: {
		height: 25,
	}
})

class Sidebar extends Component<Props, State> {

	state = {
		route: 'home',
	}

	handleClick = (route:string) => (event:any) => this.setState({route})

	route = (link:string) => {
		switch (link) {
			case 'create':
				return '/create'
			case 'view':
				return '/blogs'
			default:
				return ''
		}
	}

	renderRoute = () => {
		let route = this.state.route.split(' ')[0].toLowerCase()
		switch (route) {
			case 'view':
				return <Route path='/admin/blogs' component={AdminPortal} />
			case 'create' :
				return <Route path='/admin/create' component={CreateBlog} />
			default:
				return <Route path='/admin' component={AdminPortal} />
		}		
	}

	render() {
		const {classes} = this.props
		const navicons: {[titleText: string]: JSX.Element} = {
			'Home':<img src={whiteLogo} alt='rr-logo' className={classes.logo}/>,
			'Create Blog':<InsertComment className={classes.icon}/>, 
			'View Blogs':<LibraryBooks className={classes.icon}/>,
		}
		return (		
			<div>
				<Drawer variant='permanent' classes={{paper:classes.drawer}}>
					<List>
						{Object.keys(navicons).map((title)=> {
							let link = title.split(' ')[0].toLowerCase()
							return (
								<Link to={`/admin${this.route(link)}`}>
									<ListItem style={{justifyContent: 'center'}} onClick={this.handleClick(title)}>
										<Tooltip title={title} placement="right">
											{navicons[title]}
							            </Tooltip>
									</ListItem>
								</Link>
							)
						})}
					</List>
				</Drawer>
				<div className={classes.contentContainer}>
					{this.state.route ? this.renderRoute() : null}
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Sidebar)