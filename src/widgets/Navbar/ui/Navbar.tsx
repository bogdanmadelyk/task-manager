import React from 'react'
import {AppBar, Button, Container, Typography, useTheme} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const Navbar = () => {

	const theme = useTheme()

	const NavbarStyles = {
		padding: 1,
		left: 'var(--sidebar-width)',
		width: 'calc(100% - var(--sidebar-width))',
		height: 'var(--navbar-height)',
		backgroundColor: theme.palette.info.contrastText,
		backgroundImage: 'none',
		borderBottom: '1px solid ' + theme.palette.divider,
	}
	const ContainerStyles = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		height: '100%'
	}

	return (
		<AppBar sx={NavbarStyles}>
			<Container sx={ContainerStyles}>
				<Typography sx={{fontWeight: 600}} variant="h4" component="h1">Title</Typography>
				<Button variant='outlined' color='inherit'>
					<AddIcon/>
					Add New Task
				</Button>
			</Container>
		</AppBar>
	)
}

export {Navbar}