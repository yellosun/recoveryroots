import React, { Component} from 'react'
import { Router, Route, Link, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import Media from "react-media"
import './styles/App.css'
import { setUser } from './redux/actions/userAction'
import history from './history'
import AdminSidebar from './components/admin/Sidebar'
import AdminLogin from './components/admin/AdminLogin'
import NavBar from './components/desktop/NavBar'
import MobileSidebar from './components/mobile/Sidebar'

interface Props {email:string}

class App extends Component<Props> {	
	
	render() {
		return (
			<Router history={history}>
				<Media query="(min-width: 1200px)">
					{matches => matches ? (
						<div style={{fontFamily: 'Roboto'}}>
							{this.props.email ? 
								<AdminSidebar history={history}/> 
								:
								<NavBar history={history}/>
							}
							<Route path='/admin/login' component={AdminLogin} />
						</div>
					) : (
						<div style={{fontFamily: 'Roboto'}}>
							<MobileSidebar history={history}/> 
						</div>
					)}
				</Media>
			</Router>
		)
	}
}

const mapStateToProps = (state:any) => {
	return ({email: state.user.user.email || null })
}

export default connect(mapStateToProps)(App)
