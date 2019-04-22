import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any, textArr:Array<string>}
interface State {}

class TypeWriter extends Component<Props, State> {

	state = {
	  text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
	}

	componentDidMount() {
		this.handleType()
	}

	handleType = () => {
		const { textArr } = this.props
		const { isDeleting, loopNum, text, typingSpeed } = this.state
		const i = loopNum % textArr.length
		const fullText = textArr[i]

		this.setState({
		text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
		typingSpeed: isDeleting ? 75 : 150
		})

		if (!isDeleting && text === fullText) {

		setTimeout(() => this.setState({ isDeleting: true }), 500)

		} else if (isDeleting && text === '') {

		this.setState({
		isDeleting: false,
		loopNum: loopNum + 1
		})

		}

		setTimeout(this.handleType, typingSpeed)
	}

	render() {
		const {classes} = this.props
		return (
			<div style={{marginLeft: 10}}>
				<span>{this.state.text}</span>
		        <span id="cursor"/>
			</div>
		)
	}
}

const styles = createStyles({
})

export default withStyles(styles)(TypeWriter)