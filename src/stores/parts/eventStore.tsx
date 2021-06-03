import create from 'zustand'

type Props = {
	//
	currentEventId: string
	setEventId: (id: string) => void
}

export const useEventState = create<Props>(set => ({
	currentEventId: '',
	setEventId: eventId => set({ currentEventId: eventId }),
}))
