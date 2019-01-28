import React from 'react'
export default function pageHeader(title:string, bColor:string) {
	return (
		<div style={{
			fontSize: '3em',
			fontFamily: 'Permanent Marker',
			width: '100%',
			padding: 20,
			marginBottom: 20,
			textAlign:'center',
			backgroundColor: bColor,
		}}>
			{title}
		</div>
	)
}