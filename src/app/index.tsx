import {Navbar} from '../widgets/Navbar'
import {Sidebar} from '../widgets/Sidebar'
import {createTheme, ThemeProvider} from '@mui/material'
import {Content} from '../widgets/Content'
import {useFullHeight} from '../shared/lib/useFullHeight'

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
})
export const App = () => {
	useFullHeight()
	return (
		<ThemeProvider theme={darkTheme}>
			<Sidebar/>
			<Navbar/>
			<Content/>
		</ThemeProvider>
	)
}