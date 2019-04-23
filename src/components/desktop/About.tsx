import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import stacy from '../../styles/imgs/stacy.jpg'
import violet from '../../styles/imgs/violet.jpg'
import logo from '../../styles/imgs/transparent-logo.png'
import instaBlack from '../../styles/imgs/insta-black.png'
import instaColor from '../../styles/imgs/insta-color.png'
import Footer from '../Footer'

interface Props {classes: any}
interface State {}

class About extends Component<Props, State> {
	render() {
		const {classes} = this.props
		
		return (
			<div className={classes.parentContainer}>
				{/* S+V */}
				<div style={{display: 'flex', height: 300, justifyContent: 'flex-end', padding: 18, maxWidth: 1200, width: '96%'}}>
					<div className={classes.person} style={{backgroundColor: '#d4e8d466'}}>
					<div className={classes.name}>intent</div>
						<div className={classes.snippet}>
							Our paths aligned when we thought all light was lost. However by committing to healing, growth and each other, we discovered truly transformative recovery roots. Our simple yet powerful hope is that these scientifically supported and intuitively aligned resources, tools, and experiences also enable you in the way you need them most.
						<div style={{marginTop: 15, marginBottom: '-20px'}}><a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/edrecoveryroots/'><img height={20} src={instaBlack} alt='rr insta' /></a></div>
						</div>
					</div>
					<div><img alt='rr-logo' src='https://images.pexels.com/photos/1859622/pexels-photo-1859622.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' height={250} width={250} className={classes.profile}/></div>
				</div>

				{/* Stacy */}
				<div style={{display: 'flex', height: 300, padding: 18, maxWidth: 1200, width: '96%'}} id='stacy'>
					<div><img alt='stacy' src={stacy} height={250} width={250} className={classes.profile}/></div>
					<div className={classes.person}>
						<div className={classes.name}>stacy</div>
						<div className={classes.snippet}>
							My purpose here is to be a light for you; to show you the tools and methods to help you heal and grow. I am not here to make you do the work or to fix you. My presence here is to guide you to empowering yourself and taking back your life. Each journey and recovery path is different, and my hope is to honor that and help you discover what works best for you.
							<div style={{marginTop: 15, marginBottom: '-20px'}}><a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/living_vulnerably/'><img height={20} src={instaBlack} alt='stacy insta' /></a></div>
						</div>
					</div>
				</div>

				{/* Violet */}
				<div style={{display: 'flex', height: 400, justifyContent: 'flex-end', padding: 18, maxWidth: 1200, width: '96%'}} id='violet'>
					<div className={classes.person} style={{backgroundColor: 'aliceblue'}}>
						<div className={classes.name}>violet</div>
						<div className={classes.snippet}>
							My purpose is to be a validating witness and source of empowering hope that you can also choose a life you have deserved since birth, a life of unwavering acceptance and unconditional love. Through experience, study, trial and much error, I am here to share what I have learned as a continuous student on the path of recovery and self-discovery.
						<div style={{marginTop: 15, marginBottom: '-20px'}}><a rel="noopener noreferrer" target="_blank" href='https://www.instagram.com/vltmn/'><img height={20} src={instaBlack} alt='violet insta' /></a></div>
						</div>
					</div>
					<div><img alt='violet' src={violet} height={250} width={250} className={classes.profile} style={{transform: 'rotate(90deg)'}}/></div>
				</div>
			</div>
		)
	}
}

const styles = createStyles({
	parentContainer: {
		paddingTop: 100,
		width: '100%',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		backgroundColor: 'seashell'
	},
	profile: {
		borderRadius: '100%',
		// filter: 'grayscale(90%)'
	},
	name: {
		fontSize: '3em',
		fontWeight: 'bold',
		letterSpacing: 30,
		textAlign: 'center',
		position: 'absolute',
		top: 0,
		marginTop: 20
	},
	person: {
		position: 'relative',
		height: 250,
		width: 250,
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fab87245',
		borderRadius: '100%',
		padding: 60,
	},
	snippet: {
		fontSize: '.7em',
		width: '70%'
	},
	story: {
		width: 400,
		fontSize: '.8em',
		textOverflow: 'ellipsis',
		overflow: 'hidden'
		// whiteSpace: 'nowrap'
	},

})

export default withStyles(styles)(About)