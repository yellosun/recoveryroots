import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { getInsta } from '../../fetch'
import Heart from '../../styles/imgs/heart.png'

interface Props {classes: any}
interface State {}

class Community extends Component<Props, State> {

	state = {
		imgs: [],
		img: {}
	}

	componentDidMount() {
		getInsta().then((imgs:any)=> {
			this.setState({ imgs})
		})
	}

	handleImgHover = (img:any) => {
		console.log(img)
		this.setState({img})
	}

	renderInstaImgs = () => {
		const {classes} = this.props
		return this.state.imgs.map((i:any)=> {
			return (
				<GridListTile key={i.link}
					className={classes.instaImg}
					style={{backgroundImage: `url(${i.images.standard_resolution.url})`}}
					onMouseEnter={() => this.handleImgHover(i)}
					onMouseLeave={() => this.setState({ img: {} })}>
					{this.state.img === i && 
						<div className={classes.hoveredImg}>
							<div className={classes.likes}><img src={Heart} alt='likes' height={10} style={{marginRight: 5}}/>{i.likes.count}</div>
						 	<div className={classes.hoveredText}>{i.caption.text.slice(0,200)}...</div>
						</div>
					}
				</GridListTile>
			)
		})
	}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.commContainer}>
				<div className={classes.instaContainer}>
					<GridList className={classnames(classes.instaContainer, 'scrollbar')} cols={4.5}>
						{this.renderInstaImgs()}
					</GridList>
				</div>
			</div>
		)
	}
}

const styles = createStyles({
	commContainer: {
		backgroundColor: 'seashell',
		padding: '100px 0 0',
		width: '100%',
		overflow: 'hidden'
	},
	instaContainer: {
		display: 'flex',
		flexWrap: 'nowrap',
	},
	instaContentContainer: {
		width: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'

	},
	instaImgContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		maxWidth: 750,
		width: '50%'
	},
	instaImg: {
		width: '250px !important',
		height: '250px !important',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		padding: '0 !important'
	},
	hoveredImg: {
		width: 250,
		height: 250,
		backgroundColor: 'rgba(0,0,0,.8)',
		color: 'white',
		padding: 20
	},
	hoveredText: {
		fontSize: '.8em',
		paddingTop: 10,
		width: '80%'
	},
	likes: {
		display: 'flex',
		alignItems: 'center',
		fontSize: '.8em',
	}
})

export default withStyles(styles)(Community)