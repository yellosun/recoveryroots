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
interface State {title:string}

const styles = createStyles({
	drawer: {
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
		title: 'home'
	}

	handleClick = (title:string) => (event:any) => {
		let route = title.split(' ').join('')
		switch (route) {
			case "ViewBlogs":
				return <Route path='/admin/blogs' component={CreateBlog} />
			case "CreateBlog" :
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
			<Drawer variant='permanent' classes={{paper:classes.drawer}}>
				<List>
					{ Object.keys(navicons).map((title)=> {
						let link = title.split(' ')[0].toLowerCase()
						return (
								<F>
								{title === 'Home' ?
									<Link to='/admin'>
										<ListItem style={{justifyContent: 'center'}} onClick={this.handleClick(title)}>
											<Tooltip title={title} placement="right">
												{navicons[title]}
								            </Tooltip>
										</ListItem>
									</Link>
								:
									<Link to={`/admin/${link}`}>
										<ListItem style={{justifyContent: 'center'}} onClick={this.handleClick(title)}>
											<Tooltip title={title} placement="right">
												{navicons[title]}
								            </Tooltip>
										</ListItem>
									</Link>
								}
								</F>
							)
					})
					
					}
					
				</List>
			</Drawer>
		)
	}
}

export default withStyles(styles)(Sidebar)