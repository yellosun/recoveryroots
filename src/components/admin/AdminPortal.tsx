import React, { Component } from 'react'
import {connect} from 'react-redux'
import pageHeader from './PageHeader'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any, user:any}
interface State {}

const styles = createStyles({
})

class AdminPortal extends Component<Props, State> {


	render() {		
		const {classes, user} = this.props
		return pageHeader(`Welcome back, ${user.firstName}!`, '#E9E6AB')
	}
}

const mapStateToProps = (state:any) => ({user: state.user.user})

export default connect(mapStateToProps)(withStyles(styles)(AdminPortal))