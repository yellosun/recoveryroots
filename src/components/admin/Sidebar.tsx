import React, { Component, Fragment } from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import { Route, Link, Redirect } from 'react-router-dom'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { InsertComment, LibraryBooks, Close } from '@material-ui/icons'
import whiteLogo from '../../styles/imgs/inverse-transparent-logo.png'
import AdminPortal from './AdminPortal'
import CreateBlog from './blogs/CreateBlog'
import ViewBlogs from './blogs/ViewBlogs'
import AdminLogin from './AdminLogin'
import Logout from './AdminLogout'

interface Props {classes: any, history:any}
interface State {}

const styles = createStyles({
	contentContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		paddingLeft: 63,
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

	route = (link:string) => {
		switch (link) {
			case 'create':
				return 'create'
			case 'view':
				return 'blogs'
			case 'logout':
				return 'logout'
			default:
				return ''
		}
	}

	render() {
		const {classes} = this.props
		const navicons: {[titleText: string]: JSX.Element} = {
			'Home':<img src={whiteLogo} alt='rr-logo' className={classes.logo}/>,
			'Create Blog':<InsertComment className={classes.icon}/>, 
			'View Blogs':<LibraryBooks className={classes.icon}/>,
			'Logout':<Close className={classes.icon}/>,
		}
		return (		
			<div>
				<Drawer variant='permanent' classes={{paper:classes.drawer}}>
					<List>
						{Object.keys(navicons).map((title)=> {
							let link = title.split(' ')[0].toLowerCase()
							return (
								<Link key={title} to={`/admin/${this.route(link)}`}>
									<ListItem style={{justifyContent: 'center'}}>
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
					<Route path='/admin' exact component={AdminPortal} />
					<Route path='/admin/blogs' component={ViewBlogs} />
					<Route path='/admin/create' component={CreateBlog} />
					<Route path='/admin/logout' exact component={Logout} />
				</div>
			</div>
		)
	}
}

export default withStyles(styles)(Sidebar)

