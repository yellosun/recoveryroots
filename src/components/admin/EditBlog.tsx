import React, { Component } from 'react'
import { getBlog } from '../../fetch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, TextField, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { Close as CloseIcon, Save as SaveIcon } from '@material-ui/icons'

interface Props {
	classes: any,
	open:boolean,
	blog:any,
	handleEditDialog:any,
}
interface State {
	title:string|null, 
    body:string|null, 
    headerImg:string|null, 
    uri:string|null, 
    category:string|null, 
    description:string|null, 
    render:boolean|null,    
}

class EditBlog extends Component<Props, State> {
	
	state = {
		title: null,
		body: null,
		headerImg: null,
		description: null,
		render: null,
		category: null,
		uri: null,
	}

	render() {
		const {classes, open, handleEditDialog, blog} = this.props
		return (
			<Dialog open={open} fullScreen>
				<AppBar position='static'>
					<Toolbar>
						<IconButton onClick={()=> handleEditDialog()}>
							<CloseIcon/>
						</IconButton>
						<DialogTitle>Edit Blog</DialogTitle>
					</Toolbar>
				</AppBar>
				
				
				<DialogActions>
					<Button className={classes.saveBtn}>
						<SaveIcon style={{marginRight: 5}}/>
						Save
					</Button>
				</DialogActions>
			</Dialog>
		)
	}
}

const styles = createStyles({
	saveBtn: {
		justifyContent: 'flex-end',
	}
})

export default withStyles(styles)(EditBlog)