import React from 'react'
import {Box, Stack, Typography, useTheme} from '@mui/material'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban'

const Sidebar = () => {
	const theme = useTheme()
	const SidebarStyles = {
		position: 'fixed',
		top: 0,
		bottom: 0,
		left: 0,
		width: 'var(--sidebar-width)',
		backgroundColor: theme.palette.info.contrastText,
		borderRight: '1px solid ' + theme.palette.divider,
		color: 'text.primary',
		height: '100%',
		p: 3
	}
	return (
		<Box sx={SidebarStyles}>
			<Stack direction='row' alignItems="center" gap={1}>
				<ViewKanbanIcon fontSize='large'/>
				<Typography variant='h5' sx={{fontWeight: '600'}}>Kanban</Typography>
			</Stack>
		</Box>
	)
}

export {Sidebar}