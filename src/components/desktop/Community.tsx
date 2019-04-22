import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Person from '@material-ui/icons/Person'
import Mail from '@material-ui/icons/Mail'
import { getInsta } from '../../fetch'
import heart from '../../styles/imgs/heart.png'
import signatures from '../../styles/imgs/signatures.png'
import { mailchimp } from '../../fetch'

interface Props {classes: any}
interface State {name:string, email:string, imgs:Array<string>, img:object, error:string|null, success:string|null}

class Community extends Component<Props, State> {

	state = {
		imgs: [],
		img: {},
		name: '',
		email: '',
		success: null,
		error: null,
	}

	componentDidMount() {
		getInsta().then((imgs:any)=> {
			this.setState({ imgs })
		})
	}

	handleImgHover = (img:any) => {
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

	handleSubmit = async (event:any) => {
		event.preventDefault()
		console.log(this.state.name,this.state.email)
		this.setState({error: null, success: null})

		let data = await mailchimp(this.state.email, this.state.name)
		console.log(data)
		if (data.response) {
			this.setState({success: 'Welcome to the digital tribe! We are excited to share this wild, beautiful journey with you.'})
		}

		if (data.error) {
			if (data.error.includes('already')) {
				this.setState({error: 'Mmm, looks like this email is already taken.'})
			} else {
				this.setState({error: 'Oops! Something went wrong. Please try again.'})
			}
		}
	}

	render() {
		const {classes} = this.props
		return (
			<div className={classes.commContainer}>
				<div className={classes.signUpContainer}>
					<Card className={classes.card}>
						<div className={classes.note}>
							<div style={{fontWeight: 'bold', fontSize: '1em', textAlign: 'center'}}>Dearest soul,</div>
							<div style={{margin: '15px 0'}}>It grieves our hearts that we happen to meet under such heavy, overwhelming and often terrifying circumstances. However, we are quickly relieved to know that incredible things blossom from the impossibly dark.</div>
							<div style={{margin: '15px 0'}}>We have been traveling the road you may be finding yourself on and want to provide a hand, a friend, a guiding light to a home you have always dreamed possible. You are worthy of acceptance. You are worthy of love. You are worthy of connection, healing, and a meaningful life.</div>
							<div style={{margin: '15px 0'}}>Our hope is that the resources provided in our <a href='#digital-tribe'>bimonthly email</a> serve as reflection and connection supports. We are so grateful that you found us and, even more, for your committment to yourself.
							</div>
							<div style={{margin: '15px 0'}}>You are already so powerful and enough, there's truly nothing you can't do. Whether you sign up for our digital tribe or not, you are always safe, always accepted, and always supported here.</div>
							<div style={{margin: '15px 0'}}>Know that we see you and are honored to witness your light.</div>	
							<div style={{margin: '15px 0', textAlign: 'center', marginTop: 20}}>With love and hope,</div>
						</div>
						<img src={signatures} alt='signatures' width={200}/>
					</Card>
				</div>

				<div id='digital-tribe' className={classes.formContainer}>
					<Card className={classes.formCard}>	
						<div className={classes.formTitle}>Join the Digital Tribe</div>

						<div style={{maxWidth: 500, fontSize: 11, padding: '20px 40px 0', textAlign: 'justify'}}>
							In our bimonthly email, you will find personal (<a href='/about#stacy'>Stacy</a> and/or <a href='/about#violet'>Violet</a>) experiences related to recovery, new blogs or program updates, and eating disorder recovery related resources.<br/><br/>These resources are selected based on industry best practices, compassion-centered healing, embodiment and connection. We only send tools, tips and guides we can personally attest to the transformative and sustainable benefit. <br/><br/>That being said, we are not liscensed professionals and these materials do not substitute for medical or professional counseling. If you wish to no longer recieve content for any reason, you can unsubscribe any time or way you need.
						</div>
						<form className={classes.signUpForm} onSubmit={this.handleSubmit}>
							<div>
							<div style={{display: 'flex', flexFlow: 'row nowrap'}}>
								<TextField style={{width: '100%', marginRight: 30}}
									placeholder="name"
									onChange={(e:any)=> this.setState({name: e.target.value})}
									InputProps={{
							          startAdornment: (
							            <InputAdornment position="start">
							              <Person className={classes.formIcon}/>
							            </InputAdornment>
							          ),
							        }}
								/>
								<TextField style={{width: '100%'}}
									placeholder="email"
									onChange={(e:any)=> this.setState({email: e.target.value})}
									InputProps={{
							          startAdornment: (
							            <InputAdornment position="start">
							              <Mail className={classes.formIcon}/>
							            </InputAdornment>
							          ),
							        }}
								/>
							</div>
							</div>
							<Button size='small' className={classes.formBtn} type='submit'>Get recovery resources</Button>
							{this.state.success ? <div className={classes.msg} style={{backgroundColor: '#537764'}}>{this.state.success}</div> : null}
							{this.state.error ? <div className={classes.msg} style={{backgroundColor: '#7d2828'}}>{this.state.error}</div> : null}
						</form>
					</Card>
				</div>

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
	msg: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
		color: 'white',
		fontSize: 11,
		textAlign: 'center',
		padding: '12px 0'
	},
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
		padding: '40px 60px',
		maxWidth: '40%',
	},
	note: {
		lineHeight: 2,
		fontSize: '.8em',
		textAlign: 'justify'
	},
	formContainer: {
		backgroundColor: 'seashell',
		height: '80vh',
		width: '100%',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	formCard: {
		backgroundImage: 'url(https://images.pexels.com/photos/916336/pexels-photo-916336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
		backgroundSize: 'cover',
		backgroundPositionY: '-90px',
		height: 500,
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
	},
	formTitle: {
		letterSpacing: 10,
		backgroundColor: 'black',
		padding: '20px 0',
		width: '100%',
		textAlign: 'center',
		color: 'white',
		position: 'absolute',
		top: 0
	},
	signUpForm: {
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: 500,
		padding: '40px 0'
	},
	formIcon: {
		height: '.7em !important'
	},
	formBtn: {
		textTransform: 'lowercase',
		// backgroundColor: '#324e3f',
		backgroundColor: '#866c09',
		padding: '12px 20px',
		letterSpacing: 2,
		color: 'white',
		marginTop: 40
	}
})

export default withStyles(styles)(Community)
// <div className={classes.introText}>In the darkest of hours, <br/>may we find our home <br/>in the ressonance of others.</div>