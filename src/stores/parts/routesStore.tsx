import create from 'zustand';

type Props = {
  showOnboarding: boolean;
  showPreferences: boolean;
  showApp: boolean;
  showAuth: boolean;
  setPreferences: boolean;
  showEventStream: boolean;
  isGuest: boolean;
};

export const useRouteState = create<Props>(set => ({
  showOnboarding: true,
  showPreferences: false,
  showApp: false,
  showAuth: false,
  setPreferences: false,
  showEventStream: false,
  isGuest: false,
}));
