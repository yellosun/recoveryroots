import React, { Component, Fragment as F } from 'react'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Tooltip } from '@material-ui/core'
import { InsertComment, LibraryBooks } from '@material-ui/icons'

interface Props {classes: any}
interface State {}

const styles = createStyles({
	contentContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
		marginLeft: 73,
	},
	drawer: {
		backgroundColor: 'rgba(0,0,0,.85)'
	},
	icon: {
		fill: 'white',
	},
	markdownDisplay: {
		marginLeft: 40,
		width: '40%',
	},
	textarea: {
		outline: 'none',
		width: '40%',
	}
})

class AdminHome extends Component<Props, State> {
	
	state = {
		input: '# Text displays here'
	}
	
	handleChange = (event:any) => {
		this.setState({input: event.target.value})
	}

	render() {		
		const {classes} = this.props
		const navicons: {[titleText: string]: JSX.Element} = {
			'Create Blog':<InsertComment className={classes.icon}/>, 
			'View Blogs':<LibraryBooks className={classes.icon}/>
		}
		return (
			<F>
				<Drawer variant='permanent' classes={{paper:classes.drawer}}>
					<List>
						{ Object.keys(navicons).map((icon)=> {
							return (
								<ListItem>
									<ListItemIcon>
									 <Tooltip title={icon} placement="right">
										{navicons[icon]}
						            </Tooltip>
									</ListItemIcon>
								</ListItem>
								)
						})
						
						}
						
					</List>
				</Drawer>
				<div className={classes.contentContainer}>
					<textarea 
						rows={50} 
						placeholder='# Write your blog here'
						className={classes.textarea} 
						onChange={this.handleChange}>	
					</textarea>
					<ReactMarkdown 
						className={classes.markdownDisplay} 
						source={this.state.input}
					/>
				</div>
			</F>
		)
	}
}

export default withStyles(styles)(AdminHome)