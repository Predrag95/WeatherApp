import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { themeColors } from '../../data/themeColorsData';

export type ThemeName = keyof typeof themeColors;

export type ThemeColors = typeof themeColors[ThemeName];

interface AppState {
  theme: ThemeName;
  themeColors: ThemeColors;
}

const initialState: AppState = {
  theme: 'light',
  themeColors: themeColors['light'],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppTheme: (state, action: PayloadAction<ThemeName>) => {
      state.theme = action.payload;
      state.themeColors = themeColors[action.payload];
    },
    setAppThemeColors: (state, action: PayloadAction<ThemeColors>) => {
      state.themeColors = action.payload;
    },
  },
});

export const { setAppTheme, setAppThemeColors } = appSlice.actions;
export default appSlice.reducer;