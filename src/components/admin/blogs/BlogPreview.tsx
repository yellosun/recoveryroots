import React, { Component } from 'react'
import moment from 'moment'
import ReactMarkdown from 'react-markdown'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any, blog:blog|null}
interface blog {
	id:number,
	title:string, 
    body:string, 
    headerImg:string, 
    uri:string, 
    category:string, 
    description:string, 
    render:boolean, 
    userId:number,
    createdAt:Date
}

class BlogPreview extends Component<Props> {
	render() {
		const {classes} = this.props
		return (
			<div>

			</div>
		)
	}
}

const styles = createStyles({

})

export default withStyles(styles)(BlogPreview)