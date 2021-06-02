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
	currentRoute: RouteStates
	setCurrentRoute: (string: RouteStates) => void
}

export const useRouteState = create<Props>(set => ({
	currentRoute: 'Onboarding',
	setCurrentRoute: route => set({ currentRoute: route }),
}))
