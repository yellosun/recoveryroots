import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { getInsta } from '../../fetch'
import heart from '../../styles/imgs/heart.png'
import signatures from '../../styles/imgs/signatures.png'

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
		this.setState({img})
	}

	handleChange = () => {
		
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
							<a href={i.link} style={{textDecoration: 'none', color: 'white'}}>
								<div className={classes.likes}><img src={heart} alt='likes' height={10} style={{marginRight: 5}}/>{i.likes.count}</div>
							 	<div className={classes.hoveredText}>{i.caption.text.slice(0,200)}...</div>
						 	</a>
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
				<div className={classes.signUpContainer}>
					<Card className={classes.card}>
						<div className={classes.note}>
							<div style={{fontWeight: 'bold', fontSize: '1em'}}>Dearest soul,</div>
							<div style={{margin: '10px 0'}}>It grieves our hearts that we happen to meet under such heavy, overwhelming and often terrifying circumstances. However, we are quickly relieved to know that incredible things blossom from the impossibly dark.</div>
							<div style={{margin: '10px 0'}}>We have been traveling the road you may be finding yourself on and want to provide a hand, a friend, a guiding light to a home you have always dreamed possible. You are worthy of acceptance. You are worthy of love. You are worthy of connection, healing, and a meaningful life.</div>
							<div style={{margin: '10px 0'}}>Our hope is that the resources provided in our bimonthly email serve as reflection and connection supports. We are so grateful that you found us and, even more, for your committment to yourself.
							</div>
							<div style={{margin: '10px 0'}}>You are already so powerful and enough, there's truly nothing you can't do. Whether you sign up for our digital tribe or not, you are always safe, always accepted, and always supported here. Know that we see you and are honored to witness your light.</div>	
							<div style={{margin: '10px 0'}}>With love and hope,</div>
						</div>
						<img src={signatures} alt='signatures' width={200}/>
					</Card>
				</div>
			
				<div className={classes.instaContainer}>
					<GridList className={classnames(classes.instaContainer, 'scrollbar')} cols={4.5}>
						{this.renderInstaImgs()}
					</GridList>
				</div>

				<div id='signup-form' className={classes.signupForm}>
					<TextField style={{width: '100%'}}
						label="name"
						onChange={this.handleChange}
					/>
				
				
					<TextField style={{width: '100%', marginTop: 10}}
						label="email"
						onChange={this.handleChange}
					/>
				</div>
			</div>
		)
	}
}

const styles = createStyles({
	commContainer: {
		backgroundColor: 'seashell',
		width: '100%',
		overflow: 'hidden',
	    display: 'flex',
	    flexFlow: 'column nowrap',
	    justifyContent: 'space-between',
	},
	signUpContainer: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		letterSpacing: 2,
		backgroundImage: 'url(https://images.pexels.com/photos/212944/pexels-photo-212944.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
		lineHeight: 2,
		textAlign: 'center'
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
		padding: 20,
		cursor: 'pointer'
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
	},
	cardContainer: {
		width: '50%',
		display: 'flex',
		flexFlow: 'row nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	card: {
		padding: 40,
		maxWidth: '60%'
	},
	note: {
		lineHeight: 2,
		fontSize: '.8em'
	},
	signupForm: {
		backgroundColor: 'mintcream',
		height: 300,
		width: '100%'
	}
})

export default withStyles(styles)(Community)
// <div className={classes.introText}>In the darkest of hours, <br/>may we find our home <br/>in the ressonance of others.</div>