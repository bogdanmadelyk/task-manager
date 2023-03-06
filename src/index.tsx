import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<div>hello</div>
	</React.StrictMode>
)