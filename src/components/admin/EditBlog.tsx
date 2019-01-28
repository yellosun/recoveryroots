import React, { Component } from 'react'
import { getBlog } from '../../fetch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, TextField, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

interface Props {
	classes: any,
	open:boolean,
	blog:any,
	handleEditDialog:any,
}
interface State {
	title:string, 
    body:string, 
    headerImg:string, 
    uri:string, 
    category:string, 
    description:string, 
    render:boolean|null,    
}

const styles = createStyles({

})

class EditBlog extends Component<Props, State> {
	
	state = {
		title: '',
		body: '',
		headerImg: '',
		description: '',
		render: false,
		category: '',
		uri: '',
	}

	shouldComponentUpdate(nextProps:any, nextState:any) {
		console.log('state',nextState)
		console.log('Props',nextProps)
		return true
	}


	render() {
		const {classes, open, handleEditDialog, blog} = this.props
		return (
			<Dialog open={open} fullScreen>
				<AppBar>
					<Toolbar>
						<IconButton onClick={()=> handleEditDialog()}>
							<CloseIcon/>
						</IconButton>

					</Toolbar>
				</AppBar>
				<DialogTitle> Are you sure you want to delete?</DialogTitle>
				<DialogActions>
				</DialogActions>
			</Dialog>
		)
	}
}

export default withStyles(styles)(EditBlog)