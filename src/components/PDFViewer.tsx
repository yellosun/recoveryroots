import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any, type:string}

class PDFViewer extends Component<Props> {
	
	renderPDF = () => {
		if (this.props.type === 'privacy') {
			return (
				<iframe src="https://docs.google.com/document/d/e/2PACX-1vTpYBZGHaxNbkdo3NYm3E9hVz62SjhMc8X9NmC1AZOW4fySfp-FsSBuxdfwwyARjhG4gBC4HlfIjRUf/pub?embedded=true"
					frameBorder={0}
					height={'100%'}
					width={'100%'}
				/>
			)
		} else if (this.props.type === 'terms') {
			return (
				<iframe src="https://docs.google.com/document/d/e/2PACX-1vQ6pdQH_4Afg-8unyTbNXIszlPr_ISlkgvq44pJUysRvEz1swmxzOHy39YN3PTJo2fBjcoytfAoD_av/pub?embedded=true"
					frameBorder={0}
					height={'100%'}
					width={'100%'}
				/>
			)
		} else {
			return (
				<iframe src="https://docs.google.com/document/d/e/2PACX-1vR10ltJH_GyjCum3-N8ktcm870tr8ms-hAwQDUZxG5pg55k7GUPu4bvXAEBDGmnt_qKtOto43b56qio/pub?embedded=true"
					frameBorder={0}
					height={'100%'}
					width={'100%'}
				/>
			)
		}
	}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.pdfContainer}>
				{this.renderPDF()}
			</div>
		)
	}
}

const styles = createStyles({
	pdfContainer: {
		height: '79.2vh',
		width: '100%',

	}
})

export default withStyles(styles)(PDFViewer)