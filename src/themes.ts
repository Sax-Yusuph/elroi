import deepmerge from 'deepmerge'
import { ThemeType } from 'react-native-magnus'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveThemeName = async (themeName: string) => {
	AsyncStorage.setItem('@theme', themeName)
}

export const getThemeName = async () => {
	const themeName = await AsyncStorage.getItem('@theme')
	return themeName ?? 'light'
}

const commonColors: ThemeType['colors'] = {
	loginExample1Bg: '#F3CFDA',
	brown100: '#865c6c',
	twitter: '#1DA1F2',
	facebook: '#3b5998',
	google: '#4285F4',
	dribbble: '#ea4c88',
}

const commonComponents: ThemeType['components'] = {
	Text: {
		fontSize: 'lg',
		color: 'textDark',
	},
	Button: {
		fontSize: 'lg',
		textTransform: 'capitalize',

		variants: {
			warning: {
				bg: 'yellow600',
				underlayColor: 'yellow700',
			},
			danger: {
				bg: 'red600',
				underlayColor: 'red700',
			},
			success: {
				bg: 'green600',
				underlayColor: 'green700',
			},
			info: {
				bg: 'teal600',
				underlayColor: 'teal700',
			},
			brand: {
				bg: 'blue800',
				underlayColor: 'blue700',
			},

			'warning-border': {
				borderWidth: 2,
				borderColor: 'yellow600',
				color: 'yellow600',
				underlayColor: 'yellow100',
				bg: 'transparent',
			},
			'danger-border': {
				borderWidth: 2,
				borderColor: 'red600',
				color: 'red600',
				underlayColor: 'red100',
				bg: 'transparent',
			},
			'success-border': {
				borderWidth: 2,
				borderColor: 'green600',
				color: 'green600',
				underlayColor: 'green100',
				bg: 'transparent',
			},
			'info-border': {
				borderWidth: 2,
				borderColor: 'teal600',
				color: 'teal600',
				underlayColor: 'teal100',
				bg: 'transparent',
			},
			'brand-border': {
				borderWidth: 1,
				borderColor: 'blue800',
				color: 'blue800',
				underlayColor: 'blue100',
				bg: 'transparent',
			},
		},
	},
	Input: {
		fontSize: 'xl',
		bg: 'card',
		color: 'textDark',

		variants: {
			'border-only': {
				borderWidth: 1,
				bg: 'screenBg',
			},
		},
	},
	Header: {
		bg: 'card',
		color: 'textDark',
	},
	Statusbar: {
		backgroundColor: 'card',
	},
	DropdownOption: {
		bg: 'card',
		color: 'textDark',
	},
	Toggle: {
		circleBg: 'card',
		activeCircleBg: 'card',
		activeBg: 'green500',
	},
	CollapseBody: {
		bg: 'card',
	},
	Drawer: {
		bg: 'card',
	},
	Modal: {
		bg: 'card',
	},
	Overlay: {
		bg: 'card',
	},
	Select: {
		bg: 'card',
	},
	SelectOption: {
		bg: 'card',
	},
}

export const lightTheme: ThemeType = {
	name: 'light',
	components: deepmerge(commonComponents, {
		Statusbar: {
			barStyle: 'dark-content',
		},
	}),
	colors: {
		...commonColors,
		screenBg: 'gray200',
		card: 'white',
		textLight: 'white',
		textDark: 'gray900',
	},
	fontFamily: {
		normal: 'Inter-Medium',
		bold: 'Inter-Bold',
		// medium: 'Karla-Medium',
		100: 'Karla-Regular',
		500: 'Inter-Medium',
		700: 'Karla-Bold',
		900: 'Inter-Bold',
	},
}

export const darkTheme: ThemeType = {
	name: 'dark',
	components: deepmerge(commonComponents, {
		Statusbar: {
			barStyle: 'light-content',
		},

		Button: {
			variants: {
				'warning-border': {
					underlayColor: 'yellow900',
				},
				'danger-border': {
					underlayColor: 'red900',
				},
				'success-border': {
					underlayColor: 'green900',
				},
				'info-border': {
					underlayColor: 'teal900',
				},
			},
		},
	}),
	colors: {
		...commonColors,
		screenBg: 'gray800',
		card: 'gray900',
		textLight: 'gray800',
		textDark: 'white',
	},
}
