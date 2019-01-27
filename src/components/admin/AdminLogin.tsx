import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setUser } from '../../actions/userAction'
import { setBlog } from '../../actions/blogAction'
import history from '../../history'
import { login, getUserBlogs } from '../../fetch'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'

interface Props {classes: any, setToken:any, setUser:any, setBlog:any, email:string}
interface State {email?:string, password?:string, errorMsg?:string}

const styles = createStyles({
	container: {
		display: 'flex',
		flexFlow: 'column wrap',
		justifyContent: 'center',
		alignItems: 'center',
	}
})

class Login extends Component<Props, State> {
	
	state = {
		email: '',
		password: '',
		errorMsg: ''
	}

	handleChange = (name:string) => (event:React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ [name]: event.target.value })
	}

	handleSubmit = async (event:any) => {
		event.preventDefault()
		try {
			const user = await login(this.state.email, this.state.password)
	        const blogs = await getUserBlogs(user.id)
	        await blogs.forEach((b:any)=> this.props.setBlog(b))
	        await this.props.setUser(user)
	        history.push('/admin')
		} catch (err) {
			console.log('login error ~>', err.toString())
		}
	}

	render() {
		if (this.props.email) return <Redirect to='/admin'/>
		const {classes} = this.props
		return (
			<div className={classes.container} style={{height: '100vh'}}>
				<Card className={classes.container} style={{padding: 40}}>
					<h1>Admin Login</h1>
					<form onSubmit={this.handleSubmit} className={classes.container}>
						<TextField 
							variant='outlined'
							label='Email'
							value={this.state.email}
							onChange={this.handleChange('email')}
							style={{margin: 20}}
						/>
						<TextField 
							variant='outlined'
							label='Password'
							value={this.state.password}
							onChange={this.handleChange('password')}
							style={{margin: 20}}
						/>
						<Button 
							type='submit'
							style={{marginTop: 20}} 
						>Login</Button>

						<div onClick={this.test}>test</div>
					</form>
				</Card>
			</div>
		)
	}
	test = async () => {
		const token = window.localStorage.getItem('app-token')
		await fetch('/api/users', {
			method: 'GET',
			headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
		})
	}
}

const mapStateToProps = (state:any) => ({ email: state.user.user.email })
const mapDispatchToProps = {setUser, setBlog}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))