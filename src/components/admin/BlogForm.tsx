import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any, handleChange:any}
interface State {}

const styles = createStyles({
	form: {
		outline: 'none',
		width: '45%',
	}
})

class BlogForm extends Component<Props, State> {
	render() {
		const {classes, handleChange} = this.props
		return (
			<form className={classes.form}>
			
				<textarea 
					rows={30} 
					placeholder='# Write blog here'
					onChange={handleChange('textarea')}	
					style={{width: '100%'}}>
				</textarea>
			</form>
		)
	}
}

export default withStyles(styles)(BlogForm)