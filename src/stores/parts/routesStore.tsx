import create, { SetState } from 'zustand'

export type RouteStates =
	| 'Onboarding'
	| 'UserPreferences'
	| 'Auth'
	| 'GuestMode'
	| 'EventStream'
	| 'App'

type Props = {
	//
	previousRoute: RouteStates
	currentRoute: RouteStates
	setCurrentRoute: (string: RouteStates) => void
	setPreviousRoute: (string: RouteStates) => void
}

export const useRouteState = create<Props>(set => ({
	currentRoute: 'Onboarding',
	previousRoute: 'GuestMode',
	setCurrentRoute: route => set({ currentRoute: route }),
	setPreviousRoute: route => set({ currentRoute: route }),
}))
