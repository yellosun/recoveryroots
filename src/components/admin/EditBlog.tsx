import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core'

interface Props {classes: any, open:boolean, blogId:number|null}
interface State {}

const styles = createStyles({

})

class EditBlog extends Component<Props, State> {
	render() {
		const {classes, open} = this.props
		return (
			<Dialog open={open} fullScreen>
				<DialogTitle> Are you sure you want to delete?</DialogTitle>
				<DialogActions>
				</DialogActions>
			</Dialog>
		)
	}
}

export default withStyles(styles)(EditBlog)