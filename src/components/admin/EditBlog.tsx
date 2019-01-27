import React, { Component } from 'react'
import { getBlog } from '../../fetch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { AppBar, Toolbar, TextField, IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

interface Props {classes: any, open:boolean, blogId:number|null}
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
		render: null,
		category: '',
		uri: '',
	}

	async componentDidMount() {
		let blog = await getBlog(this.props.blogId)
	}

	render() {
		const {classes, open} = this.props
		return (
			<Dialog open={open} fullScreen>
				<AppBar>
					<Toolbar>
						<IconButton><CloseIcon/></IconButton>
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