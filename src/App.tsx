import React, { Component, Fragment as F} from 'react'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { setToken, setUser } from './actions/userAction'
import history from './history'
import AdminLogin from './components/admin/AdminLogin'
import AdminHome from './components/admin/AdminHome'

interface Props {token:string}
interface State {}

class App extends Component<Props, State> {	

	render() {
		return (
			<Router history={history}>
				<F>
					{this.props.token ? <Route path='/admin' exact component={AdminHome} /> : <Redirect to='/admin/login'/>}
					<Route path='/admin/login' component={AdminLogin} />}
				</F>
			</Router>
		)
	}
}

const mapStateToProps = (state:any) => ({token: state.token})

export default connect(mapStateToProps)(App)
