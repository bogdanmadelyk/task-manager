import React from 'react'
import {Box, Container, Typography} from '@mui/material'


const Content = () => {
	const ContentStyles = {
		m: 'var(--navbar-height) 0 0 var(--sidebar-width)',
		backgroundColor: 'background.default',
		color: 'text.primary',
		height: 'calc(var(--full-height) - var(--navbar-height))'
	}
	const ContentInnerStyles = {
		paddingTop: 3,
		paddingBottom: 3,
	}
	return (
		<Box sx={ContentStyles}>
			<Container sx={ContentInnerStyles}>
			</Container>
		</Box>
	)
}

export {Content}