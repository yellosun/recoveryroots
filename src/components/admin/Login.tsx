import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

interface Props {classes: any}
interface State {email?:string, password?:string}

const styles = createStyles({

})

class Login extends Component<Props, State> {
	
	state = {
		email: '',
		password: ''
	}

	handleChange = (name:string) => (event:React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ [name]: event.target.value })
	}

	render() {
		const {classes} = this.props
		return (
			<div>
				<form>
					<TextField 
						variant='outlined'
						label='Email'
						value={this.state.email}
						onChange={this.handleChange('email')}
					/>
					<TextField 
						variant='outlined'
						label='Password'
						value={this.state.password}
						onChange={this.handleChange('password')}
					/>
				</form>
			</div>
		)
	}
}

export default withStyles(styles)(Login)