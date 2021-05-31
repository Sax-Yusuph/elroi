import create from 'zustand';

type Props = {
  user: {
    id: number;
    name: string;
    profilePicture: string;
  };
  onBoardingDone: boolean;
  isAuthenticated: false;
  configuredPreferences: false;
};

export const useNotesStore = create<Props>(set => ({
  user: {
    id: 1,
    name: 'Elroi',
    profilePicture:
      'https://i.pinimg.com/474x/c3/2b/5f/c32b5f39a0988148ac919d187d276f1d.jpg',
  },
  onBoardingDone: false,
  isAuthenticated: false,
  configuredPreferences: false,
  doSomething: () => set(state => state),
  removeSomething: () => set(state => state),
}));
