/****************
 *
 * parameters for individual screens --> level 1 (lowest level) nesting ***
 *
 * *****************/

//Events
export type EventsStackParamsList = {
	EventScreen: undefined
	SingleEvent: { eventId: string }
	RegisterForEvent: undefined
}

//Preferences
export type PreferenceStackParamsList = {
	Preferences: undefined
}

//Onboarding
export type OnBoardingParamsList = {
	Onboarding: undefined
}

//Notes
export type NotesStackParamsList = {
	NoteScreen: undefined
	Note: { noteId: string }
}

//Home
export type HomeStackParamsList = {
	HomeScreen: undefined
	Notifications: undefined
	Notification: { notificationId: string }
}

//Streaming screen
export type StreamStackParamsList = {
	StreamingScreen: { eventId: string }
	Transcript: { eventId: string }
	FullScreenVideoMode: { videoId: string }
}

export type AuthStackParamsList = {
	SignUp: undefined
	SignIn: undefined
	ForgotPassword: undefined
}

export type FavouriteStackParamsList = {
	FavoriteScreen: undefined
	Favorite: { eventId: string }
}

export type GuestUserStackParamsList = {
	JoinEvent: undefined
}
