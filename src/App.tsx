import React, { Component, Fragment as F} from 'react'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { setUser } from './redux/actions/userAction'
import history from './history'
import Sidebar from './components/admin/Sidebar'
import AdminLogin from './components/admin/AdminLogin'
import NavBar from './components/desktop/NavBar'

interface Props {email:string}

class App extends Component<Props> {	
	
	render() {
		return (
			<Router history={history}>
				<div style={{fontFamily: 'Roboto'}}>
					{this.props.email ? 
						<Sidebar history={history}/> 
						:
						<NavBar history={history}/>
					}
					<Route path='/admin/login' component={AdminLogin} />
				</div>
			</Router>
		)
	}
}

const mapStateToProps = (state:any) => ({email: state.user.user.email})

export default connect(mapStateToProps)(App)
