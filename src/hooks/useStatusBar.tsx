import { useEffect } from 'react'
import { StatusBar } from 'react-native'

interface StatusBarProps {
	bgColor?: 'dark' | 'light' | 'brand'
	hidden?: boolean
}

const useStatusBar = ({ bgColor = 'light', hidden = false }: StatusBarProps) => {
	const colors = { light: '#fff', dark: '#000', brand: 'blue' }

	useEffect(() => {
		const unSubscribe = () => {
			if (hidden) return StatusBar.setHidden(hidden)

			StatusBar.setBackgroundColor(colors[bgColor])
			StatusBar.setBarStyle(bgColor !== 'light' ? 'dark-content' : 'light-content')
			StatusBar.setTranslucent(true)
		}

		return unSubscribe
	}, [bgColor])

	return null
}

export default useStatusBar
