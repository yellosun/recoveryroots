import React, { Component } from 'react'
import classnames from 'classnames'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'
import insta from '../../styles/imgs/insta-lrg-btn.png'
import fb from '../../styles/imgs/fb-lrg-btn.png'
import mail from '../../styles/imgs/mail-lrg-btn.png'
import TypeWriter from '../TypeWriter'

interface Props {classes: any}

const nouns = ['thoughts.', 'heart.', 'questions.', 'hopes.', 'stories.', 'voice.']

class Contact extends Component<Props> {

	render() {
		const {classes} = this.props

		return (
			<div className={classes.contactContainer}>
				<div className={classes.headerText}>share your <TypeWriter textArr={nouns}/></div>
				<div className={classes.circleContainer}>
					<div className={classnames(classes.circle, classes.fb)}>
						<div style={{marginTop: 67, width: '100%'}}>
							<a href='https://www.facebook.com/EDRecoveryRoots/' target='_blank' rel='noreferrer'><img src={fb} alt='fb' height={50} style={{borderRadius: 5}}/></a>
						</div>
					</div>
					<div className={classnames(classes.circle, classes.insta)}>
						<div style={{marginTop: 67, width: '100%'}}>
							<a href='https://www.instagram.com/edrecoveryroots/' target='_blank' rel='noreferrer'><img src={insta} alt='insta' height={50} style={{borderRadius: 5}}/></a>
						</div>
					</div>
					<div className={classnames(classes.circle, classes.email)}>
						<div style={{marginTop: 67, width: '100%'}}>
							<a href='mailto:edrecoveryroots@gmail.com' target='_blank' rel='noreferrer'><img src={mail} alt='insta' height={50} style={{borderRadius: 5}}/></a>
						</div>
					</div>
				</div>
				<div className={classes.imgContainer} style={{height: '-300px'}}>
					<div style={{width: '100%'}}>
						<div className={classnames(classes.img, classes.img1)}></div>
					</div>
					<div style={{width: '100%'}}>
						<div className={classnames(classes.img,classes.img2)}></div>
					</div>
					<div style={{width: '100%'}}>
						<div className={classnames(classes.img,classes.img3)}></div>
					</div>
				</div>
			</div>
		)
	}
}

const styles = createStyles({
	contactContainer: {
		height: '79.2vh',
		backgroundColor: 'seashell',
		width: '100%',
		display: 'flex',
		flexFlow: 'column nowrap',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	headerText: {
		fontSize: '2em',
		letterSpacing: 2,
		display: 'flex',
		marginBottom: 40,
		position: 'absolute',
		top: 0,
		marginTop: 130
	},
	circleContainer: {
		margin: '-525px 0',
		display: 'flex',
		flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2
	},
	imgContainer: {
		width: '100%',
		zIndex: 1,
	    display: 'flex',
	    flexFlow: 'column nowrap',
		alignItems: 'center',
		justifyContent: 'center',
	},
	circle: {
		height: 175,
		backgroundColor: 'white',
		textAlign: 'center'
	},
	img: {
		height: 175,
		width: '100%',
		backgroundPosition: 'center',
	    backgroundSize: 'cover',
	},
	fb: {
		width: 400,
		backgroundColor: '#fab87245',
	},
	insta: {
		width: 800,
		backgroundColor: '#d4e8d466'
	},
	email: {
		width: 600,
		backgroundColor: '#b4c3d1ad'
	},
	img1: {
		backgroundPosition: 'top',
		backgroundImage: 'url(https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
	},
	img2: {
		backgroundImage: 'url(https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
	},
	img3: {
		backgroundImage: 'url(https://images.pexels.com/photos/2120101/pexels-photo-2120101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
	}
})

export default withStyles(styles)(Contact)