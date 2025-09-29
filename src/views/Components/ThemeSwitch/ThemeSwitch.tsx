import { memo, useMemo, ChangeEvent } from 'react';
import storage from 'local-storage-fallback';
import { Switch, Tooltip } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/store/store';
import type { ThemeName } from '../../../store/slices';
import * as actions from '../../../store/slices';
// import classes from './ThemeSwitch.module.scss';

// import { useMuiStyleHook } from '../../../styles/mui';
import { setColorOpacity } from '../../../Functions/functions';
import { blueColor } from '../../../data/themeColorsData';

import SunIcon from '../../../icons/SunIcon';
import MoonIcon from '../../../icons/MoonIcon';

const ThemeSwitch = () => {

  const { theme, themeColors } = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch<AppDispatch>();
  const setAppTheme = (theme: ThemeName) => dispatch(actions.setAppTheme(theme));

  // const { SwitchButtonStyle } = useMuiStyleHook();

  const themeTypes = useMemo(() => ({
    light: 0,
    dark: 1,
  }), []);

  const strokeHanlder = (type: ThemeName) => !!(theme === type) ? blueColor : setColorOpacity(themeColors['--text-color'], 0.5);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTheme: ThemeName = e.target.checked ? 'dark' : 'light';
    setAppTheme(newTheme);
    storage.setItem('theme', newTheme);
  };

  return (
    <div /*className={classes.container}*/ data-aos='fade-up' data-aos-duration='800' data-aos-offset='-4000'>
      <div>
        <SunIcon className='icon_24' stroke={strokeHanlder('light')} />
      </div>
      <div>
        <Tooltip title='Promeni temu' arrow>
          <Switch
            checked={!!(themeTypes[theme])}
            onChange={handleChange}
          // sx={SwitchButtonStyle()}
          />
        </Tooltip>
      </div>
      <div><MoonIcon className='icon_24' stroke={strokeHanlder('dark')} /></div>
    </div>
  );
};

export default memo(ThemeSwitch);