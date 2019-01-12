import React, { Component, Fragment as F} from 'react'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { setUser } from './actions/userAction'
import history from './history'
import AdminHome from './components/admin/AdminHome'
import AdminLogin from './components/admin/AdminLogin'

interface Props {email:string}
interface State {}

class App extends Component<Props, State> {	

	renderRoute = () => ({
					
	})

	render() {
		console.log(this.props.email)
		return (
			<Router history={history}>
				<F>
					{this.props.email ? 
						<Route path='/admin' exact component={AdminHome} /> 
					: 
						<Redirect to='/admin/login'/>
					}
					<Route path='/admin/login' component={AdminLogin} />
				</F>
			</Router>
		)
	}
}

const mapStateToProps = (state:any) => ({email: state.user.user.email})

export default connect(mapStateToProps)(App)
