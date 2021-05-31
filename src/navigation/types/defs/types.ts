/****************
 *
 * parameters for individual screens --> level 1 (lowest level) nesting ***
 *
 * *****************/

//Events
export type EventsStackParamsList = {
  Events: undefined;
  SingleEvent: {eventId: string};
  RegisterForEvent: undefined;
};

//Preferences
export type PreferenceStackParamsList = {
  Preferences: undefined;
};

//Onboarding
export type OnBoardingParamsList = {
  Onboarding: undefined;
};

//Notes
export type NotesStackParamsList = {
  Notes: undefined;
  Note: {noteId: string};
};

//Home
export type HomeStackParamsList = {
  Home: undefined;
  Notifications: undefined;
  Notification: {notificationId: string};
};

//Streaming screen
export type StreamStackParamsList = {
  StreamingScreen: {eventId: string};
  Transcript: {eventId: string};
  FullScreenVideoMode: {videoId: string};
};

export type AuthStackParamsList = {
  SignUp: undefined;
};

export type FavouriteStackParamsList = {
  Favorites: undefined;
};

export type GuestUserStackParamsList = {
  JoinEvent: {eventId: string};
};

/************************ nested Bottom Tabs --> level 2 nesting ****************/

/**
 * @info  individual screen parameters are nested in their corresponding
 * Bottomtab here
 */

/************************ Drawers --> level 3 nesting ****************/

/**@info * bottom tabs parameters are nested here
 */
