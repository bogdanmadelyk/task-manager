import {useEffect} from 'react'

export function useFullHeight() {
	useEffect(() => {
		const setHeight = () => {
			document.documentElement.style.setProperty('--full-height', window.innerHeight + 'px')
		}

		setHeight()
		window.addEventListener('resize', setHeight)

		return () => {
			window.removeEventListener('resize', setHeight)
		}

	}, [])
}