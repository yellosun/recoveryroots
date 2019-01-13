import React, { Component, Fragment as F } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import { InsertComment, LibraryBooks } from '@material-ui/icons'
import BlogForm from './BlogForm'
import whiteLogo from '../../styles/images/inverse-transparent-logo.png'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	contentContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		marginLeft: 73,
		width: '100%',
	},
	drawer: {
		backgroundColor: 'rgba(0,0,0,.85)'
	},
	icon: {
		fill: 'white',
	},
	markdownDisplay: {
		marginLeft: 50,
		width: '45%',
	},
	logo: {
		height: 25,
	}
})

class AdminHome extends Component<Props, State> {
	
	state = {
		textarea: '# Text displays here'
	}
	
	handleChange = (input:any) => (event:any) => {
		this.setState({[input]: event.target.value})
	}

	render() {		
		const {classes} = this.props
		const navicons: {[titleText: string]: JSX.Element} = {
			'img':<img src={whiteLogo} className={classes.logo}/>,
			'Create Blog':<InsertComment className={classes.icon}/>, 
			'View Blogs':<LibraryBooks className={classes.icon}/>,
		}
		return (
			<F>
				<Drawer variant='permanent' classes={{paper:classes.drawer}}>
					<List>
						{ Object.keys(navicons).map((title)=> {
							return (
								<ListItem style={{justifyContent: 'center'}}>
									
									{title === 'img' ? 
										navicons[title]
									:
										<Tooltip title={title} placement="right">
											{navicons[title]}
							            </Tooltip>
									}
									
								</ListItem>
								)
						})
						
						}
						
					</List>
				</Drawer>
				<div className={classes.contentContainer}>
					<BlogForm handleChange={this.handleChange}/>
					<ReactMarkdown 
						className={classes.markdownDisplay} 
						source={this.state.textarea}
					/>
				</div>
			</F>
		)
	}
}

export default withStyles(styles)(AdminHome)