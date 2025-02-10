
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  theme: 'light' | 'dark';
  language: 'ru' | 'en';
  licenseKey: string;
  dataDirectory: string;
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'ru' | 'en') => void;
  setLicenseKey: (key: string) => void;
  setDataDirectory: (path: string) => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      theme: 'dark',
      language: 'ru',
      licenseKey: '',
      dataDirectory: '',
      setTheme: (theme) => {
        document.documentElement.className = theme;
        set({ theme });
      },
      setLanguage: (language) => {
        document.documentElement.setAttribute('lang', language);
        set({ language });
      },
      setLicenseKey: (licenseKey) => set({ licenseKey }),
      setDataDirectory: (dataDirectory) => set({ dataDirectory }),
    }),
    {
      name: 'settings-storage',
    }
  )
);
