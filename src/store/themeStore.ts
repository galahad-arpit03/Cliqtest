import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  landingThemeMode: 'dark' | 'light';
  setLandingThemeMode: (mode: 'dark' | 'light') => void;
  toggleLandingThemeMode: () => void;
}

export const useLandingModeStore = create<ThemeState>()(
  persist(
    (set) => ({
      landingThemeMode: 'light',
      setLandingThemeMode: (mode) => set({ landingThemeMode: mode }),
      toggleLandingThemeMode: () => set((state) => ({ landingThemeMode: state.landingThemeMode === 'dark' ? 'light' : 'dark' })),
    }),
    { name: 'landing-theme-storage' }
  )
);
